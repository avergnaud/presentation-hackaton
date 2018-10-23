/* catia ws */
( function( document, window ) {
    "use strict";
   
    if ("WebSocket" in window) {
           console.log("WebSocket is supported by your Browser!");
           
           // Let us open a web socket
           var ws = new WebSocket("ws://localhost:8765");
                       
           ws.onopen = function() {
             
              // Web Socket is connected
              console.log("Web Socket is connected");
           };
                       
           ws.onmessage = function (evt) {
              var received_msg = evt.data;
              console.log("Message is received... " + received_msg);
              document.querySelector("#imagination").insertAdjacentHTML( 'afterbegin', "<p>"+received_msg+"</p>");
           };
                       
           ws.onclose = function() {
             
              // websocket is closed.
              console.log("Connection is closed...");
           };
        } else {
         
           // The browser doesn't support WebSocket
           console.log("WebSocket NOT supported by your Browser!");
     }


} )( document, window );