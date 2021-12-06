# DE3
*Ich kann VPN mittels Metadata konfigurieren*

## VPN Bezeichnung
Erklärung

![Netzwerkabbild](./../00_Allgemein/images/04_DE3/Netzwerkabbild.png)

## Installation VPN Wire Guard

Die Konfigurationsdateien für unser VPN sind auf dem VPN Gateway der TBZ gespeichert.
Dies wurde durch den Modulleiter vorbereitet.

- Adresse des VPN Gateway ist 10.0.40.8
- Die Dateien befinden sich im Verzeichnis /data/config/
- Die Dateien sind u.a. im TAR Format abgelegt, die Namensgebung entspricht dem Netzwerk, z.B. wg1.38.tag = 10.1.38.0/24

                sudo apt install y wireguard nfs common openssh server

                mkdir config

                sudo mount t nfs 10.0.40.8:/ data config config # Gateway mit Konfigurationsdatein

                tar xvzf config wireguard / wg <Eure Gruppe N>.38.tgz 08.conf

                sudo mv 08.conf / etc wireguard /wg0.conf

                sudo systemctl enable wg quick@wg0.service

                sudo systemctl start wg quick@wg0.service          

## Einrichtung VPN per Cloud-init


## Einrichtung VPN per Metadata


___

[Nächstes Lernziel DE4](../04_Private-Cloud/DE4.md)

[04_Private-Cloud](../04_Private-Cloud)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)