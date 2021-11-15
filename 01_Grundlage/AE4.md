# AE4
*Ich kann Linux Pakete suchen und installieren*

## 1. Linux Pakete suchen

1. **Installierte Pakete**

    Um eine Liste zu erstellen, die alle installierten Pakete und deren Beschreibungen enthält, führt man den Befehl aus. Die Paketliste befindet sich danach in der Datei packages_list.list.

    `COLUMNS=200 dpkg-query -l > packages_list.list`

2. **Wiki for Linux Pakete**

    Wenn man ein speziellen Dienst/Service installieren will, gibt man ganz einfach den Service + Linux oder direkt Ubuntu im Internet ein und man wird sehr schnell fündig.

    Hier aber zwei Links mit grossen Library einiger Pakete.

   - [PKGS.ORG](https://pkgs.org/)

   - [Packages.Ubuntu](https://packages.ubuntu.com/)

3. **Linux Pakete installieren**
   
    `sudo apt-get install PAKETNAME`

    **sudo**    = superuser - do

    *Er ermöglicht berechtigten Benutzern, das Programm im Namen und mit den Rechten eines anderen Benutzers auszuführen. Beispielsweise um Aufgaben auszuführen, die Administratoren vorbehalten sind:* [1^]
    - *Programme installieren (sudo apt-get install ...)* 
    - *Systemkonfigurationen ändern (sudo nano /etc/fstab)*

    **apt-get** = Advanced Packaging Tool

    Beispiel

    `sudo apt-get install apache2`
    
___
[Nächstes Lernziel AE5](../01_Grundlage/AE5.md)

[01_Grundlagen](../01_Grundlage)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)

[1^] Erklärung sudo (https://wiki.ubuntuusers.de/sudo/#root-im-Terminal)