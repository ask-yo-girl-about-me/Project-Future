Projekt-Future Container und Kubernetes, DevOps
========
# Inhaltsverzeichnis
- [IE](/01_Kompetenzen/IE/)

    Container Umgebungen = IE1: Ich kann Container Laufzeitumgebungen für verschiedene Anwendungsfälle aufsetzen

    Container Images = IE2: Ich kann Container Images erstellen

    Container Registry = IE3: Ich kann unterschiedliche Container Registries verwenden

# Container Umgebungen

Container Laufzeitumgebungen (Runtimes) werden auf den **Nodes eines Container Clusters** installiert. 
In den **einzelnen Umgebungen** befinden sich keine **kompletten Betriebssysteme** wie das bei virtuellen Maschinen der Fall ist, sondern nur das **Hostsystem** welches die **benötigten Komponenten** der jeweiligen Applikation enthalten. Dies führt dazu das Container einiges **weniger an Ressourcen** benötigen. 
In der Laufzeitumgebung enthalten sind also nur die **benötigten Ressourcen & das Hostsystem**. 

Docker manuell installieren:

                sudo apt update

                sudo apt install apt-transport-https ca-certificates curl software-properties-common

                curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

                sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

                sudo apt update
                
                apt-cache policy docker-ce

                sudo apt install docker-ce

                sudo systemctl status docker

Docker per Cloud-init installieren:

                #cloud-config
                users:
                - name: ubuntu
                sudo: ALL=(ALL) NOPASSWD:ALL
                groups: users, admin
                home: /home/ubuntu
                shell: /bin/bash
                lock_passwd: false
                plain_text_passwd: 'password'        
                # login ssh and console with password
                ssh_pwauth: true
                disable_root: false    
                packages:
                - docker.io
                runcmd:
                - sudo usermod -aG docker ubuntu 

**Einfacher Container Nutzen APACHE**

