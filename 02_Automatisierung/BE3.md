# BE3
*Ich habe Cloud-init mit Beispielen Dokumentiert*

## Cloud-init File Apache

Wir haben zwei Cloud-init Script geschrieben. Das erste installiert ganz simple eine Apache server und erstellt eine PHP Datei:

               #cloud-config installiert Webserver mit simplen PHP Text
                packages:
                - apache2 
                - php 
                - libapache2-mod-php 
                #PHP Text definition mit Berechtigung
                write_files:
                - content: |
                    <?php echo '<p>Project Future Faild Successfully</p>'; ?>
                path: /var/www/html/index.php
                permissions: '0644'



## Cloud-init File MySQL

Das zweite Scritp erstellt zuerst den Ubuntu-Benutzer "future". Diese ist in Mitglied der Group "User" und "Admin". Der Zugriff des User erfolgt mittels SSH-Key.
Danach werden die Ubunut Packete für den "LAMP" (Linux,Apache,MySQL,PHP)[^1] Stacks installiert. Danahch wir noch ein SQL User erstellt und der MySQL-Server wird konfiguiert.
Und zu letzt werden die Firewallregeln definiert.

                #cloud-config
                #Ubuntu OS User creation
                users:
                - name: future
                sudo: ALL=(ALL) NOPASSWD:ALL
                groups: users, admin
                shell: /bin/bash
                ssh_import_id:
                - gh:gshmeidig
                ssh_authorized_keys:
                - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCyqm8knfxWHHVIg72t9bfU/f30nH6Lbgkhh2G8n7pLpe4CyFiVQC6AL0WKQhpw4pLuJxrs3o9EVtmZU6WKX9W9fhM6EtDyWyuNZssV9ngHDwNptqSYircjBRJD3Wyjoe79wUmetey/Wwr5YMCSlERxX/Yrqq5+ePy/GyInEoH7MVUIdDVgbwQprxZCtowatMGBtQRqIG7n4ppuhvg3QbLU4PYMewbXIir/rt63RMR5Ph66ttKtOrhtx2R0z5I/0rUTzx5xiPg3Fzv9gX/n4gL0MudS7YFE1oz09xDScyOs0UynjC0ohzpdJfuRTWvdXynSSFHo7Y1SqWps1xR0j3q0C/czlRLsHJgvEWXYJ2/l8zC5UA9qdtUyZgyWw4t1BAipKTnh8daR9qAu+PsSKm8Jj7uNOrhVs9dh3F6YnVFBGVxwU1BJH5Ja99K7kiH1BIn3tCYrqp8AprLv/0DiBG7ntxGMPTQ3I0cxU6r5xNT8InWy/4wun/X9of58HyVn4sE= SSH-Key fuer Project Future    
                # login ssh and console with password
                ssh_pwauth: true
                disable_root: false  
                # Packages install  
                packages:
                - apache2 
                - curl 
                - wget 
                - php 
                - libapache2-mod-php 
                - php-mysql 
                - adminer
                - mysql-server
                # Configfiles from Services 
                write_files:
                # Create PHP File with a simple Text
                - content: |
                    <?php echo '<p>Project Future Faild Successfully</p>'; ?>
                path: /var/www/html/index.php
                permissions: '0644'
                # Create User for SQL 
                - content: |
                    CREATE USER 'futuresql'@'localhost' IDENTIFIED BY 'password';
                    CREATE USER 'futuresql'@'%' IDENTIFIED BY 'password';
                    GRANT ALL ON *.* TO 'futuresql'@'localhost';
                    GRANT ALL ON *.* TO 'futuresql'@'%';
                    FLUSH PRIVILEGES;
                path: /tmp/initdb.sql
                permissions: '0644'
                # Run Commands
                runcmd:
                - sudo a2enconf adminer
                - sudo systemctl restart apache2
                # Configuration MySQL
                - 'sudo mysql </tmp/initdb.sql'
                - sudo rm /tmp/initdb.sql 
                - sudo sed -i -e"s/^bind-address\s*=\s*127.0.0.1/bind-address = 0.0.0.0/" /etc/mysql/mysql.conf.d/mysqld.cnf
                - sudo systemctl restart mysql
                # Firewall Rules
                # Default Rules
                - sudo ufw default deny incoming
                - sudo ufw default allow outgoing
                # Exceptions Rules
                - sudo ufw allow ssh
                - sudo ufw allow http
                - sudo ufw allow https
                # Start on boot
                - sed -i -e '/^ENABLED/s/^.*$/ENABLED=yes/' /etc/ufw/ufw.conf
                - sudo ufw enable  

___

[02_Automatisierung](../02_Automatisierung)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)

[^1]: LAMP Beschreibung [Wikipedia](https://de.wikipedia.org/wiki/LAMP_(Softwarepaket))