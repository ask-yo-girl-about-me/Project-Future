# Grundlage

## Lernziele
* [AE1: Ich kann VMs für Services einsetzen](#AE1)
* [AE2: Ich kann selber (SSH) Public/Private Keys erstellen und einsetzen](#AE2)
* [AF3: Ich kann einen SSH Key erstellen und diesen für die Verbindung zur VM verwenden](#AF3)
* [AE4: Ich kann Linux Pakete suchen und installieren](#AE4)
* [AE5: Ich kann Linux Befehle einsetzen und deren Funktion erklären](#AE5)

## AE1
Ich kann VMs für Services einsetzen

### 1. Anbieter

Als erstes muss der Anbieter für die VM definiert werden. In unserem Fall haben wir folgende drei Cloud Anbieter zur verfügung:
- AWS Amazon Cloud
- Azure Microsoft Cloud
- Maas TBZ Cloud

    In diesem Beispiel beziehen wir uns auf den Anbieter Maas. Grundsätzlich sind die funktionalitäten bei allen Cloud Anbietern gleich.

### 2. VM erstellen

Um eine neu VM zu erstellen gehen wir im MAAS in unseren KVM (Die Kernel-based Virtual Machine ist eine Infrastruktur des Linux-Kernels zur Virtualisierun)[^1]

![Bild1](../00_Allgemein/images/01_Grundlage/1.png)

Sobald man beim gewünschten KVM ist, kann man eine neue VM erstellen (compose VM)

![Bild2](../00_Allgemein/images/01_Grundlage/2.png)

Beim erstellen füllt man die Pflichtfelder aus und wenn gewünscht Optionale ebenfalls ändern.

Pflichtfelder:
- Hostname
- Domain
- Zone
- Ressourcen Pool

Optional:
- Architecture
- Arbeitsspeicher RAM
- Cores

![Bild3](../00_Allgemein/images/01_Grundlage/3.png)

### 3. Den gewünschten Service per Cloud-Init Deployen

Sobald die VM die wir erstellt haben fertig gestellt wurde in bereit ist, müssen wir diese Deployen.
Dafür wählen wir die entsprechende VM aus und gehen unter "Take Action" --> "Deploy..."

![Bild4](../00_Allgemein/images/01_Grundlage/4.png)

Hier hat man die Möglichkeit das OS und die Version dazu auszuwählen. In unserem Falle wird dies Ubuntu 20.04 LTS sein.
Bei diesem Punkt muss man sich noch überlegeb, ob man den Service manuell installiert oder per Cloud-Init Data/File.

![Bild5](../00_Allgemein/images/01_Grundlage/5.png)

Wenn man dies fertig Deployd hat, muss man nurnoch abwarten bis die VM fertiggestellt wird.
In dem folgenden Bild sieht man, dass die VM noch in bearbeitung ist.

![Bild6](../00_Allgemein/images/01_Grundlage/6.png)

                #cloud-config - Installiert den nginx Web Server
                packages:
                - nginx

### 4. Testing

Je nach dem was für ein Service man installiert/eingerichtet hat, muss man oder kann man es auf andere Weise testen.

In unserem Fall wurde ein NGINX Web Server installiert.
Somit greiffen wir per Webbrowser darauf zu. Erwartet wird ein HTML Site "Welcome to nginx!".

![Bild7](../00_Allgemein/images/01_Grundlage/7.png)

## AE2


## AF3


## AE4


## AE5


Quelle: [Kompetenz Matrix](https://gitlab.com/ch-tbz-hf/Stud/cnt/-/tree/main/1_Kompetenzmatrix#matrix)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)

[^1]: KVM Beschreibung [Wikipedie](https://de.wikipedia.org/wiki/Kernel-based_Virtual_Machine)