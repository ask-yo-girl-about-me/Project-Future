# Automatisierung

## Cloud-init File   
                #cloud-config installiert Webserver  
                packages:
                - apache2 
                - php 
                - libapache2-mod-php 
                write_files:
                - content: |
                    <?php echo '<p>Project Future Faild Successfully</p>'; ?>
                path: /var/www/html/index.php
                permissions: '0644' 

  