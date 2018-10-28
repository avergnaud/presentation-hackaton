/* catia ws */
( function( document, window ) {
    "use strict";
   

    function startWsClient() {

        if ("WebSocket" in window) {
               document.querySelector("#imagination #console").insertAdjacentHTML( 'beforeend', "<p>WebSocket is supported by your Browser!</p>");
               
               // Let us open a web socket
               var ws = new WebSocket("ws://localhost:8765");
                           
               ws.onopen = function() {
                 
                  // Web Socket is connected
                  document.querySelector("#imagination #console").insertAdjacentHTML( 'beforeend', "<p>Web Socket is connected</p>");
               };
                           
               ws.onmessage = function (evt) {
                  var received_msg = evt.data;
                  document.querySelector("#imagination #messages").insertAdjacentHTML( 'afterbegin', "<p> - "+received_msg+"</p>");
               };
                           
               ws.onclose = function() {
                 
                  // websocket is closed.
                  document.querySelector("#imagination #console").insertAdjacentHTML( 'beforeend', "<p>Connection is closed...</p>");
               };
            } else {
             
               // The browser doesn't support WebSocket
                  document.querySelector("#imagination #console").insertAdjacentHTML( 'beforeend', "<p>WebSocket NOT supported by your Browser!</p>");
         }
    }// fin startWsClient


    document.querySelector('#imagination').addEventListener("click", startWsClient)

} )( document, window );