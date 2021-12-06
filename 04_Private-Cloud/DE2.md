# DE2
*Ich kann weitergehende Konzepte von Maas.io einsetzen, wie Region Controller, VLANs, Monitoring etc.*

## Region Controller

Der Region controller ist das herzstück jeder MAAS Umgebung. Der Region Controller kann via Web Interface & Rest API angesteuert werden. 
Der Region Controller ist in einem HA Environment auch dafür zuständig das im Falle eines Rack Ausfalls der Cutover auf ein anderes Rack gemacht werden könnte. 

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
