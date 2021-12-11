# DE2
*Ich kann weitergehende Konzepte von Maas.io einsetzen, wie Region Controller, VLANs, Monitoring etc.*

## Region Controller

Der Region controller ist das herzstück jeder MAAS Umgebung. Der Region Controller kann via Web Interface & Rest API angesteuert werden. 
Der Region Controller ist in einem HA Environment auch dafür zuständig das im Falle eines Rack Ausfalls der Cutover auf ein anderes Rack gemacht werden könnte. 

Die MAAS-Postgres-Datenbank wird ebenfalls vom Region Controller verwaltet. Zu den typischen Aufgaben auf Regionsebene gehören die Anforderung, dass ein Rack-Controller einen Rechner bootet, und die Bereitstellung des ephemeren Ubuntu-Images, das für die Inbetriebnahme oder das Einschreiben eines Rechners benötigt wird.

### PostgreSQL für die Region Controllers einrichten

Es kann eine beliebige Anzahl von API-Servern (Region-Controller) vorhanden sein, solange jeder mit derselben PostgreSQL-Datenbank verbunden ist und die erforderliche Anzahl von Verbindungen zulässt.

Auf dem Primären Datenbankhost muss die Datei `/etc/postgresql/9.5/main/pg_hba.conf` bearbeitet werden. Um so den eventuellen sekundären API-Server zu erlauben, die primäre PostgreSQL-Datenbank zu kontaktieren.

Hier muss man folgenden Zeile eingefügt werden:

*Wo bei folgendes `$SECONDARY_API_SERVER_IP` durch die IP-Adresse des Rechners, auf dem sich der sekundäre API-Server befinden ersetz wird.*

`host maasdb maas $SECONDARY_API_SERVER_IP/32 md5`

Nun muss man die Einstellungen speichern per restart der Datenbank:

`sudo systemctl restart postgresql`

---
**INFO**

Die primären Datenbank- und API-Server befinden sich häufig auf demselben Host.

---





## VLAN

Ein VLAN wird eingesetzt um verschiedene ports in einem Netz voneinander zu trennen. 

Ein Einsatzbeispiel wäre folgendes: 
Ich habe Zuhause in meinem Netzwerk smarte Geräte wie Kühlschrank etc. sowie Drucker, Computer etc. 
Mit dem VLAN kann ich verhindern, dass wenn die Geräte am selben Switch hängen, netzwerktechnisch getrennt sind. 
Somit könnte sich Schadsotware die vom Kühlschrank ausgeht nicht so einfach auf den PC verbreiten. 

Somit werden die Anschlüsse Netzwerktechnisch abgetrennt. VLAN's sind virtuelle Barierren die Netzwerke am selben Switch voneinander abtrennen. 


## Monitoring

Monitoring ist die wichtigste Komponente, welche nach der Implementierung eines Systems angegangen werden muss. 
Was passiert im Falle wenn das System ausfällt, dann muss der Administrator benachrichtig werden. Ohne Monitoring könnten Pikett Organisationen nicht unterhalten werden. 

Bei einem guten Monitoring werden verschiedene Punkte gemonitored wie Disaster Fälle, Server ist abgestürzt, Service läuft nicht auf dem Server. Oder auch proaktive Faktoren wie, zbsp. die Platte eines Fileservers, die Auslastung der CPU oder RAM auf einem Applikationsserver. Somit könnte ein solcher Dienst vorzeitig unterstützt oder erweitert werden, bevor der potentielle Kunde nicht auf Daten, Webseite etc. zugreifen kann. 
___

[Nächstes Lernziel DE3](../04_Private-Cloud/DE3.md)

[04_Private-Cloud](../04_Private-Cloud)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)
