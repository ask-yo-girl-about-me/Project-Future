Projekt-Future Container und Kubernetes, DevOps
========

# Inhaltsverzeichnis
- [HE](/01_Kompetenzen/HE/)

    Container Technologien = HE1: Ich kann die Technologien hinter Container mit Beispielen erklären

# Historie (HG1)

Container sind ein altes Konzept, welches erst in den letzen Jahren an relevanz gewann. 

An Schwung gewann die Container Technologie seitdem Google mit der Entwicklung von CGroups begann. Diese Technologie erlaubte die Containisierung von Prozessen, Memory, CPU für den Linux Kernel. Anschliessend begann Google damit ihre eigene Infrastruktur in Container zu verlagern. 

Im Jahr 2008 wurde das Linux Containers Project (LXC) initiiert, welches bereits bestehende Technologien, unter anderem Google's CGroup Technologie vereinte um eine vollständige Containerlösung zu bieten. 

Im Jahr 2013 wurde mit Docker die Containieserungstechnologie Mainstreamfähig. 

Seit Juni 2015 existiert die OCI (Open Container Initiative) welche von führenden Unternehmen der Containerbranche gegrüdnet wurde. Das Ziel dieser Organisation ist folgendes: 
* Spezifizierung der runtime-spec Image erstellt & entpackt wird)
* Spezifizierung der image-spec 

Heute hat Kubernetes sich als allumfängliche Container Management Lösung durchgesetzt. 


# Container Technologien (HF1)

Die Container Technologie erlaubt es Applikationen mit all ihren Abhängigkeiten isoliert von anderen Prozessen auszuführen. 

Die Idee hinter der Erstellung eines Container Images ist es die Ressource isoliert und so Ressourceneffizient wie möglich einzusetzen. 

Jeder Container verfügt über ein eigenes DateiSystem, in dieses wird die Software installiert. Einen eigenen Netzwerk Adapter und eine eigene Prozesshirarchie. 

Ein weiterer Vorteil von Container Umgebungen sind die Out of the Box Features die automatisch bereitgestellt werden wie Portmapping, DNS, DHCP.


# HE1 Ich kann die Technologie hinter Containern mit Beispielen erklären

Container sind eine Form der Betriebssystemvirtualisierung. Dabei werden Linux Laufzeitumgebungen verwendet.
Ein einzelner Container beinhaltet alle benötigten Komponenten wie, Executables, binary Codes, Libraries und Konfigurationsfiles. 
Der Container selbst beinhaltet kein Betriebsystem, sondern verwendet das Betriebssystem auf dem der Container läuft. Somit können auf einem Rechner / Betriebssystem verschiedene Container isoliert voneinander betrieben werden. Dadurch können Container einfach von einem Host System auf ein anderes verschoben werden.

Eine weitere Besonderheit der Container Technologie ist, das es keine richtigen Laufwerke gibt, dazu kommt das in der Regel mehrere Filesysteme unterstütz werden. 
Die Flexibilität der Container Technologie eignet sich besonders für Applikationen, bei denen mehrere Instanzen gleichzeitig ausgeführt werden müssen. Somit kann eine einfache Skalierbarkeit erreicht werden. Ein Beispiel ist hier zum Beispiel der Cloudbasierte MailService von Google, GMAIL. Jedes mal wenn am sich mit seiner GMail adresse an seiner Mailbox einloggt wird im Hintergund ein Container geladen mit der Mailbox des Users. 





