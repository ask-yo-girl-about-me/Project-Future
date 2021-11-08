# Automatisierung
  
## Lernziele
* [BE1: Ich kann Infrastructure as Code mit Beispielen erklären](#BE1)
* [BE2: Ich kann VMs mit eigenen Cloud-init Scripten aufsetzen](#BE2)
* [BE3: Ich habe Cloud-init mit Beispielen Dokumentiert](#BE3)
* [BE4: Ich kann eine valide YAML Datei erstellen, z.B. mit VSCode](#BE4)

Quelle: [Kompetenz Matrix](https://gitlab.com/ch-tbz-hf/Stud/cnt/-/tree/main/1_Kompetenzmatrix#matrix)

## BE1



## BE2



## BE3

### Cloud-init File Apache
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

### Cloud-init File MySQL
                #cloud-config
                users:
                    - name: dev
                    ssh-authorized-keys:
                        - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCyqm8knfxWHHVIg72t9bfU/f30nH6Lbgkhh2G8n7pLpe4CyFiVQC6AL0WKQhpw4pLuJxrs3o9EVtmZU6WKX9W9fhM6EtDyWyuNZssV9ngHDwNptqSYircjBRJD3Wyjoe79wUmetey/Wwr5YMCSlERxX/Yrqq5+ePy/GyInEoH7MVUIdDVgbwQprxZCtowatMGBtQRqIG7n4ppuhvg3QbLU4PYMewbXIir/rt63RMR5Ph66ttKtOrhtx2R0z5I/0rUTzx5xiPg3Fzv9gX/n4gL0MudS7YFE1oz09xDScyOs0UynjC0ohzpdJfuRTWvdXynSSFHo7Y1SqWps1xR0j3q0C/czlRLsHJgvEWXYJ2/l8zC5UA9qdtUyZgyWw4t1BAipKTnh8daR9qAu+PsSKm8Jj7uNOrhVs9dh3F6YnVFBGVxwU1BJH5Ja99K7kiH1BIn3tCYrqp8AprLv/0DiBG7ntxGMPTQ3I0cxU6r5xNT8InWy/4wun/X9of58HyVn4sE= SSH-Key für Project Future 
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
           
## BE4


[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)