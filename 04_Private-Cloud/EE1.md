# EE1
*Ich kann die Service Discovery Umsetzungen einsetzen und dokumentieren*

Service Disovery beschreibt den Prozess das sich Dienste selber miteinander verbinden. 
Dabei wird angenommen das die VM's untereinander schon verbunden sind. 
## Beispiel

Ein Beispiel wäre der Webshop einer Firma, die Datenbank kann intern bleiben, muss nicht direkt von aussen erreichbar sein, der Webshop welcher das Frontend für den Kunden darstellt hingegen schon. Somit greifen die Kunden via dem Frontend, Webseite, auf die Datenbank zu. 

Wir haben dazu die [Beispielapplikation](https://gitlab.com/ch-tbz-hf/Stud/cnt/-/tree/main/2_Unterrichtsressourcen/E#beispielapplikation) verwendet und auf unserer MAAS Umgebung aufgesetzt. 

![EE1](../00_Allgemein/images/04_Privat-Cloud/EE1.1.png)

Da der Name unserer VM auf 09 endet, kriegt sie auch die IP [http://10.1.38.9/ ](http://10.1.38.9/)

Somit können wir über diese IP auf den Apache connecten. Durch die Service Discover wurden die 3 Datenbanken discovered und werden nun so anegzeigt. 
![EE2](../00_Allgemein/images/04_Privat-Cloud/EE1.2.png)

___

[Nächstes Lernziel FE1](../04_Private-Cloud/FE1.md)

[04_Private-Cloud](../04_Private-Cloud)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)
