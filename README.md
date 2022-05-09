Projekt-Future
========
## Inhaltsverzeichnis 
- [Grundlagen](https://github.com/ask-yo-girl-about-me/Project-Future/tree/main/01_Grundlage)
    - VMs für Services einsetzen
    - SSH Public/Privat Key erstellen/einsetzen
    - SSH Key erstellen für Verbindung mit einer VM
    - Linux Pakete suchen und installieren


- [Automatisierung](https://github.com/ask-yo-girl-about-me/Project-Future/tree/main/02_Automatisierung)
    - Infrastruktur as Code erklärung (mit Beispielen)
    - VMs mit eigenem Cloud-Init Scripten
    - Cloud-Init Beispiele
    - Valide YAML Datei
    - Ablage Cloud-Init Script in Git
    - Git mittels dem SSH Protokoll nachführen
    
- [Cloud-Services](https://github.com/ask-yo-girl-about-me/Project-Future/tree/main/03_Cloud-Services)
    - Einsatz Cloud Services
    - Einsatz Cloud CLI Tools
    - Lift and Reshape in die Cloud
    - VM erstellung auf 3 verschiedenen Clouds

- [Private-Cloud](https://github.com/ask-yo-girl-about-me/Project-Future/tree/main/04_Private-Cloud)
    - Metal as a Service erklären
    - Einsatz von weitergehende Konzepte wie Region Controller, VLANS, etc.
    - Einsatz von VPN mittels Metadata konfigurieren
    - Konfiguration von abgesicherte Multicloud
    - Einsatz Service Discovery Umsetzung
    - Eisatz Presistenz und Sicherung der Daten

## Auftrag für Praktische Arbeit: Infrastruktur as Code
- Problembeschreibung
    - Die Fachabteilung erwarten von der IT den gleichen Komfort in der Cloud.
    - Die Fachabteiltung wollen selber Ihre Server aufsetzen, mit entsprechend vorbereiteten Services.
  
- Aufgaben
    - Setzt, automatisiert mit Cloud-init mindestens 2 VMs im MAAS und einer Public Cloud auf.
    - Präsentiert, am Schluss, die Lösung (20`) und die erworbenen [Kompetenzen (A-C)](https://gitlab.com/ch-tbz-hf/Stud/cnt/-/tree/main/1_Kompetenzmatrix#matrix)
- Zeit
    - 9 Lektionen

[Kompetenz Matrix](https://gitlab.com/ch-tbz-hf/Stud/cnt/-/tree/main/1_Kompetenzmatrix#matrix)

Projekt-Future Container und Kubernetes, DevOps
========
## Inhaltsverzeichnis
- [HE](/Container%20und%20Kubernetes%2C%20DevOps/HE/HE.md)

    Container Technologien = HE1: Ich kann die Technologien hinter Container mit Beispielen erklären

- [IE](/Container%20und%20Kubernetes%2C%20DevOps/IE/IE.md)

    Container Umgebungen = IE1: Ich kann Container Laufzeitumgebungen für verschiedene Anwendungsfälle aufsetzen

    Container Images = IE2: Ich kann Container Images erstellen

    Container Registry = IE3: Ich kann unterschiedliche Container Registries verwenden

- [JE](/Container%20und%20Kubernetes%2C%20DevOps/JE/JE.md)

    Architektur = JE1: Ich kann Microservices erstellen

- [KE](/Container%20und%20Kubernetes%2C%20DevOps/KE/KE.md)
   
    Kubernetes = KE1: Ich kann die Merkmale von Kubernetes erklären

    Kubernetes Installation = KE2: Ich kann einen Kubernetes Cluster installieren

    Kubernetes Ressourcen = KE3: Ich kann Kubernetes Ressourcen deren Einsatzzweck zuordnen


- [LE](/Container%20und%20Kubernetes%2C%20DevOps/LE/LE.md)

    Continuous Integration / Delivery = LE1: Ich kann Continuous Integration / Delivery einsetzen

[Kompetenz Matrix](https://gitlab.com/ch-tbz-hf/Stud/cnt/-/tree/main/1_Kompetenzmatrix#matrix)

## Unsere Idee

Wir haben uns überlegt, der Fachabteilung folgende Dienste in der Cloud zur verfügung zu stellen.

- Apache (Website)
- MySQL (Database)

Per Cloud-Init Code kann die Fachabteilung diese Dienste auch selbst mehrfach aufziehen.

- - -

## Fazit
Wir haben uns zu dritt die Aufgaben sauber aufgeteilt und somit wusste jeder was er zu tun hat. Grundsätzlich konnten wir alles sehr gut lösen.

Bei der Cloud-Init Thematik stiessen wir schnell an Probleme. Nach dem wir uns aber das Wissen angeeignet haben, wurde die Probleme automatisch gelöst, wie zum Beispiel die Formatierung welche sehr wichtig ist.
Bei den Cloud Anbitern war Azure bei den meisten bekannt. AWS hingegen war aber bei allen sehr unbekannt und brauchte mehr recherche.