[Docker Apache](https://hub.docker.com/_/httpd)

Dockerfile erstellen mit folgendem Content:

``touch Dockerfile``

``nano Dockerfile``

                FROM httpd:2.4
                COPY ./public-html/ /usr/local/apache2/htdocs/

                $ docker build -t my-apache2 .
                $ docker run -dit --name my-running-app -p 8080:80 my-apache2

**Einfacher Container Nutzen APP Projekt**

1. Im APP Ordner ein Dockerfile erstellen mit folgendem Inhalt. Hier verwenden wir als Webserver nginx.

                FROM nginx
                COPY . /usr/share/nginx/html

2. Auf der Virtuellen Ubuntu Umgebung das Repo clonen

                git clone https://github.com/ask-yo-girl-about-me/Project-Future.git

3. In den entsprechenden Order wechseln, in dem die Website Inhalte vorhanden sind.

4. Nun Builden wir den Container

                docker image build -t leandrogoetzer/webapp_app:1.0 .

5. Nun sollte das Image vorhanden sein. Dies können wir wie folgt kontrollieren

                docker image ls

6. Nun starten wir den Container

                 docker container run -d --name len-web -p 80:80 leandrogoetzer/webapp_app:1.0

7. Nun können wir per IP und dem Port 80 auf das Index File zugreifen.

[APP Projekt](http://10.1.38.41:80)


# Container Images

## Erklärung

Container ändern die Art und Weise, wie wir Software entwickeln, verteilen und laufen lassen, grundlegend.
Entwickler können Software lokal bauen, die woanders genauso laufen wird – sei es ein Rack in der IT-Abteilung, der Laptop eines Anwenders oder ein Cluster in der Cloud.
Administratoren können sich auf die Netzwerke, Ressourcen und die Uptime konzentrieren und müssen weniger Zeit mit dem Konfigurieren von Umgebungen und dem Kampf mit Systemabhängigkeiten verbringen.

Merkmale

- Container teilen sich Ressourcen mit dem Host-Betriebssystem
- Container können im Bruchteil einer Sekunde gestartet und gestoppt werden
- Anwendungen, die in Containern laufen, verursachen wenig bis gar keinen Overhead
- Container sind portierbar --> Fertig mit "Aber bei mir auf dem Rechner lief es doch!"
- Container sind leichtgewichtig, d.h. es können dutzende parallel betrieben werden.
- Container sind "Cloud-ready"!

## Architektur
Nachfolgend sind die wichtigsten Komponenten von Docker aufgelistet:
Docker Daemon 

Erstellen, Ausführen und Überwachen der Container
Bauen und Speichern von Images
Ab Version 1.11 wurde der Docker Daemon in zwei Prozesse runc zum Starten von Container und containerd zum Betreiben von Container unterteilt.

**Docker Client**

Docker wird über die Kommandozeile (CLI) mittels des Docker Clients bedient
Kommuniziert per HTTP(S) REST mit dem Docker Daemon

Da die gesamte Kommunikation über HTTP(S) abläuft, ist es einfach, sich mit entfernten Docker Daemons zu verbinden und Bindings an Programmiersprachen zu entwickeln.
Images 

Images sind gebuildete Umgebungen welche als Container gestartet werden können
Images sind nicht veränderbar, sondern können nur neu gebuildet werden.
Images bestehen aus Namen und Version (TAG), z.B. ubuntu:16.04.

Wird keine Version angegeben wird automatisch :latest angefügt.

**Container** 

Container sind die ausgeführten Images
Ein Image kann beliebig oft als Container ausgeführt werden
Container bzw. deren Inhalte können verändert werden, dazu werden sogenannte Union File Systems verwendet, welche nur die Änderungen zum original Image speichern.

**(Docker) Container Registry** 

In Container Registries werden Images abgelegt und verteilt

Die Standard-Registry ist der Docker Hub, auf dem tausende öffentlich verfügbarer Images zur Verfügung stehen, aber auch "offizielle" Images.
Viele Organisationen und Firmen nutzen eigene Registries, um kommerzielle oder "private" Images zu hosten, aber auch um den Overhead zu vermeiden, der mit dem Herunterladen von Images über das Internet einhergeht.

## Wie kommen wir zu Images?
- Von vertrauenswürdigen Registry herunterladen ( docker pull/ run )
- Selber Erstellen

## Einfache Web-App in einen Container  verfrachten

**Wie kann diese einfache Web-App erstellt, angepasst und genutzt werden:**

- Dieses Repository Klonen
- Content anpassen
- Docker-Image erstellen und in die Registry pushen
- Docker-Image laufen lassen (Container)
- Auf den laufenden Container zugreifen
- Container und Image anschauen / inspizieren
- Container und Image manipulieren (stoppen, starten, löschen)
- Atom oder Sublime Text etc...

## Vorbereitung

Zuerst brauchen wir eine VM welche Docker installiert hat.
Dies wird direkt mit folgendem Cloud-init File vom Unterricht gemacht.

                #cloud-config
                users:
                - name: ubuntu
                sudo: ALL=(ALL) NOPASSWD:ALL
                groups: users, admin
                home: /home/ubuntu
                shell: /bin/bash
                lock_passwd: false
                plain_text_passwd: 'password'        
                # login ssh and console with password
                ssh_pwauth: true
                disable_root: false    
                packages:
                - docker.io
                runcmd:
                - sudo usermod -aG docker ubuntu 

Zuerst im Home-Verzeichnis ein Unterverzeichnis TEMP_Docker erstellen und reinhüpfen

- ``$ mkdir TEMP_Docker`` *Unterverzeichnis "TEMP_Docker" erstellen*

- ``$ cd TEMP_Docker`` *Ins Unterverzeichnis "TEMP_Docker" wechseln* 
 
- ``$ git clone https://github.com/ask-yo-girl-about-me/Project-Future.git`` *Repo klonen*
 
- ``$ cd Container-CAL-webapp-v1/`` *ins Repo-Unterverzeichnis hüpfen*
 
- ``$ cd APP`` *Ins Unterverzeichnis "APP" hüpfen*
 
- ``$ less Dockerfile`` *Inhalt des Dockerfiles anschauen (Mit Ctrl+X und F2 verlässt man die Ansicht)*
 
- ``$ docker --version `` *Nochmals sicherstellen, dass Docker installiert ist (Notwendig)*

 ---

*Im Verzeichnis ``APP``  gibt es folgende Files:*

- ``views`` *Verzeichnis mit home.pug-File (Content Webseite)*
         
Im ``home.pug-File`` kann der Inhalt der Webseite geändert werden

- ``app.js``   Node-js-App - App-config (Port etc..)

- ``bootstrap.css``   Style

- ``Dockerfile``   Image-Layers (OS, ergänzende SW-Deployment + Portweiterleitung)

- ``package.json``   Manifest

Das sind sämtliche Files, die es für diese einfache Web-App benötigt.

## Content erstellen / anpassen

Es können nun in den oben aufgeführten Files Anpassungen oder Änderungen durchgeführt werden.
Wenn diese Einträge und das Coden des Web-contents abgeschlossen sind, kann daraus ein neues Docker-Image erstellt werden. Dieser Schritt wird wie folgt durchgeführt:

## Neues Docker-Image bauen

        $ docker image build -t leandrogoetzer/webapp_one:1.0 .

`` $ docker image build -t leandrogoetzer/webapp_one:1.0 .`` *Erstelle ein neues Image in diesem Verzeichnis*

Nun wir das Image erzeugt (6 Schritte, wie im Dockerfile vorgesehen. Die "intermediate container" werden temporär erstellt und verwendet, um einen dieser Schritte gem. Dockerfile umzusetzen (danach werden diese wieder gelöscht)

- ``leandrogoetzer`` *Docker-Account (Verwende hier Deinen eigenen Docker-Account)*


- ``webapp_one`` *Image-Name*


- ``1.0`` *Image-Version*


- ``.`` *Verzeichnis (in diesem Fall das aktuelle Verzeichnis)*

## Neues Docker-Image überprüfen

        $ docker image ls

- ``$ docker image ls``  *Überprüfen, ob Image vorhanden ist*

- ``leandrogoetzer/webapp_one 1.`` *Docker-Image (Repository-Name)*

- ``leandrogoetzer/webapp_two 2.`` *Docker-Image (Repository-Name)*

- ``1.0`` *Tag*

- ``f3a0d6a9c988`` *Image-ID*

- ``195MB`` *Size*

## Neues Docker-Image hochladen auf Docker-Hub

        $ docker image push leandrogoetzer/webapp_one:1.0

``$ docker image push leandrogoetzer/webapp_one:1.0``  *Image zu Dockerhub "pushen"*

Falls anschliessend eine Fehlermeldung (Zugriffsverweigerung) komm, liegt dies daran, weil man sich noch mit seinem Docker-Account auf Dockerhub registrieren/einloggen muss.

## Registrieren auf Docker-Hub

Mit dem entsprechenden Docker-Account einloggen und anschliessend nochmals das Docker-Image zum Repository "pushen". In diesem Fall benutze ich meinen eigenen Account. Ersetze meinen Namen (leandrogoetzer) mit Deinem persönlichen Docker-Accountname.

        $ docker login --username=leandrogoetzer
        $ docker image push leandrogoetzer/webapp_one:1.0

``$ docker login --username=leandrogoetzer ``  *Username + Passwort vom Docker-Account*

``$ docker image push leandrogoetzer/webapp_one:1.0``  *Image zu Dockerhub "pushen"*

Auf dem Screenshot wird festgehalten, dass das Passwort **unverschlüsselt** im Verzeichnis /home/ubuntu/.docker/config.json abgelegt wird. 
Es ist jetzt allerdings auch ersichtlich, dass beim zweiten Versuch **keine** Fehlermeldung (Zugriffsverweigerung) mehr erscheint. Das Hochladen in die Registry (Dockerhub) hat diesmal funktioniert.

## Neues Docker-Image überprüfen / inspizieren
In diesem Abschnitt überprüfen wir, ob Images mit gewissen Namensgesbungen (in diesem Fall "Leandro") lokal abgelegt sind. Zusätzlich wird gezeigt, wie ein lokales Image inspiziert werden kann (sehr umfangreiche Informationen)

        $ docker image ls | grep -i leandro
        $ docker image inspect <ID>

``$ docker image ls | grep -i leandro``  *Checken, ob Images mit dem Namen "leandro" vorhanden sind*

``$ docker image inspect <ID>``  *Image-Details inspizieren*

Auf dem Screenshot sieht man, dass zwei Images vorhanden sind. Ich habe noch ein zweites Image mit einem leicht abgeänderten Inhalt erstellt. Zu einem späteren Zeitpunkt wird anhand dieser beiden Images ein "Rolling Upgrade" unter Kubernetes demonstriert. Wir fokussieren uns aber im Moment auf das Image "One".

## Docker Container starten
Nun überprüfen wir noch, ob aus diesem Image ein funktionierender Container erzeugt werden kann. In diesem Tutorial führen wir dazu einen imperativen Befehl mit div. Parametern aus. Jeder Teil des Kommandos wird unten ausführlich erklärt

        $ docker container leandrogoetzer/webapp_one:1.0

``$ docker container run -d --name cal-web -p 8080:8080 leandrogoetzer/webapp_one``  *klappt nicht, da Tag fehlt"*

``$ docker container run -d --name cal-web -p 8080:8080 leandrogoetzer/webapp_one:1.0``  *Funktioniert"*

Auf dem Screenshot ist zu sehen, dass erst der zweite Versuch klappt. Beim starten eines Containers muss in diesem Fall auch der Tag angegeben werden (wurde auch so beim Erstellen des Images eingegeben)

Hier noch Angaben zu den jeweiligen Parametern:

- -d Im Detach-Modus starten


- --name Name des Containers - frei wählbar. In diesem Fall **cal-web**


- 8080:8080 HostPort:ContainerPort - Forwarding des Ports

## Webdienst überprüfen

Überprüfen, ob der Webdienst nach dem starten des Containers wirklich über Port 8080 erreichbar ist

        IP-Adresse:8080

``10.1.38.41:8080``  *Auf Host Browser starten und IP:Port des Webdienstes (Container) eingeben*

[10.1.38.41:8080](http://10.1.38.41:8080/)

## Container Manipulationen (starten / überprüfen / stoppen / löschen)

In diesem Abschnitt widmen wir uns weiteren Manipulationen von Containern. Auch wenn oben bereits dokumentiert, wird hier zwecks Verständlichkeit nochmals gezeigt, wie ein Container im erweiterten Kontext gestartet wird. Es besteht jederzeit die Möglichkeit, diesen zu stoppen und jederzeit wieder zu starten. Falls nicht mehr benötigt, kann er (auch temporär) gelöscht werden.

        $ docker container ls -a | grep -i leandro
        $ docker container run -d --name cal-web01 -p 8080:8080 leandrogoetzer/webapp_one:1.0

``$ docker container ls -a | grep -i leandro`` *Checken, ob Container mit dem Namen "Leandro" läuft*

``$ docker container run -d --name cal-web01 -p 8080:8080`` *leandrogoetzer/webapp_one:1.0  Container starten*

``$ docker container inspect 055`` *Container mit der ID 055* inspizieren*



## Container-Manipulationen mit der Container-ID

        $ docker container stop <Container-ID>
        $ docker container stop <Container-ID>
        $ ocker container rm <Container-ID>



## Container-Manipulationen mit dem Container-Namen

        $ docker container stop <Container-Name>
        $ docker container stop <Container-Name>
        $ ocker container rm <Container-Name>
 
        $ docker container ls -a | grep -i leandro  Checken, ob Container mit dem Namen "Leandro" läuft
        $ docker container stop 055  Container mit der ID 055* stoppen
        $ docker container start 055  Container mit der ID 055* starten
        $ docker container stop cal-web01  Container mit dem Containernamen "cal-web01 stoppen
        $ docker container rm 055  Container mit der ID 055* löschen

## Webdienst überprüfen
Überprüfen, ob der Webdienst nach dem löschen des Containers wirklich nicht mehr über Port 8080 erreichbar ist

        IP-Adresse:8080

``10.4.43.32:8080`` *Auf Host Browser starten und IP:Port des Webdienstes (Container) eingeben*

# Container Registry

In Container Registries werden Images abgelegt und verteilt

Die Standard-Registry ist der Docker Hub, auf dem tausende öffentlich verfügbarer Images zur Verfügung stehen, aber auch "offizielle" Images [Docker](https://hub.docker.com/).
Viele Organisationen und Firmen nutzen eigene Registries, um kommerzielle oder "private" Images zu hosten, aber auch um den Overhead zu vermeiden, der mit dem Herunterladen von Images über das Internet einhergeht.

Eine Container-Registry ist ein Repository oder eine Sammlung von Repositories, in denen Container-Images für Kubernetes, DevOps und die containerbasierte Anwendungsentwicklung gespeichert werden. 

Es gibt zwei Arten von Container-Registries: **öffentliche und private**. 

**Öffentliche Registries** eignen sich hervorragend für **Einzelpersonen oder kleine Teams**, die ihre Registry so **schnell** wie möglich einrichten möchten. Sie bieten lediglich **grundlegende Funktionen** und sind **einfach** zu verwenden. 

Neue und kleinere Unternehmen können Standard- und Open Source-Images als Basis nutzen und nach Bedarf erweitern. Bei diesem Prozess können jedoch **Sicherheitsprobleme** in Bereichen wie **Patching, Datenschutz und Zugriffskontrolle** auftreten. 

**Private Registries** bieten die Möglichkeit, **Sicherheit und Datenschutz** in den Image Storage von unternehmensfähigen Containern zu integrieren, die entweder remote oder lokal gehostet werden. Das jeweilige Unternehmen kann dann entweder eine **eigene Container-Registry entwickeln und bereitstellen** oder **einen kommerziell unterstützten privaten Registry-Service verwenden**. *Diese privaten Registries bieten häufig erweiterte Sicherheitsfunktionen und technischen Support*.

## Docker Registrys

### Basic commands

Start your registry

                docker run -d -p 5000:5000 --name registry registry:2

Pull (or build) some image from the hub

                docker pull ubuntu

Tag the image so that it points to your registry

                docker image tag ubuntu localhost:5000/myfirstimage

Push it

                docker push localhost:5000/myfirstimage

Pull it back

                docker pull localhost:5000/myfirstimage

Now stop your registry and remove all data

                docker container stop registry && docker container rm -v registry

Quelle: [Docker Registry](https://docs.docker.com/registry/) [About Docker Registry](https://docs.docker.com/registry/introduction/)

### Azure

Hier wir mit Azure aufgezeigt, wie man die Azure-Containerregistrierung einrichtet und nutzt.

**Anmelden bei Azure**

Melden Sie sich unter [Azure Portal](https://portal.azure.com) beim Azure-Portal an.

**Erstellen einer Containerregistrierung**

Klicken Sie auf Ressource erstellen>Container>Container Registry.

![Bild1](/Container%20und%20Kubernetes%2C%20DevOps/IE/IE2/Azure-Containerregistrierung/1.png)

Geben Sie auf der Registerkarte Grundlagen Werte für Ressourcengruppe und Registrierungsname ein. Der Registrierungsname muss innerhalb von Azure eindeutig sein und zwischen 5 und 50 alphanumerische Zeichen enthalten. Erstellen Sie im Rahmen dieser Schnellstartanleitung eine neue Ressourcengruppe namens myResourceGroup am Standort *Region*, und wählen Sie für SKU die Option „Basic“ aus.

![Bild2](/Container%20und%20Kubernetes%2C%20DevOps/IE/IE2/Azure-Containerregistrierung/2.png)

Übernehmen Sie für die übrigen Einstellungen die Standardwerte. Wählen Sie dann Überprüfen + erstellen aus. Überprüfen Sie die Einstellungen, und wählen Sie anschließend Erstellen aus. 

Wenn die Meldung Bereitstellung erfolgreich erscheint, wählen Sie die Containerregistrierung im Portal aus.

![Bild3](/Container%20und%20Kubernetes%2C%20DevOps/IE/IE2/Azure-Containerregistrierung/3.png)

Notieren Sie sich den Registrierungsnamen und den Wert des Anmeldeservers, bei dem es sich um einen vollqualifizierten Namen handelt, der auf azurecr.io in der Azure-Cloud endet. Sie verwenden diese Werte in den folgenden Schritten bei den Push- und Pullvorgängen für Images mit Docker.

**Anmelden bei der Registrierung**

Bevor Sie Push- und Pullvorgänge für Containerimages ausführen können, müssen Sie sich bei der Registrierungsinstanz anmelden. [Melden Sie sich auf dem lokalen Computer bei der Azure CLI an](https://docs.microsoft.com/de-DE/cli/azure/get-started-with-azure-cli)

![Anmeldung](/Container%20und%20Kubernetes,%20DevOps/IE/IE2/Azure-Containerregistrierung/4.png)

![Anmeldung](/Container%20und%20Kubernetes,%20DevOps/IE/IE2/Azure-Containerregistrierung/5.png)

[Azure Registry](https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerRegistry%2Fregistries)

**VM erstellen**

Nun für das ganze brauchen wir eine Virtuelle Maschine mit Ubuntu.
Dies wir hier manuelle eingerichtet mit Docker und nicht wie oben mit einem Cloud.init File.

Hier für erstellen wir wie folgt eine VM mit Ubuntu:

                az vm create -n myVM -g <Ressourcengruppe> --image UbuntuLTS --generate-ssh-keys

[Azure Virtual Machines](https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2FVirtualMachines)

**Herstellen einer SSH-Verbindung mit Ihrem virtuellen Linux-Computer**

1. Suchen Sie über die Suchleiste des Azure-Portals nach dem Namen Ihres virtuellen Computers.

2. Klicken Sie auf „Verbinden“, um Ihren VM-Namen und die öffentliche IP-Adresse abzurufen.

3. Stellen Sie mit dem Befehl ssh eine SSH-Verbindung mit Ihrer VM her.
   In meinem Fall jetzt

                ssh -i <Pfad zum privaten Schlüssel> leandro_goetzer@52.174.61.137

![Anmeldung](/Container%20und%20Kubernetes,%20DevOps/IE/IE2/Azure-Containerregistrierung/6.png)

![Anmeldung](/Container%20und%20Kubernetes,%20DevOps/IE/IE2/Azure-Containerregistrierung/7.png)

Quelle: [Schnellstart für Bash in Azure Cloud Shell](https://docs.microsoft.com/de-de/azure/cloud-shell/quickstart)

**Docker installieren**

1. Schritt 1 — Installieren von Docker

                sudo apt update

                sudo apt install apt-transport-https ca-certificates curl software-properties-common

                curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

                sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

                sudo apt update
                
                apt-cache policy docker-ce

                sudo apt install docker-ce

                sudo systemctl status docker

Quelle: [Installieren und Verwenden von Docker unter Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-de)

**Einrichtung und Umsetzung**

                git clone https://github.com/ask-yo-girl-about-me/Project-Future.git

                cd Project-Future/Container\ und\ Kubernetes\,\ DevOps/IE/IE2/APP01/

                docker build . -t webapp_one

Hier kommt nun eine Fehlermeldung. 

                *How to fix docker: Got permission denied while trying to connect to the Docker daemon socket*

                Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: dial unix /var/run/docker.sock: connect: permission denied

Da musste ich folgenden fix ausführen:

                sudo chmod 666 /var/run/docker.sock      

[How to fix docker](https://www.digitalocean.com/community/questions/how-to-fix-docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket)

Nun den Befehl ``docker build`` . -t webapp_one nochmals ausführen.

Nun schauen wir was für Images am laufen sind:

                docker images

![Anmeldung](/Container%20und%20Kubernetes,%20DevOps/IE/IE2/Azure-Containerregistrierung/8.png)

Nun login wir uns ein.

                docker login registryforcnt.azurecr.io

Hier Tagen und Pushen wir den docker in das ACR

                docker tag webapp_one:latest registryforcnt.azurecr.io/webapp_one

                docker push registryforcnt.azurecr.io/webapp_one

![Anmeldung](/Container%20und%20Kubernetes,%20DevOps/IE/IE2/Azure-Containerregistrierung/10.png)

![Anmeldung](/Container%20und%20Kubernetes,%20DevOps/IE/IE2/Azure-Containerregistrierung/11.png)


Quelle: [How to Create Azure Container Registry | Create Docker image and push into Azure Container Registry](https://www.youtube.com/watch?v=New8K6R0hz8)

