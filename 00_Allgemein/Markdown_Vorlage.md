# Markdown: Anleitung für die einfache Auszeichnungssprache
Cheatsheet für die Verwendung von Markdown

## Wofür braucht man Markdown?
<p>Dieses <b>Wort</b> ist fett und dieses <strong>auch</strong>.</p>

                Dieses <b>Wort</b> ist fett und dieses <strong>auch</strong>.

Dieses \textbf{Wort} ist fett.
            Dieses \textbf{Wort} ist fett.
Dieses **Wort** ist fett.
                Dieses \*\*Wort\*\* ist fett.

## Überschriften

# Überschrift 1
                \# Überschrift 1
## Überschrift 2
                \#\# Überschrift 2
### Überschrift 3
                \#\#\# Überschrift 3
#### Überschrift 4
                \#\#\#\# Überschrift 4
##### Überschrift 5
                \#\#\#\#\# Überschrift 5
###### Überschrift 6
                \#\#\#\#\#\# Überschrift 6


Überschrift 1
=

                Überschrift 1
                =

Überschrift 2
-

                Überschrift 2
                -


# Table of Contents
1. [Example](#example)
2. [Example2](#example2)
3. [Third Example](#third-example)

## Example
## Example2
## Third Example

## Fett & Kursiv
*Kursiver Text*
                \*Kursiver Text\*

_Kursiver Text_

                \_Kursiver Text\_

**Fetter Text**

                \**Fetter Text\**

__Fetter Text__

                \__Fetter Text\__

***Kursiver und fetter Text***

                \*\*\*Kursiver und fetter Text\*\*\*

___Kursiver und fetter Text___

                \_\_\_Kursiver und fetter Text\_\_\_

## Durchstreichen
~~Dieser Text ist durchgestrichen.~~ Dieser aber nicht.

                \~\~Dieser Text ist durchgestrichen.\~\~ Dieser aber nicht.

## Zitate
>Dies ist ein **eingerückter Bereich**.
>Der Bereich geht hier weiter.

>Dies ist ein weiterer **eingerückter Bereich**.
Auch dieser Bereich geht in der nächsten Zeile weiter.

Diese Zeile ist allerdings nicht mehr eingerückt.

                \>Dies ist ein weiterer \*\*eingerückter Bereich\*\*.

## Listen
- Listenpunkt 1
- Listenpunkt 2
- Listenpunkt 3

1. Listenpunkt 1
2. Listenpunkt 2
3. Listenpunkt 3

                \- Listenpunkt 1
                \- Listenpunkt 3
                \- Listenpunkt 2

                1. Listenpunkt 1
                2. Listenpunkt 2
                3. Listenpunkt 3

[ ] A
[x] B
[ ] C

                [ ] A
                [x] B
                [ ] C

## Code
Das ist `code`.
                \`code\`

``Das ist alles `code`.``

                \`\`Das ist alles \`code\`.\`\`

Hier steht noch Fließtext.
  Dies ist die erste Zeile des Code-Blocks.
     Die zweite Zeile ist noch weiter eingerückt.
  Dies ist eine weitere Zeile des Code-Blocks.
Hier beginnt wieder Fließtext.

## Bilder & Hyperlinks
Hier folgt ein [Link](https://example.com/ "Optionaler Linktitel").

                Hier folgt ein \[Link\]\(https://example.com/ \"Optionaler Linktitel\"\).

<https://example.com>
`https://example.com

![Hier ist ein Beispielbild](https://example.com/bild.jpg)

[![Hier ist ein Beispielbild](https://example.com/bild.jpg)](https://example.com)

## Tabellen

|Spalte 1|Spalte 2|
|--------|--------|
|    A    |    B    |
|    C    |    D    |

                |Spalte 1|Spalte 2|
                |--------|--------|
                |    A    |    B    |
                |    C    |    D    |

## Fußnoten
Im Fließtext [^1] können Sie ganz einfach Fußnoten [^2] unterbringen.

                Im Fließtext \[\^\1\] können Sie ganz einfach Fußnoten \[\^2\] unterbringen.
                \[\^1\]\: Hier finden Sie den Text zu der Fußnote.
                \[\^2\]: \*\*Fußnoten\*\* selbst können auch \*formatiert\* werden.
                Und diese umfassen sogar mehrere Zeilen.
                
[^1]: Hier finden Sie den Text zu der Fußnote.
[^2]: **Fußnoten** selbst können auch *formatiert* werden.
Und diese umfassen sogar mehrere Zeilen.

## & und <>
A & B
&alpha;
1 < 2
<p>

## Backslash-Maskierung
Die ist ein \*Beispiel mit Sternchen\*.

                Die ist ein \*Beispiel mit Sternchen\*.