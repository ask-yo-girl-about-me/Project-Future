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

2. VM erstellen
Um eine neu VM zu erstellen gehen wir im MAAS in unseren KVM (Die Kernel-based Virtual Machine ist eine Infrastruktur des Linux-Kernels zur Virtualisierun)[^1]

![Bild1](../00_Allgemein/images/01_Grundlage/1.png)

3. Sobald man beim gewünschten KVM ist, kann man eine neue VM erstellen (compose VM)

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


![Bild2](../00_Allgemein/images/01_Grundlage/2.png)



![Bild3](../00_Allgemein/images/01_Grundlage/3.png)



![Bild4](../00_Allgemein/images/01_Grundlage/4.png)



![Bild5](../00_Allgemein/images/01_Grundlage/5.png)



![Bild6](../00_Allgemein/images/01_Grundlage/6.png)


3. Den gewünschten Service per Cloud-Init Deployen

                #cloud-config - Installiert den nginx Web Server
                packages:
                - nginx

4. Testing




## AE2


## AF3


## AE4


## AE5


Quelle: [Kompetenz Matrix](https://gitlab.com/ch-tbz-hf/Stud/cnt/-/tree/main/1_Kompetenzmatrix#matrix)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)

[^1]: KVM Beschreibung [Wikipedie](https://de.wikipedia.org/wiki/Kernel-based_Virtual_Machine)