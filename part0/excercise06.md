```mermaid
sequenceDiagram
    participant Browser
    participant Server

Browser ->> Server: Post /new_note_spa
activate Server
Server ->> Browser: 201 created status
deactivate Server
Note right of Browser: Browser appens new to the DOM locally
