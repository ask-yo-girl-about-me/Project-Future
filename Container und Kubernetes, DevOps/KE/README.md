Projekt-Future Container und Kubernetes, DevOps
========
# Inhaltsverzeichnis
- [KE](/01_Kompetenzen/KE/)
   
    Kubernetes = KE1: Ich kann die Merkmale von Kubernetes erklären

    Kubernetes Installation = KE2: Ich kann einen Kubernetes Cluster installieren

    Kubernetes Ressourcen = KE3: Ich kann Kubernetes Ressourcen deren Einsatzzweck zuordnen

# Kubernetes kurz erklärt

Kubernetes ist ein Open-Source-System zur Automatisierung der Bereitstellung, Skalierung und Verwaltung von Container-Anwendungen. Das System wurde von Google entworfen und dann an die **Cloud Native Computing Foundation** gespendet. Die Anwendung wird ebenfalls von führenden Cloud-Plattformen unterstützt.

# Merkmale der Kubernetes

Die Merkmale von Kubernetes sind folgende:

- Unveränderlich (Immutabel)
- Ausführen von Anweisungen (Deklarative statt Imperative)
- System sind regenerativ, heisst bei einem Absturz wird automatisch Neugestartet
- Skalieren der Services durch Änderung der Deklaration
- Abstraktion der Infrastruktur statt in Rechnern Denken
- Anwendungsorientiertes statt Technik
- Entkoppelte APIs – LoadBalancer / Ingress (Reverse Proxy)

# Installation Kubernetes Cluster

Die Kubernetes Umgebung haben wir mit MicroK8s von Ubuntu installiert.

MicroK8s ist ein Open-Source-System zur Automatisierung der Bereitstellung, Skalierung und Verwaltung von containerisierten Anwendungen. Es bietet die Funktionalität von Kubernetes-Kernkomponenten mit geringem Platzbedarf, skalierbar von einem einzelnen Knoten bis zu einem hochverfügbaren Produktionscluster.

Durch die Reduzierung der Ressourcenverpflichtungen, die zum Ausführen von Kubernetes erforderlich sind, ermöglicht MicroK8s, Kubernetes in neue Umgebungen zu bringen, zum Beispiel:

- Kubernetes in ein leichtgewichtiges Entwicklungstool verwandeln
- Bereitstellung von Kubernetes für die Verwendung in minimalen Umgebungen wie GitHub CI
- Anpassung von Kubernetes für IoT-Anwendungen mit kleinen Geräten

Entwickler nutzen MicroK8s als kostengünstiges Testgelände für neue Ideen

Wir haben für das Kubernetes Beispiel eine VM mit 8GB RAM, 2 CPUs und 32 GB HDD auf dem MAAS bereit gestellt.
Das Installieren haben wir mit dem folgenden Cloud-init Scritp durchgeführt: 

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
                - sudo microk8s kubectl apply -f https://raw.githubusercontent.com/ask-yo-girl-about-me/Project-Future/main/Container%20und%20Kubernetes%2C%20DevOps/KE/webapp/dashboard-skip-login-no-ingress.yaml
                - su - ubuntu -c "git clone https://github.com/ask-yo-girl-about-me/Project-Future"
                - sudo mkdir /data
                - sudo chown ubuntu:ubuntu /data
                - su - ubuntu -c "cp -rp Project-Future/tree/main/Container%20und%20Kubernetes%2C%20DevOps/KE/Jupiter /data"
                - sudo microk8s kubectl apply -f https://raw.githubusercontent.com/ask-yo-girl-about-me/Project-Future/main/Container%20und%20Kubernetes%2C%20DevOps/KE/webapp/DataVolume.yaml
                - sudo microk8s kubectl apply -f https://raw.githubusercontent.com/ask-yo-girl-about-me/Project-Future/main/Container%20und%20Kubernetes%2C%20DevOps/KE/webapp/jupyter-base-microk8s.yaml 

Nach dem die VM fertig deployt ist, kann man mit den folgenden Links auf das Kubernetes und Jupiter Webinterface zugreifen:

- Kubernetes:   http://10.1.38.36:8443 
- Jupiter:      http://10.1.38.36:32188

Nun haben wir eine einzelnen VM mit Kubernetes. Um ein Cluster zu erstellen können mehrere VM noch hinzugefügt werden.
Dafür werden wir uns per Bitvise mit dem Termnial der bestehende Kubernets VM verbinden. Mit dem kommendnen Befehl bestimmt man den Master des Klaster, in unserem Falle ist es die bestehnde VM.

                microk8s add-node

Nach dem Ausführen erhält man die  beitritts Instruktionen ausgaben.

![Add node](/Container%20und%20Kubernetes,%20DevOps/KE/img/1microk8sa_add_node.png)

In unserem Falle könenn die "Worker" mit dem folgendem Befehl dem Kubernetes Cluster beitreten:

                microk8s join 192.168.1.230:25000/92b2db237428470dc4fcfc4ebbd9dc81/2c0cb3284b05 --worker

Nun sucht der Worker die Verbindung zum Master und wenn diese erstellt ist tritt der Worker dem Cluster bei.

Das ganze kann nun auf dem Master überpfüt werden. Dafür den folgenden Befehl im Terminal eingeben.

                microk8s kubectl get no

Die ausgabe sieht wie folgt aus:

![Get node](/Container%20und%20Kubernetes,%20DevOps/KE/img/2get_no.png)
