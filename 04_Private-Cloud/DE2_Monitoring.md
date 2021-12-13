# DE2
*Ich kann weitergehende Konzepte von Maas.io einsetzen, wie Region Controller, VLANs, Monitoring etc.*

## Monitoring im Allgemeinen

Monitoring im allgemeine bedeute nichts anders als beobachtung eines bestimmten Systems.

*Eine Funktion des Monitorings besteht darin, bei einem beobachteten Ablauf oder Prozess festzustellen, ob dieser den gewünschten Verlauf nimmt und bestimmte Schwellwerte eingehalten werden, um andernfalls steuernd eingreifen zu können. Monitoring ist deshalb ein Sondertyp des Protokollierens.*

## Monitoring im Bezug auf das MAAS

MAAS-Dienste können Prometheus-Endpunkte für die Erfassung von Leistungsmetriken bereitstellen. Dazu gehören fünf Endpunkte, die für MAAS-Benutzer besonders interessant sind:

1. TFTP server file transfer latency
2. HTTP requests latency
3. Websocket requests latency
4. RPC calls (between MAAS services) latency
5. Per request DB queries counts

## Aktivieren von Prometheus-Endpunkten

Bei einer Debian-basierten MAAS-Installation installiert man die Bibliothek und starten die MAAS-Dienste wie folgt neu:

                sudo apt install python3-prometheus-client
                sudo systemctl restart maas-rackd
                sudo systemctl restart maas-regiond


MAAS bietet auch optionale Statistiken über Ressourcen, die auf dem MAAS-Server selbst registriert sind. Dazu gehören vier große Kategorien von Informationen:

1. Die Anzahl der Knoten nach Typ, Bogen, ...
2. Anzahl der Netze, Räume, Fabrics, VLANs und Subnetze
3. Gesamtzahl der CPU-Kerne, Arbeitsspeicher und Speicher für Maschinen
4. Zähler für VM-Host-Ressourcen

Nachdem man die Python3-Prometheus-Client-Bibliothek wie oben beschrieben installiert hat, führen man Folgendes aus, um die Statistik zu aktivieren:

Statt der Umgebungsvariable, könnt Ihr "ubuntu" verwenden.

                maas login ubuntu http://localhost:5240/MAAS/api/2.0

                maas ubuntu maas set-config name=prometheus_enabled value=true

## Konfiguration Prometheus

Nach dem durchführen der oben gennanten Schritte, konnten wir den Metrics Tab auf dem Maas erreichen. 


              http://10.1.38.8:5240/MAAS/metrics
              
Allerdings war der Prometheus Client unter **http://10.1.38.8:9090** nicht erreichbar. 
Auch der Service war nicht gelistet unter **service prometheus status** 

Also haben wir den kompletten Prometheus client installiert 

              sudo apt install prometheus

Anschliessend war dann die Prometheus Oberfläche auch verfügbar.
Wir haben dann mittels nano noch das Maas ins Prometheus Monitoring aufgenommen: 


             sudo nano /etc/prometheus/prometheus.yml
            
              
             - job_name: maas
               static_configs:
                - targets:
                  - 10.1.38.8:5239  # for regiond
                  - 10.1.38.8:5249  # for rackd
                  - 10.1.38.8:5239  # regiond-only
                  - 10.1.38.8:5249  # rackd-only

Annschliessend war dann das MAAS Teil des Prometheus Monitorings: 

![DE2.1](../00_Allgemein/images/04_Privat-Cloud/DE2.1.png)

## Grafana

Nun müssen wir Grafana noch installieren, dies wurde mit folgenden Commands gemacht, [Quelle](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-grafana-on-ubuntu-18-04)

Nachdem Grafana installiert wurde, können wir uns via: **http://10.1.38.8:3000** auf die Weboberfläche verbinden. 
Nach dem ersten Login muss ein neues Passwort gesetzt werden. 

### Prometheus als Data Source definieren

Als nächstes wird Prometheus als Source definiert: 

![DE2.2](../00_Allgemein/images/04_Privat-Cloud/DE2.2.png)

Mittels Save & Test können wir einfach testen ob das geklappt hat. 

### Dashboard & Queries

Nun können wir damit beginnen unser Dashboard mit Graphs zu befüllen. 
Die Queries dazu können ganz einfach dem Prometheus Editor entnehmen. 

![DE2.3](../00_Allgemein/images/04_Privat-Cloud/DE2.3.png)


___

[Lernziel DE2](../04_Private-Cloud/DE2.md)

[Nächstes Lernziel DE3](../04_Private-Cloud/DE3.md)

[04_Private-Cloud](../04_Private-Cloud)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)
