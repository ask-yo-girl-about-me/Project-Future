# DE2
*Ich kann weitergehende Konzepte von Maas.io einsetzen, wie Region Controller, VLANs, Monitoring etc.*

Gemäss Lehrer müsste dies vor Ort mit weitere HW gemacht werden. Da wir nicht mehr vor Ort sind, haben wir das ganze einfach Dokumentiert.

## Region Controller

Der Region controller ist das herzstück jeder MAAS Umgebung. Der Region Controller kann via Web Interface & Rest API angesteuert werden. 
Der Region Controller ist in einem HA Environment auch dafür zuständig das im Falle eines Rack Ausfalls der Cutover auf ein anderes Rack gemacht werden könnte. 

Die MAAS-Postgres-Datenbank wird ebenfalls vom Region Controller verwaltet. Zu den typischen Aufgaben auf Regionsebene gehören die Anforderung, dass ein Rack-Controller einen Rechner bootet, und die Bereitstellung des ephemeren Ubuntu-Images, das für die Inbetriebnahme oder das Einschreiben eines Rechners benötigt wird.

### PostgreSQL für die Region Controllers einrichten (regiond)

Es kann eine beliebige Anzahl von API-Servern (Region-Controller) vorhanden sein, solange jeder mit derselben PostgreSQL-Datenbank verbunden ist und die erforderliche Anzahl von Verbindungen zulässt.

Auf dem Primären Datenbankhost muss die Datei `/etc/postgresql/9.5/main/pg_hba.conf` bearbeitet werden. Um so den eventuellen sekundären API-Server zu erlauben, die primäre PostgreSQL-Datenbank zu kontaktieren.

Hier muss man folgenden Zeile eingefügt werden:

*Wo bei folgendes `$SECONDARY_API_SERVER_IP` durch die IP-Adresse des Rechners, auf dem sich der sekundäre API-Server befinden ersetz wird.*

                host maasdb maas $SECONDARY_API_SERVER_IP/32 md5

Nun muss man die Einstellungen speichern per restart der Datenbank:

                sudo systemctl restart postgresql

---
**INFO**

Die primären Datenbank- und API-Server befinden sich häufig auf demselben Host.

---

### Ein neuen Region Host hinzufügen (regiond)

Nun muss man auf einem zweiten Host den neuen Region Controller hinzufügen, indem Sie `maas-region-api` installieren:

                sudo apt install maas-region-api

Nun brauchen wir das file `/etc/maas/regiond.conf` vom primären API Server.

Im unteren Beispiel geht man davon aus, das man es vom 'ubuntu' Account aus dem home directory kopieren kann, mit der verwendung von password authentifizierung. Falls dies nicht der Fall ist müsste man das anpassen.

Der Befehl `local_config_set` bearbeitet diese Datei, indem er auf den Host verweist, der die primäre PostgreSQL-Datenbank enthält.

                sudo systemctl stop maas-regiond
                sudo scp ubuntu@$PRIMARY_API_SERVER:regiond.conf /etc/maas/regiond.conf
                sudo chown root:maas /etc/maas/regiond.conf
                sudo chmod 640 /etc/maas/regiond.conf
                sudo maas-region local_config_set --database-host $PRIMARY_PG_SERVER
                sudo systemctl restart bind9
                sudo systemctl start maas-regiond

Wenn dies gemacht wurde, kontrollieren wir das Log auf allfällige errors:

1. /var/log/maas/regiond.log
2. /var/log/maas/maas.log
3. /var/log/syslog

### Verbesserung der Leistung von Regionalcontrollern

---
**INFO**

Diese Funktionalität ist erst ab MAAS 2.4 verfügbar.

---

In größeren Umgebungen mit mehreren Rack Controllern kann man die Leistung innerhalb einer Region leicht verbessern. Sie können die Anzahl der Arbeiter erhöhen, was eine schnellere (parallele) Abwicklung der internen Kommunikation zwischen Region und Rack Controllern ermöglicht.

Um die Anzahl der Arbeiter zu erhöhen, bearbeiten man einfach `regiond.conf (/etc/maas/regiond.conf)` und setzen Sie `num_workers`. 

Zum Beispiel:

            [...]
            num_workers: 8

Es muss beachtet werden, dass das Hinzufügen zu vieler Worker die Leistung beeinträchtigen kann. Es wird empfehlen einen Worker pro CPU, also bis zu acht Worker insgesamt. Eine darüber hinausgehende Erhöhung ist möglich, erfolgt aber auf eigene Gefahr.

Quelle: [How to manage regions (deb/3.0/UI)](https://maas.io/docs/deb/3.0/ui/region-controllers#heading--postgresql-setup)

___

[VLANs](../04_Private-Cloud/DE2_VLANs.md)

[Lernziel DE2](../04_Private-Cloud/DE2.md)

[04_Private-Cloud](../04_Private-Cloud)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)