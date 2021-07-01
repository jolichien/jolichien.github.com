(function(){ 
    "use strict";

    const title = document.getElementById('title');
    const backpack = document.getElementById('backpack');
    const notes = document.getElementById('notes');
    const pouch = document.getElementById('pouch');
    const flask = document.getElementById('flask');
    const divTag = document.querySelector('div');
    const close = document.getElementById('close');

    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');

    /*backpack.addEventListener('mouseover', function(){
        backpack.src = "images/backpack2.svg"
    });
    backpack.addEventListener('mouseout', function(){
        backpack.src = "images/backpack1.svg"
    });  
*/
    close.addEventListener('click', function(){
        backpack.src = "images/backpack1.svg";
        title.src = "images/title1.svg";
        divTag.className = "invisible";
        close.className = "invisible";
    });

  
    backpack.addEventListener('click', function(){
        backpack.src = "images/backpack2.svg";
        title.src = "images/title2.svg";
        divTag.className = "visible";
        close.className = "visible";
    });

    notes.addEventListener('mouseover', function(){
        notes.src = "images/notes2.svg";
        text1.className = "visible";
    });
    notes.addEventListener('mouseout', function(){
        notes.src = "images/notes1.svg";
        text1.className = "invisible";
    });

    pouch.addEventListener('mouseover', function(){
        pouch.src = "images/pouch2.svg";
        text2.className = "visible";
    });
    pouch.addEventListener('mouseout', function(){
        pouch.src = "images/pouch1.svg";
        text2.className = "invisible";
    });

    flask.addEventListener('mouseover', function(){
        flask.src = "images/flask2.svg";
        text3.className = "visible";
    });
    flask.addEventListener('mouseout', function(){
        flask.src = "images/flask1.svg";
        text3.className = "invisible";
    });

    
}());
 
 
 