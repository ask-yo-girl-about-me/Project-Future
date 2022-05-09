# Projekt-Future Container und Kubernetes, DevOps
========
## Inhaltsverzeichnis
- [IE](/01_Kompetenzen/IE/)

    Container Umgebungen = IE1: Ich kann Container Laufzeitumgebungen für verschiedene Anwendungsfälle aufsetzen

    Container Images = IE2: Ich kann Container Images erstellen

    Container Registry = IE3: Ich kann unterschiedliche Container Registries verwenden

# Container Umgebungen

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

## Einfache Web-App in einen Container  verfrachten

**Wie kann diese einfache Web-App erstellt, angepasst und genutzt werden:**

- Dieses Repository clonen
- Content anpassen
- Docker-Image erstellen und in die Registry pushen
- Docker-Image laufen lassen (Container)
- Auf den laufenden Container zugreifen
- Container und Image anschauen / inspizieren
- Container und Image manipulieren (stoppen, starten, löschen)
- Atom oder Sublime Text etc...

**Vorbereitung**

Zuerst im Home-Verzeichnis ein Unterverzeichnis TEMP_Docker erstellen und reinhüpfen

``$ mkdir TEMP_Docker`` *Unterverzeichnis "TEMP_Docker" erstellen*

``$ cd TEMP_Docker`` *Ins Unterverzeichnis "TEMP_Docker" wechseln* 

``$ git clone https://gitlab.com/ser-cal/Container-CAL-webapp_v1.git`` *Repo klonen*

``$ cd Container-CAL-webapp-v1/`` *ins Repo-Unterverzeichnis hüpfen*

``$ cd APP`` *Ins Unterverzeichnis "APP" hüpfen*

``$ less Dockerfile`` *Inhalt des Dockerfiles anschauen*

``$ docker --version `` *Nochmals sicherstellen, dass Docker installiert ist (Notwendig)*

 ---

*Im Verzeichnis ``APP``  gibt es folgende Files:*

``views`` *Verzeichnis mit home.pug-File (Content Webseite)*
         
Im ``home.pug-File`` kann der Inhalt der Webseite geändert werden

``app.js``   Node-js-App - App-config (Port etc..)

``bootstrap.css``   Style

``Dockerfile``   Image-Layers (OS, ergänzende SW-Deployment + Portweiterleitung)

``package.json``   Manifest


Das sind sämtliche Files, die es für diese einfache Web-App benötigt.

# Container Registry

