# CE3
*Ich kann mittels Lift und Reshape Services in die Cloud verschieben, mit Dokumentation*

## Einleitung

Lift & Reshape beschreibt den Prozess bei dem Ressourcen von einer on-prem Umgebung in die Cloud verschoben werden. 
Die Idee hinter einem Lift & Reshape ist nicht die Lösungen 1:1 in der Cloud nachzubauen, sondern auch die Vorteile der Cloud zu nutzen.

Wichtig ist dabei das man sich nicht zu sehr auf spezifische Features einer Cloud verlässt. 
Somit kann verhindert werden, das man einen "Vendor Lock" hat. 

## Beispiele

In diesem Kapitel beschreiben wir ein fiktives Szenario bei der eine Infrastruktur in eine Cloud Umgebung verschoben werden. 

### Ausgangslage

Die Firma Beispiel hat folgende Infrastruktur: 
* On premise Exchange Server / Office 2013 --> stellt Maildienste zur Verfügung / 
* On premise SCCM (System Center Configuration Manager) Server --> Zur Verwaltung der Clients
* FileServer --> Zur Datenablage
* On prem Webserver --> Hostet die Firmenwebseite
* SQL Datenbank Server --> Beinhaltet die Produkte des Webshops. 

### Ausführung

#### Exchange Server / Office 2013

Der Exchange Server wird durch Exchange Online (SAAS) Lösung ersetzt. 
Da aktuell noch Office 2013 eingesetzt wird & Exchange Online sowieso im M365 E3 Plan integriert ist, wird für alle Angestellten eine M365 E3 Lizenz beschaffen. Somit steht der Firma Beispiel auch immer die neueste Office Version zur Verfügung. 

#### On premise SCCM Server

Der SCCM Server wird durch Microsoft Intune (SAAS) ersetzt. 
Die Lizenz dafür ist Teil der oben genannten M365 E3 Lizenz. 

Da Intune eine SAAS Lösung ist können Softwareupdates in Zukunft auch ohne VPN Zugriff aufs Unternehmensnetzwerk verteilt werden. 

#### FileServer

Der on-premise File Server wird durch den Azure Files (IAAS) Service ersetzt. 


#### On prem WebServer

Der inhouse gehostete Webserver, auf dem die Firmenwebseite mit dem eigenen Shop gehostet wird, wird als Ubuntu VM in Azure (IAAS) gehostet. 
Da die Konfiguration des Webservers mittels einem Cloud-init Skripts vorgenommen wird, kann die Firma Beispiel am Black Friday horizontal skalieren um einen Outage des Webshops zu verhindern. 

#### SQL Datenbank Server

Der On prem SQL DB Server wird zu einer Azure SQL Database (PAAS) migriert. 


___

[Nächstes Lernziel CE4](../03_Cloud-Services/CE4.md)

[03_Cloud-Services](../03_Cloud-Services)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)