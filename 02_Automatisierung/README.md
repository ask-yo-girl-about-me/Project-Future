## Automatisierung

# Cloud-init File
``#cloud-config``
``users:``
  ``- name: ubuntu``
    ``sudo: ALL=(ALL) NOPASSWD:ALL``
    ``groups: users, admin``
    ``home: /home/ubuntu``
    ``shell: /bin/bash``
    ``lock_passwd: false``
   ``plain_text_passwd: 'password'``
    ``ssh_import_id:``
     ``- gh:mc-b``
    ``ssh_authorized_keys:``
      ``- ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDPvLEdsh/Vpu22zN3M/lmLE8zEO1alk/aWzIbZVwXJYa1RbNHocyZlvE8XDcv1WqeuVqoQ2DPflkQxdrbp2G08AWYgPNiQrMDkZBHG4GlU2Jhe9kCRiWVx/oVDeK8v3+w2nhFt8Jk/eeQ1+E19JlFak1iYveCpHqa68W3NIWj5b10I9VVPmMJVJ4KbpEpuWNuKH0p0YsUKfTQdvrn42fz5jYS1aV7qCCOOzB3WC833QRy04iHZObxDWIi/IFeIp1Gw2FkzPhoZyx4Fk9bsXfm301IePp9cwzArI2LdcOhwEZ3RW2F7ie2WJlVy5tzJjMGCaE1tZTjiCahLNEeTiTQp public-key@cloud.tbz.ch``                   
``\# login ssh and console with password``
``ssh_pwauth: true``
``disable_root: false ``   
``packages:``
  ``- unzip``
``runcmd:``
  ``- echo "Hello from Cloud-init"``
``write_files:``
 ``- content: |``
    ``Cloud-init write_files``
   ``path: /etc/issue``
   ``permissions: '0644'``
