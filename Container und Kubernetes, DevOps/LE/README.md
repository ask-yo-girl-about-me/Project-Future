Projekt-Future Container und Kubernetes, DevOps
========
# Inhaltsverzeichnis
- [LE](/01_Kompetenzen/LE/)

    Continuous Integration / Delivery = LE1: Ich kann Continuous Integration / Delivery einsetzen

# Continous Integration

Die Continous Integration ist ein Begriff aus der Software-Entwicklung, welcher die fortlaufenden Weiterentwicklung und Zusammenführung von Komponenten zu einer Anwendung beschreibt. 
Das Ziel dieses Prozesses ist die Steigerung der Softwarequalität. 

Die Entwickler commiten immer wieder kleinere Changes am Source Code zu einem neuen Build. 
Somit werden Bugs im Code schneller aufgedeckt da der Code nicht ewig bei einem Entwickler lokal bleibt. 

# Continous Delivery 

Die Continous Delivery geht noch einen Schritt weiter als die Continous Integration. 
Sobald der Entwickler einen neuen Change Commited und somit ein neuer Build angelegt wurde, beginnen automatisiert die ersten Unit Tests. 
Der Build wird dann automatisch gestaged, während des Statings wird die neue Applikation automatisch in der Test Umgebung installiert und durchläuft weitere Tests. 
Sobald diese Test abgeschlossen wurden, muss der neue Release noch approved werden, dies wird in der Regel durch den Application / Software Owner gemacht. 

Kurz gesagt die Continous delivery geht noch einen Schritt weiter als die Continous Integration indem der Code automatisch ins Test System deployed wird. Zusätzlich werden automatisch Tests des neuen Codes durchgeführt um die neue Version für den Release vorzubereiten. 

![Continous Integration & Delivery](https://d1.awsstatic.com/product-marketing/DevOps/continuous_integration.4f4cddb8556e2b1a0ca0872ace4d5fe2f68bbc58.png)

# Hands on Continous Integration / Delivery 

![Get depl Pods](Container und Kubernetes, DevOps/LE/kub_get_depl_pods.png)

