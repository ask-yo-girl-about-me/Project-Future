Projekt-Future Container und Kubernetes, DevOps
========

## Inhaltsverzeichnis
- [HE](/01_Kompetenzen/HE/)

    Container Technologien = HE1: Ich kann die Technologien hinter Container mit Beispielen erklären

### Historie (HG1)

Container sind ein altes Konzept, welches erst in den letzen Jahren an relevanz gewann. 

An Schwung gewann die Container Technologie seitdem Google mit der Entwicklung von CGroups begann. Diese Technologie erlaubte die Containisierung von Prozessen, Memory, CPU für den Linux Kernel. Anschliessend begann Google damit ihre eigene Infrastruktur in Container zu verlagern. 

Im Jahr 2008 wurde das Linux Containers Project (LXC) initiiert, welches bereits bestehende Technologien, unter anderem Google's CGroup Technologie vereinte um eine vollständige Containerlösung zu bieten. 

Im Jahr 2013 wurde mit Docker die Containieserungstechnologie Mainstreamfähig. 

Seit Juni 2015 existiert die OCI (Open Container Initiative) welche von führenden Unternehmen der Containerbranche gegrüdnet wurde. Das Ziel dieser Organisation ist folgendes: 
* Spezifizierung der runtime-spec Image erstellt & entpackt wird)
* Spezifizierung der image-spec 


### Container Technologien (HF1)

Die Container Technologie erlaubt es Applikationen mit all ihren Abhängigkeiten isoliert von anderen Prozessen auszuführen. 

Die Idee hinter der Erstellung eines Container Images ist es die Ressource isoliert und so Ressourceneffizient wie möglich einzusetzen. 

Jeder Container verfügt über ein eigenes DateiSystem, in dieses wird die Software installiert. Einen eigenen Netzwerk Adapter und eine eigene Prozesshirarchie. 

Ein weiterer Vorteil von Container Umgebungen sind die Out of the Box Features die automatisch bereitgestellt werden wie Portmapping, DNS, DHCP.




