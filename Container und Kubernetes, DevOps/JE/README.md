Projekt-Future Container und Kubernetes, DevOps
========
# Inhaltsverzeichnis
- [JE](/01_Kompetenzen/JE/)

    Architektur = JE1: Ich kann Microservices erstellen

# Einleitung / Erklärung

Bei den Microservices gibt es zwei verschieden Konzepte:

**Synchrone Microservices (REST)**

  - Ein Microservice ist synchron, wenn er bei der Bearbeitung von Requests selber einen Request an andere Microservices stellt und auf das Ergebnis wartet.

Vor- / Nachteile

- Einfach zu verstehen
- Bessere Konsistenz (Informationen werden immer neu abgerufen)

- Resilience ist aufwändiger

**Asynchrone Microservices (Messages)**

  - Der Microservice schickt einem anderen Microservice (Event Bus, Message Server) einen Request, wartet aber nicht auf eine Antwort.

Vor- / Nachteile

- Bei einem Ausfall wird die Nachricht später übertragen
- Übertragung kann fast immer garantiert werden
- Mesasages als Event implementieren

# Microservices Betreiben

Um nachfolgende Services zu betreiben wir eine Kubernetes Umgebung gebraucht.

Dazu erstellen wir eine VM mit mindestens 8 GB RAM, 2 CPUs und 32 GB HD
Als Cloud-init Script, verwenden folgendes Skript.

    #cloud-config
    users:
      - name: ubuntu
        sudo: ALL=(ALL) NOPASSWD:ALL
        groups: users, admin
        home: /home/ubuntu
        shell: /bin/bash
        lock_passwd: false
        plain_text_passwd: 'password'        
    # login ssh and console with password
    ssh_pwauth: true
    disable_root: false    
    packages: 
      - unzip
    runcmd:
      - sudo snap install microk8s --classic
      - sudo usermod -a -G microk8s ubuntu
      - sudo microk8s enable dns ingress
      - sudo mkdir -p /home/ubuntu/.kube
      - sudo microk8s config >/home/ubuntu/.kube/config
      - sudo chown -f -R ubuntu /home/ubuntu/.kube
      - sudo snap install kubectl --classic   
      - sudo microk8s kubectl apply -f https://raw.githubusercontent.com/mc-b/duk/master/addons/dashboard-skip-login-no-ingress.yaml
      - su - ubuntu -c "git clone https://gitlab.com/ch-tbz-hf/Stud/cnt.git"
      - sudo mkdir /data
      - sudo chown ubuntu:ubuntu /data
      - su - ubuntu -c "cp -rp cnt/2_Unterrichtsressourcen/K/jupyter /data"
      - sudo microk8s kubectl apply -f https://raw.githubusercontent.com/mc-b/lernkube/master/data/DataVolume.yaml
      - sudo microk8s kubectl apply -f https://raw.githubusercontent.com/mc-b/duk/master/jupyter/jupyter-base-microk8s.yaml

**Testen der Umgebung auf der Kommandozeile**

Anmelden mittels ssh (Mac, Linux) oder putty, bitvise (Windows). User: `ubuntu`, Password ``password``.
Einen Apache Web Server starten:

    kubectl apply -f https://raw.githubusercontent.com/mc-b/duk/master/test/apache.yaml

Der Port 80 des Webservices wird von Kubernetes wird automatisch auf 32xxx gemappt und kann wie folgt angezeigt werden:

    kubectl get services

Die IP-Adresse der VM und der anzeigte Port ergibt den URL wo der Apache Webserver läuft.

**Microservices - REST (Synchrone)**

Das Beispiel besteht aus drei Microservices: Order, Customer und Catalog. Order nutzt Catalog und Customer mit der REST-Schnittstelle. Ausserdem bietet jeder Microservice einige HTML-Seiten an.Zusätzlich ist im Beispiel ein Apache-Webserver installiert, der dem Benutzer mit einer Webseite einen einfachen Einstieg in das System ermöglicht.

**Asynchrone Microservices**

Das System besteht aus einem Microservice order, der eine Bestellung über die Weboberfläche entgegennimmt. Die Bestellung schickt der Bestellprozess dann als Record über Kafka an den Microservice für den Versand shipping und den Microservice für die Erstellung der Rechnung invoicing.Die Bestellung wird als JSON übertragen. So können der Rechnungs-Microservice und der Versand-Microservice aus der Datenstruktur jeweils die Daten auslesen, die für den jeweiligen Microservice relevant sind.Der Versand-Microservice und der Rechnungs-Microservice speichern die Informationen aus den Records in ihren eigenen Datenbank-Schemata. Alle Microservices nutzen eine gemeinsame Postgres-Datenbank.

**Umsetzung**

Beispiel vom Unterricht: 

Kubernetes Web Oberfläche: ``10.1.38.34:8443``

![Bild1](/Container%20und%20Kubernetes,%20DevOps/JE/img/1.png)

Jupyter Oberfläche: ``10.1.38.34:32188``

![Bild1](/Container%20und%20Kubernetes,%20DevOps/JE/img/2.png)

09-1-kubectl.ipynb File

![Bild1](/Container%20und%20Kubernetes,%20DevOps/JE/img/3.png)

Order Processing: ``10.1.38.34:32280``

![Bild1](/Container%20und%20Kubernetes,%20DevOps/JE/img/4.png)