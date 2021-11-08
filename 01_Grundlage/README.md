# Analyse

## Lernziele
* [AE1: Ich kann VMs für Services einsetzen](#AE1)
* [AE2: Ich kann selber (SSH) Public/Private Keys erstellen und einsetzen](#AE2)
* [AF3: Ich kann einen SSH Key erstellen und diesen für die Verbindung zur VM verwenden](#AF3)
* [AE4: Ich kann Linux Pakete suchen und installieren](#AE4)
* [AE5: Ich kann Linux Befehle einsetzen und deren Funktion erklären](#AE5)

## AE1

1. Anbieter
Als erstes muss der Anbieter für die VM definiert werden. In unserem Fall haben wir folgende drei Cloud Anbieter zur verfügung:
- AWS Amazon Cloud
- Azure Microsoft Cloud
- Maas TBZ Cloud

In diesem Beispiel beziehen wir uns auf den Anbieter Maas. Grundsätzlich sind die funktionalitäten bei allen Cloud Anbietern gleich.

3. VM erstellen
Um eine neu VM zu erstellen gehen wir im MAAS in unseren KMV (Die Kernel-based Virtual Machine ist eine Infrastruktur des Linux-Kernels zur Virtualisierun)[^1]
![Bild1](../00_Allgemein/images/01_Grundlage/1.png)

4. Den gewünschten Service per Cloud-Init Deployen

                #cloud-config - Installiert den nginx Web Server
                packages:
                - nginx

5. Testing




## AE2


## AF3


## AE4


## AE5


Quelle: [Kompetenz Matrix](https://gitlab.com/ch-tbz-hf/Stud/cnt/-/tree/main/1_Kompetenzmatrix#matrix)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)

[^1]: KVM Beschreibung [Wikipedie](https://de.wikipedia.org/wiki/Kernel-based_Virtual_Machine)