# Automatisierung
  
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
                #cloud-config
                users:
                    - name: dev
                    ssh-authorized-keys:
                        - ssh-rsa AB3NzaC1yc...
                    sudo: ['ALL=(ALL) NOPASSWD:ALL']
                    groups: sudo
                    shell: /bin/bash
                packages:
                    - mysql-client
                    - libmysqlclient-dev
                    - mysql-server
                package-update: true
                package_upgrade: true
                runcmd:
                # SSH
                    - sed -i -e '/^Port/s/^.*$/Port 22/' /etc/ssh/sshd_config
                    - sed -i -e '/^PermitRootLogin/s/^.*$/PermitRootLogin no/' /etc/ssh/sshd_config
                    - sed -i -e '/^PasswordAuthentication/s/^.*$/PasswordAuthentication no/' /etc/ssh/sshd_config
                    - sed -i -e '$aAllowUsers dev' /etc/ssh/sshd_config
                    - sudo service ssh restart
                # Firewall
                    # defaults
                    - sudo ufw default deny incoming
                    - sudo ufw default allow outgoing
                    # exceptions
                    - sudo ufw allow ssh
                    - sudo ufw allow http
                    - sudo ufw allow https
                    # start on boot
                    - sed -i -e '/^ENABLED/s/^.*$/ENABLED=yes/' /etc/ufw/ufw.conf
                    - sudo ufw enable               