Projekt-Future Container und Kubernetes, DevOps
========
## Inhaltsverzeichnis
- [IE](/01_Kompetenzen/IE/)

    Container Umgebungen = IE1: Ich kann Container Laufzeitumgebungen für verschiedene Anwendungsfälle aufsetzen

    Container Images = IE2: Ich kann Container Images erstellen

    Container Registry = IE3: Ich kann unterschiedliche Container Registries verwenden

# Container Umgebungen

Container Laufzeitumgebungen (Runtimes) werden auf jeden Nodes eines Container Clusters installiert. 
In den einzelnen Umgebungen befinden sich keine kompletten Betriebssysteme wie das bei virtuellen Maschinen der Fall ist, sondern nur das Hostsystem welches die benötigten Komponenten der jeweiligen Applikation enthalten. Dies führt dazu das Container einiges weniger an Ressourcen benötigen. 
In der Laufzeitumgebung enthalten sind also nur die benötigten Ressourcen & das Hostsystem. 


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

``10.4.43.32:8080``  *Auf Host Browser starten und IP:Port des Webdienstes (Container) eingeben*

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

Bevor Sie Push- und Pullvorgänge für Containerimages ausführen können, müssen Sie sich bei der Registrierungsinstanz anmelden. [Melden Sie sich auf dem lokalen Computer bei der Azure CLI an](https://docs.microsoft.com/de-DE/cli/azure/get-started-with-azure-cli), und führen Sie dann den Befehl [az acr login](https://docs.microsoft.com/de-DE/cli/azure/acr#az_acr_login) aus. Geben Sie beim Anmelden bei der Azure CLI nur den Namen der Registrierungsressource an. Verwenden Sie nicht den vollqualifizierten Namen des Anmeldeservers.

Azure CLI

                az acr login --name <registry-name>

Azure CLI

                az acr login --name registryforcnt

Der Befehl gibt nach Abschluss des Vorgangs Login Succeeded zurück.

**Pushen eines Image in die Registrierung**

Um ein Image mithilfe von Push an Ihre Azure Container Registry-Instanz übertragen zu können, benötigen Sie zunächst ein Image. Wenn Sie noch nicht über lokale Containerimages verfügen, führen Sie den folgenden docker pull-Befehl aus, um ein vorhandenes öffentliches Image abzurufen. In diesem Beispiel wird das Image hello-world aus Microsoft Container Registry gepullt.

                docker pull mcr.microsoft.com/hello-world

Bevor Sie ein Image mithilfe von Push in Ihre Registrierung übertragen können, müssen Sie es mit dem vollqualifizierten Namen des Anmeldeservers Ihrer Registrierungsinstanz markieren. Der Name des Anmeldeservers wird im Format <registrierungsname>.azurecr.io (nur Kleinbuchstaben) angegeben (Beispiel: mycontainerregistry.azurecr.io).

Markieren Sie das Image mithilfe des Befehls [docker tag](https://docs.docker.com/engine/reference/commandline/tag/). Ersetzen Sie <login-server> durch den Anmeldeservernamen Ihrer ACR-Instanz.

                docker tag mcr.microsoft.com/hello-world <login-server>/hello-world:v1

Beispiel:

                docker tag mcr.microsoft.com/hello-world registryforcnt.azurecr.io/hello-world:v1

Nun können Sie das Image mit docker push per Pushvorgang an die Registrierungsinstanz übertragen. Ersetzen Sie <login-server> durch den Anmeldeservernamen Ihrer Registrierungsinstanz. In diesem Beispiel wird das Repository hello-world mit dem Image hello-world:v1 erstellt.

                docker push <login-server>/hello-world:v1

Nachdem das Image in Ihre Containerregistrierung gepusht wurde, entfernen Sie das Image hello-world:v1 aus Ihrer lokalen Docker-Umgebung. (Beachten Sie, dass der Befehl docker rmi nicht das Image aus dem Repository hello-world in Ihrer Azure-Containerregistrierung entfernt.)

                docker rmi <login-server>/hello-world:v1