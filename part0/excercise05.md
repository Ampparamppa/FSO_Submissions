```mermaid
sequenceDiagram
    participant browser
    participant server

Browser ->> Server: Get SPA Document
activate Server
Server ->> Browser: HTML Document
deactivate Server

Browser ->> Server: Get /main.css
activate Server
Server ->> Browser: CSS file
deactivate Server

Browser ->> Server: Get /spa.js (script)
activate Server
Server ->> Browser: spa.js file
deactivate Server

Browser ->> Server: Get /data.json
activate Server
Server ->> Browser: json data file containing all the submitted notes
deactivate Server
