# DE3
*Ich kann VPN mittels Metadata konfigurieren*

## Einrichtung VPN per Metadata

Egal ob Azure, AWS, Privat Cloud (MAAS) stellt jede davon sogenannte Metadaten zur Verfügung.

Diese Informationen brauchen wir für:
- VPN einzurichten
- Spezifische Software zu installieren
- Cloud-init Scripts zu Parametrisieren

Mittels diesen Metadata können Informationen wie Cloud Region, Computer Name, Betriebssystem etc. ausgelesen werden.

### Azure
*Der Azure Instance Metadata Service (IMDS) liefert Informationen über die aktuell ausgeführten Instanzen virtueller Maschinen. Sie können ihn verwenden, um Ihre virtuellen Maschinen zu verwalten und zu konfigurieren. Diese Informationen umfassen die SKU, den Speicher, die Netzwerkkonfigurationen und anstehende Wartungsereignisse. Eine vollständige Liste der verfügbaren Daten finden Sie in der Zusammenfassung der Endpunktkategorien.*

*IMDS ist für laufende Instanzen virtueller Maschinen (VMs) und Instanzen von Skalierungssätzen für virtuelle Maschinen verfügbar. Alle Endpunkte unterstützen VMs, die mit dem Azure Resource Manager erstellt und verwaltet werden. Nur die Kategorie Attested und der Netzwerkteil der Kategorie Instance unterstützen VMs, die mit dem klassischen Bereitstellungsmodell erstellt wurden. Der Endpunkt Attested unterstützt dies nur in begrenztem Umfang.*

*IMDS ist eine REST-API, die unter einer bekannten, nicht routingfähigen IP-Adresse (169.254.169.254) verfügbar ist. Sie können nur innerhalb der VM darauf zugreifen. Die Kommunikation zwischen der VM und IMDS verlässt niemals den Host. Lassen Sie Ihre HTTP-Clients Web-Proxies innerhalb der VM umgehen, wenn Sie IMDS abfragen, und behandeln Sie 169.254.169.254 genauso wie 168.63.129.16.*

Um auf IMDS zuzugreifen, erstellt man eine VM über Azure Ressource Manager oder das Azure Portal und verwenden das folgende Beispiel. Hier ist ein Beispielcode zum Abrufen aller Metadaten für eine Instanz.

`curl -H Metadata:true --noproxy "*" "http://169.254.169.254/metadata/instance?api-version=2021-02-01" | jq`

[Azure Instance Metadata Service](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/instance-metadata-service?tabs=linux)

### AWS

Erzeugen Sie zunächst ein Token mit dem folgenden Befehl.

                TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"

Verwenden Sie dann das Token, um mit dem folgenden Befehl Metadatenelemente der obersten Ebene zu erzeugen.

                curl -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/meta-data/


[Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)

### MAAS

Da bei AWS und Azure dies intern zur verfügung steht, muss dies beim MAAS über [Curtins](https://curtin.readthedocs.io/en/latest/topics/config.html) gemacht werden.
Dazu braucht es eine Preseed Datei.

Das ganze wurde durch das lernMAAS vom Modul schon vorbereitet und somit muss man dies nicht selber einrichten.

___

[Nächstes Lernziel DE4](../04_Private-Cloud/DE4.md)

[04_Private-Cloud](../04_Private-Cloud)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)