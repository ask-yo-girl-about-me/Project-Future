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

# Kubernetes Ressourcen

## Pod

Ein Pod modelliert einen anwendungsspezifischen "logischen Host": Er enthält einen oder mehrere Anwendungscontainer, die relativ eng gekoppelt sind. In Nicht-Cloud-Kontexten sind Anwendungen, die auf demselben physischen oder virtuellen Rechner ausgeführt werden, mit Cloud-Anwendungen vergleichbar, die auf demselben logischen Host ausgeführt werden.

Der gemeinsame Kontext eines Pods besteht aus einer Reihe von Linux-Namespaces und möglicherweise anderen Isolierungsaspekten - denselben Dingen, die auch einen Docker-Container isolieren. Innerhalb des Kontexts eines Pods können für die einzelnen Anwendungen weitere Teilisolierungen vorgenommen werden.

In Bezug auf Docker-Konzepte ähnelt ein Pod einer Gruppe von Docker-Containern mit gemeinsamen Namespaces und gemeinsamen Dateisystem-Volumes.

## Services

Eine abstrakte Methode, um eine Anwendung, die auf einer Reihe von Pods läuft, als Netzwerkdienst darzustellen.
Mit Kubernetes muss die Anwendung nicht geändert werden, um einen ungewohnten Mechanismus zur Service-Erkennung zu verwenden. Kubernetes weist den Pods eine eigene IP-Adressen und einen einzigen DNS-Namen für eine Gruppe von Pods zu und kann einen Lastausgleich zwischen ihnen herstellen.

## Ingress

Ingress stellt HTTP- und HTTPS-Routen von außerhalb des Clusters zu Diensten innerhalb des Clusters zur Verfügung. Das Routing des Datenverkehrs wird durch Regeln gesteuert, die in der Ingress-Ressource definiert sind.

Ingress kann man sich wie folgt vorstellen:

![Get node](/Container%20und%20Kubernetes,%20DevOps/KE/img/2get_no.png)

Ein Ingress kann so konfiguriert werden, dass er Dienste mit extern erreichbaren URLs versieht, den Datenverkehr ausgleicht, SSL/TLS terminiert und namensbasiertes virtuelles Hosting anbietet. Ein Ingress-Controller ist für die Ausführung des Ingress verantwortlich, normalerweise mit einem Load Balancer, obwohl er auch Ihren Edge-Router oder zusätzliche Frontends konfigurieren kann, um den Verkehr zu bewältigen.

## ReplicaSet

Ein ReplicaSet dient dazu, einen stabilen Satz von Replikaten von Pods aufrechtzuerhalten, die zu einem bestimmten Zeitpunkt laufen. Daher wird es häufig verwendet, um die Verfügbarkeit einer bestimmten Anzahl identischer Pods zu gewährleisten.

Ein ReplicaSet wird mit Feldern definiert, darunter ein Selektor, der angibt, wie die zu erwerbenden Pods zu identifizieren sind, eine Anzahl von Replikaten, die angibt, wie viele Pods es verwalten soll, und eine Pod-Vorlage, die die Daten neuer Pods angibt, die es erstellen soll, um die Kriterien für die Anzahl der Replikate zu erfüllen. Ein ReplicaSet erfüllt dann seinen Zweck, indem es nach Bedarf Pods erstellt und löscht, um die gewünschte Anzahl zu erreichen.

## Deployment

Einsätze
Eine Bereitstellung bietet deklarative Aktualisierungen für Pods und ReplicaSets.

Sie beschreiben in einer Bereitstellung einen gewünschten Zustand, und der Bereitstellungs-Controller ändert den tatsächlichen Zustand in den gewünschten Zustand mit einer kontrollierten Rate. Sie können Einsätze definieren, um neue ReplicaSets zu erstellen oder um bestehende Einsätze zu entfernen und alle ihre Ressourcen mit neuen Einsätzen zu übernehmen.
