#define Variables
$localfilespath = "C:\Temp\Test" #define where the files are stored on the local computer, example C:\Temp
$subscriptionID = "cd850118-9efa-4191-8e32-4c8fe15bd1df" #enter the subscription ID of your Azure subscription
 #enter the name of your RG
$VMName = "TestX" #Name of your VM
$RessourceGroupName = "RG-$($VMName)"
$image = "UbuntuLTS" #the image defines the OS which is going to be installed CentOS / Ubuntu
$size = "Standard_B1ls" #The size defines the ressource plan which is used. 
$username = "futureuser" #The administrator username for the VM
$sshpublickey = "$localfilespath\ProjectFuture_publickey.pub"
$cloudinitfile = "$localfilespath\Apachecloud-init.yml"

#performing login to AZ CLI
az login

#checking if subscription exists
$subscriptioncheck = az account list --query "[?id=='$subscriptionid']"
$subscriptionexist = $subscriptioncheck.Length -gt 0 
if (!$subscriptionexist)
    {
        Write-Output "The specified subscription $($subscriptionID) does not exist!"
    }
else 
    {
        Write-Output "The specified subscription $($subscriptionID) does exist!"
    }

#checking if the specified ressource group already exists
$RGcheck = az group list --query "[?name=='$RessourceGroupName']"
$RGcheck = $RGcheck.Length -gt 2


If ($RGcheck -like "False")
    {
        Write-Output "The RessourceGroup $($RessourceGroupName) does not exist... Creating RG...  "
        az group create --name $RessourceGroupName --location westeurope --subscription $subscriptionID
    }
else
    {
        Write-Output "The RessourceGroup $($RessourceGroupName) does exist!"
    }


#check if the specified files exist

    #check if the source folder exists
    If (Test-Path $localfilespath)
        {
            Write-Output "The path exists...  "

            #check if the Public key exists
            If (Test-Path $sshpublickey)
                {
                    Write-Output "The Public Key file exists"
                }
            else 
                {
                    Write-Error "The SSH Key file does not exist"
                }
            
            #check if the cloud init file exists
            If (Test-Path $cloudinitfile)
                {
                    Write-Output "The Cloud init file does exist"
                }
            Else
                {
                    Write-Error "The Cloud init file does't exist!"
                }
        }
    else
        {
            Write-Output "The Path does not exist"
        }

Write-Output "Creating VM..... "

#create VM
az vm create --name $VMName --resource-group $RessourceGroupName --subscription $subscriptionID --image $image --size $size --admin-username $username  --public-ip-sku Standard --custom-data $cloudinitfile --ssh-key-values $sshpublickey

Write-Output "VM has been provisioned"

Write-Output "Opening required ports"
#open ports
az vm open-port -g $RessourceGroupName -n $VMName --port 80,443 --priority 310





