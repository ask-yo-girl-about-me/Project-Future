# AE5
*Ich kann Linux Befehle einsetzen und deren Funktion erklären*

## 1. Einsetzen von Linux Befehlen
Im Linux, wie auch bei andere Betriebsystemen, haben wir zwei Schnittstellen für die Benutzereingabe. Die einte läuft per Benutzeroberfläche. Dies wäre das sogenannte GUI. Alle Einstellungen welche per GUI gemacht werden, können aber auch per Kommandozeilenbefehle über ein Shell/Terminal vorgenommen werden.

Wir arbeiten hier hauptsächlich mit dem Shell und müssen die dementsprechenden Befehle dazu kennen.

Jeder Befehl hat folgendes Grundschema:

                BEFEHL [OPTIONEN] [ARGUMENTE]

Grundsätzlich muss man nur ein Terminal öffnen und ein Belibigen (natürlich korrekt) Befehl eingeben. Je nach Ziel muss man das Grundschema welches oben aufgezeigt ist anpassen, um das erwartet Ergebniss zu erreichen.

## 2. Liste von Nützlichen Linux Befehlen mit Erklärung dazu
    
Aktueller Verzeichnis anzeigen in dem man Arbeitet

                pwd

Verzeichnis Inhalt anzeigen

                ls

Verzeichnis wechseln

                cd

Terminal leeren

                clear

Programminfo herausfinden

                whatis / whatis firefox

Wo ist mein Programm installiert

                which

Mit man kann man eine Hilfe für den entsprechenden Befehl anzeigen

                man

Datei Inhalt anzeigen

                cat

Speicherplatzbedarf anzeigen

                df

## 3. Liste von wichtigen Befehlen für APT[^1]

**APT-GET Grundlage**

                [sudo] apt-get [OPTIONEN] KOMMANDO [PAKET1] [PAKET2]

**APT-GET Beispiele**

Neueinlesen der Paketlisten

                sudo apt-get update

Installierte Pakete wenn möglich auf verbesserte Version aktualisieren

                sudo apt-get upgrade

Deinstallation von einem Paket

                sudo apt-get remove "PAKETNAME"

Installation von einem Paket

                sudo apt-get install "PAKETNAME"

___

[01_Grundlagen](../01_Grundlage)

[02_Automatisierung](../02_Automatisierung)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)

[^1]: APT Befehle [UBUNTUUSERS_APT](https://wiki.ubuntuusers.de/APT/) 