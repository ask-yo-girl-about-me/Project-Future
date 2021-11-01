# Automatisierung

## Cloud-init File   
                #cloud-config installiert Webserver  
## 01 Lernziele

* BE1: Ich kann Infrastructure as Code mit Beispielen erklären
* BE2: Ich kann VMs mit eigenen Cloud-init Scripten aufsetzen
* BE3: Ich habe Cloud-init mit Beispielen Dokumentiert

Quelle: [Kompetenz Matrix](https://gitlab.com/ch-tbz-hf/Stud/cnt/-/tree/main/1_Kompetenzmatrix#matrix)

## Cloud-init File Apache
                #cloud-config installiert Webserver mit simplen Text
                packages:
                - apache2 
                - php 
                - libapache2-mod-php 
                write_files:
                - content: |
                    <?php echo '<p>Project Future Faild Successfully</p>'; ?>
                path: /var/www/html/index.php
                permissions: '0644


## Cloud-init File MySQL
                