# DE2
*Ich kann weitergehende Konzepte von Maas.io einsetzen, wie Region Controller, VLANs, Monitoring etc.*

## VLANs

Sie können VLANs grundsätzlich auf zwei Arten implementieren:

- Als Portbasierte VLANs (untagged)
- Als Tagged VLANs

**Portbasierte VLANs**

Mit portbasierten VLANs unterteilen Sie einen einzelnen physischen Switch einfach auf mehrere logische Switche. Im folgenden Beispiel teilen wir einen physischen 8-Port Switch (Switch A) auf zwei logische Switches auf:

![VLAN-Topologie](../00_Allgemein/images/04_Privat-Cloud/DE2_vlan.png)

Verbindung der zwei VLANs der beiden physischen Switche. Bei portbasierten VLANs sind hier zwei Kabel nötig.

**Tagged VLANs**

Bei tagged VLANs können mehrere VLANs über einen einzelnen Switch-Port genutzt werden. Die einzelnen Ethernet Frames bekommen dabei Tags angehängt, in dem jeweils die VLAN-ID vermerkt ist zu dessen VLAN das Frame gehört. Wenn im gezeigten Beispiel beide Switches tagged VLANs beherrschen, kann damit die gegenseitige Verbindung mit einem einzelnen Kabel erfolgen:

![VLAN-Topologie](../00_Allgemein/images/04_Privat-Cloud/DE2_vlantagged.png)

## Einrichten VLANs auf dem MAAS

Die VLANs können über den Tab Subnets über Add angelegt werden. Erfasst werden muss ein Name (fett) und eine eindeutige Nummer zwischen 2 - 4094. Anschliessend sind die Subnetze, zu den VLAN zu erfassen.

Die so definierten VLANs können dann den VMs über den Tab Network mittels Add alias or VLAN zugewiesen werden.

![VLAN-Einrichten 1](../00_Allgemein/images/04_Privat-Cloud/DE2_vlan1)

![VLAN-Einrichten 2](../00_Allgemein/images/04_Privat-Cloud/DE2_vlan2)

![VLAN-Einrichten 3](../00_Allgemein/images/04_Privat-Cloud/DE2_vlan3)

![VLAN-Einrichten 4](../00_Allgemein/images/04_Privat-Cloud/DE2_vlan4)
___

[Monitoring](../04_Private-Cloud/DE2_Monitoring.md)

[Lernziel DE2](../04_Private-Cloud/DE2.md)

[04_Private-Cloud](../04_Private-Cloud)

[Startseite](https://github.com/ask-yo-girl-about-me/Project-Future)
