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

Als erstes haben wir einen Namespace erstellt:

                kubectl create namespace project-f

![Create Namespace](/Container%20und%20Kubernetes%2C%20DevOps/LE/create_namespace.png)

Danach die Container mittels bash-Script:

                %%bash
                cat <<%EOF% | kubectl --namespace project-f apply -f -
                apiVersion: v1
                kind: Service
                metadata:
                name: bpmn-frontend
                labels:
                    app: bpmn-frontend
                    group: web
                    tier: frontend
                spec:
                ports:
                - port: 80
                    targetPort: 80  
                    protocol: TCP
                selector:
                    app: bpmn-frontend
                type: LoadBalancer          
                ---
                apiVersion: apps/v1
                kind: Deployment
                metadata:
                name: bpmn-frontend
                spec:
                replicas: 5
                selector:
                    matchLabels:
                    app: bpmn-frontend
                template:
                    metadata:
                    labels:
                        app: bpmn-frontend
                        group: web
                        tier: frontend
                    spec:
                    containers:
                    - name: bpmn-frontend
                        image: registry.gitlab.com/mc-b/misegr/bpmn-frontend:V0.2
                        imagePullPolicy: IfNotPresent        
                        ports:
                        - containerPort: 80
                        name: bpmn-frontend
                %EOF%

![Create Pods](/Container%20und%20Kubernetes%2C%20DevOps/LE/Create_Pods.png)

Danach kontrollieren wir kurz ob die Pods erstellt worden sind:

                kubectl get pod,deployment,replicaset,service --namespace project-f -o wide

![View Pods](/Container%20und%20Kubernetes%2C%20DevOps/LE/View_Pods.png)

Momentan läuft die Version 0.2, nun wollen wir auf die Version 1.0 umschalten:

                kubectl set image deployment/bpmn-frontend bpmn-frontend=registry.gitlab.com/mc-b/misegr/bpmn-frontend:V1.0 --namespace project-f

![Pods Update](/Container%20und%20Kubernetes%2C%20DevOps/LE/Pods_update.png)

Die Update history kann ebenfalls angezeigt werden:

                kubectl rollout history deployment/bpmn-frontend --namespace project-f

Fals die neue Version noch nicht funtkioniert wie gewollte, kann das ganze mit dem folgendem Befehl rückgängig gemacht werden:

                kubectl rollout undo deployment/bpmn-frontend --namespace project-f

                
___

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)