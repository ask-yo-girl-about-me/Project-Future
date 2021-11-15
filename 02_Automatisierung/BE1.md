# BE1
*Ich kann Infrastructure as Code mit Beispielen erklären*

## Verwendungsart

Infrastructure as a Code wird bei den Cloud Anbietern per Cloud-Init unterstützt. Man bereitet so sein Cloud-Init Code vor und kann somit schnell, effizient und einfach eine Infrastruktur per Code aufsetzen.

Weitere Dienste dafür sind Vagrant oder TerraForm und viele weitere.

## Infrastrucutr as Code

"Infrastructure as Code" ist eine denkweise für das Automatiseren von IT Infrastrukturen. Dabei werden wiederholbare Prozesse als Code abgebildet.
Der Grundgedanke dahinter ist, ein bestehendes System mit den Konfigurationen zur jeder Zeit schnellst möglich mit dem kleinst möglichen Aufwand zu Installierten.
Zu dem sollte es die IT-Mitarbeiter mit Routine arbeiten entlasten und somit Zeit für weichtigere Dinge ermöglichen.
Es unterstüzt zu dem die ständigen Verädenrungen und Verbessrungen der Infrastrukturen. Die Lösungen können mittels Test bewiesen werden und nicht nur mit Therotischen Diskusionen.
Firmen oder Kunden können sich schneller von Migrations oder Update Problemen erholen

![IaaC](../00_Allgemein/images/02_Automatisierung/BE1/infrastructure-as-code.png)

Quelle: [Blog-Stackpath](https://blog.stackpath.com/infrastructure-as-code-explainer/)

## Verwendungs Beispiel 1

Nehmen wir an, dass der Kunde "A" ein ERM System basierend auf einer SQL Datenbank in er Cloud betreibt.
Nun wurde anfangs Woche eine neue Mitarbeiter eingestellt, der auf dem System arbeiten kann sich aber nicht wirklich mit gefahren im Internet auskennt.
Der neue Mitarbeiter hat nun in einem verdächtigen E-mail den Anahang geöffnet. Inerhalb kürzister Zeit ist die ganze Infrastruktur durch einen Crypto-Virus verschlüsselt.
Die Firma kontaktiert sehr gestresst Ihren IT-Betreuer. Der IT-Betreuer ergreift sofort Massnahmen und fährt den betroffenen Cloud Server herunter.
Nebenbei erstellt der IT-Betreuer eine Neue Cloudserver und startet die Installation mittles dem Cloud-init Script, welches all Konfigurationsinformationen des Installiertem OS und ERM System binhaltet. Inner kürzister Zeit Läuft das ERM System auf dem neuen Cloudserver. Nun löst der IT-Betreuer von Datensatz Backup noch ein Recovery aus.
Sobald das Recovery fertig ist, kontaktiert der IT-Betreuer den Kunden und teilt Ihm die guten neuigkeiten mit. Zu guter Letzt verteilt der IT-Beutreuer den neuen Systemzugriff und der Kunde kann nach einem nicht allzulangen ausfall glücklich weiterarbeiten.

## Verwendungs Beispiel 2

Der Kunde "B" arbeitet mit dem FIBU System Verson 7. Nun will die Geschäftsleitung neu QR-Code Rechnungen einführen. Dafür wird aber die FIBU Version 9 benötigt.
Nun kann das vorhandene Cloud-init Script auf die Neue Version angepasst werden und mittels neuem Scritp kann für den Kunden "B" ein Test VM erstellt werden. Auf der Test VM kann das FIBU Version 9 getestet und neu benötigte Konfigurationen erstellt werden. Sobald der Test fertig ist und alle neu benötigten Konfigurationen im Cloud-init Scritp erfasst sind, kann mittels Scritp die VM mit dem FIBU Version 9 immer wieder installiert werden. Zum schluss müssen nur noch die Produktivdaten Migriert werden.

___

[BE2](https://github.com/ask-yo-girl-about-me/Project-Future/blob/main/02_Automatisierung/BE2.md)

[02_Automatisierung](../02_Automatisierung)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)