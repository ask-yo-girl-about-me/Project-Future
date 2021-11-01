# Automatisierung

## Cloud-init File   
                #cloud-config installiert Webserver  
## 01 Lernziele

* BE1: Ich kann Infrastructure as Code mit Beispielen erklären
* BE2: Ich kann VMs mit eigenen Cloud-init Scripten aufsetzen
* BE3: Ich habe Cloud-init mit Beispielen Dokumentiert

Quelle: [Kompetenz Matrix](https://gitlab.com/ch-tbz-hf/Stud/cnt/-/tree/main/1_Kompetenzmatrix#matrix)

## Cloud-init File
                users:
                - name: future
                    sudo: ALL=(ALL) NOPASSWD:ALL
                    groups: users, admin
                    home: /home/ubuntu
                    shell: /bin/bash
                    lock_passwd: false
                    plain_text_passwd: 'future' 
                    ssh_import_id:
                    - gh:mc-b
                    ssh_authorized_keys:
                    - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCyqm8knfxWHHVIg72t9bfU/f30nH6Lbgkhh2G8n7pLpe4CyFiVQC6AL0WKQhpw4pLuJxrs3o9EVtmZU6WKX9W9fhM6EtDyWyuNZssV9ngHDwNptqSYircjBRJD3Wyjoe79wUmetey/Wwr5YMCSlERxX/Yrqq5+ePy/GyInEoH7MVUIdDVgbwQprxZCtowatMGBtQRqIG7n4ppuhvg3QbLU4PYMewbXIir/rt63RMR5Ph66ttKtOrhtx2R0z5I/0rUTzx5xiPg3Fzv9gX/n4gL0MudS7YFE1oz09xDScyOs0UynjC0ohzpdJfuRTWvdXynSSFHo7Y1SqWps1xR0j3q0C/czlRLsHJgvEWXYJ2/l8zC5UA9qdtUyZgyWw4t1BAipKTnh8daR9qAu+PsSKm8Jj7uNOrhVs9dh3F6YnVFBGVxwU1BJH5Ja99K7kiH1BIn3tCYrqp8AprLv/0DiBG7ntxGMPTQ3I0cxU6r5xNT8InWy/4wun/X9of58HyVn4sE= SSH-Key für Project Future 
                # login ssh and console with password
                ssh_pwauth: true
                disable_root: false    
                packages:
                - apache2 
                - php 
                - libapache2-mod-php 
                write_files:
                - content: |
                    <?php echo '<p>Project Future Faild Successfully</p>'; ?>
                path: /var/www/html/index.php
                permissions: '0644' 

  