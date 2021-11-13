# BE2
*Ich kann VMs mit eigenen Cloud-init Scripten aufsetzen*

## VM Aufsetzten mit Cloud-init Script

Auf setzen einer VM mit einem Cloud-init Scritp zeigen wir mittels der MAAS Cloud.

Die VM ist bereits schon erstellt gemässt Schritt [AE1](https://github.com/ask-yo-girl-about-me/Project-Future/blob/main/01_Grundlage/AE1.md).

### VM Aufsetzen

Im MAAS Portal unter dem Menupunkt "Machines" sind die bereitserstellten VMs aufgelistet.

1. Bereitgestellte VM auswählen
2. Aktions Menu öffnen
3. "Deploy..." auswählen

![BE2_1](../00_Allgemein/images/02_Automatisierung_BE2/BE2_1.png)
__________________________________________________________________________________________________________________________________________________________________________________________________


Als nächster Schritt kann das OS ausgewählt werden und die Option dass mit Cloud-init Scritp die VM aufgesetzt werden kann.

1. Aufsetzen mit Cloud-init Script aktivieren
2. Nun kann das Cloud-init Script eingefüght werden
3. Danach mit "Start deployment for machine" weiterfahren

![BE2_2](../00_Allgemein/images/02_Automatisierung_BE2/BE2_2.png)
__________________________________________________________________________________________________________________________________________________________________________________________________


Das Aufsetzen der VM dauert nun ein paar Minuten. Sobald die VM aufgesetzt ist, erscheint diese unter dem Menupunkt "Machines" mit dem Status Deployd.

![BE2_3](../00_Allgemein/images/02_Automatisierung_BE2/BE2_3.png)
__________________________________________________________________________________________________________________________________________________________________________________________________


### VM Test

Das Clodu-init Script hat auf der VM eine SQL-Server installiert mittels Webinterface von "Adminer".
Für den Test öffnen wir nun den Browser und öffnen den Link http://10.9.38.60/adminer.

![BE2_4](../00_Allgemein/images/02_Automatisierung_BE2/BE2_4.png)
__________________________________________________________________________________________________________________________________________________________________________________________________


[02_Automatisierung](../02_Automatisierung)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)