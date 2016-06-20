# Bundesliga Projekt

# Authors : 
   
   * Fabrice Dufils Siyapdje 
   * Stella Djeufack 
   * Megnigo Linda Dongmo 
   
# Projektbeschreibung

Erfassung von Bundesliga Spiele, Stastistik und Ergebnisse. 
Dabei sollte alle Angaben durch Benutzer des Systems angegeben werden.
sog. contributive Software.

# Anfoerderungen

## Verwaltung von 1. und 2. Bundesliga

## Ergebnissverwaltung und darstellung

## Tabelle

## Verwaltung von Verein sowie Vereindetails 

* Vereindetails : 
   * Name des Coachs
   * Spielers sowie Spieler palmares
   * URL der Verein
   * Spielerstatistik ( Tore .... )


# Technologie

## Backend

* Nodejs 
* Expressjs
* Mongoose ( mongo-db )

## Frontend

* Angularjs ( Single page Application )
* Bootstrap ( CSS )


# Getting Started ( Fuer Contributoren )

## Clonen das Projektes im lokalen Rechner

```sh
git clone https://dufilsfabrice@bitbucket.org/Megni/stellin_app.git
```

Hiermit erzeugen Sie eine lokalen kopie des Projektes. 

__ PS:  Es wird exclusiv mit Pull request gearbeitet __ 

wie pull request funktionniert erfahren Sie unter der link :

https://confluence.atlassian.com/bitbucket/work-with-pull-requests-223220593.html


## Installation von dependencies 

Nach dem Clone, bitte zu lokale Kopie wechseln. 
Erst dann koennen sie dependencies installieren

```sh
   cd stellin_app
   npm install
   npm bower
```

## Start der Entwicklung 

```sh
   npm start
```

#*****ToDos*********
##Frontend:
      1- 1. und 2. Bundesliga auf der Seite
      2- Vereindetailseite mit:
        2-1 alle Spiele und Coaches in einer Tabelle
        2-2 alle Spieler mit Summe der geschossenen Tore
      3- Ergebnisseite ( Tabelle mit: Datum, Uhrzeit, Ort und Ergebnisse)mit bereit gespielten Partien der Saison
      4- Spieltage-seite mit offenen Partien der Saison
      5- Tabelle-seite für dir Platzierung der Vereine. Diese soll nach jeden Spieltag aktualisiert werden