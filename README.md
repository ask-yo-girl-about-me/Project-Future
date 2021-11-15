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

## Unsere Idee

Wir haben uns überlegt, der Fachabteilung folgende Dienste in der Cloud zur verfügung zu stellen.

- Apache (Website)
- MySQL (Database)

Per Cloud-Init Code kann die Fachabteilung diese Dienste auch selbst mehrfach aufziehen.

- - -

## Fazit
