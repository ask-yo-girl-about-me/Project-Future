Projekt-Future Container und Kubernetes, DevOps
========
# Inhaltsverzeichnis
- [JE](/01_Kompetenzen/JE/)

    Architektur = JE1: Ich kann Microservices erstellen

# Einleitung / Erklärung

Bei den Microservices gibt es zwei verschieden Konzepte:

Synchrone Microservices (REST)

  - Ein Microservice ist synchron, wenn er bei der Bearbeitung von Requests selber einen Request an andere Microservices stellt und auf das Ergebnis wartet.

Vor- / Nachteile

- Einfach zu verstehen
- Bessere Konsistenz (Informationen werden immer neu abgerufen)

- Resilience ist aufwändiger

Asynchrone Microservices (Messages)

  - Der Microservice schickt einem anderen Microservice (Event Bus, Message Server) einen Request, wartet aber nicht auf eine Antwort.

Vor- / Nachteile

- Bei einem Ausfall wird die Nachricht später übertragen
- Übertragung kann fast immer garantiert werden
- Mesasages als Event implementieren

