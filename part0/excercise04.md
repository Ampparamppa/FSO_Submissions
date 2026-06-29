# Exercise 0.4

```mermaid
sequenceDiagram
    participant Browser
    participant Server

Browser ->> Server: Post request to the server @ https://fullstack-exampleapp.herokuapp.com/new_note
activate server
Server ->> Browser: URL Redirect
deactivate server

Browser ->> Server: Get request to the server for CSS
activate server
Server --> Browser: Browser receives CSS and manipulates HTML
Deactivate server

Browser ->> Server: Get request to the server for main.js
activate server
Server --> Browser: Browser receives main.js and manipulates HTML
Deactivate server

Browser ->> Server: Get request to the server for data.json
activate server
Server --> Browser: Browser receives data.json
Deactivate server

```
