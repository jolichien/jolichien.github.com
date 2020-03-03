(function(){
    "use strict";
}());
const girl = document.getElementById('girl')
const girl2 = document.getElementById('girl2')



girl.addEventListener('click', function(){
    girl.className = "invisible"; 
    girl2.className = "visible"; 
    


    setTimeout(function(){
        girl.className = "visible";
        girl2.className = "invisible";
    }, 2000);
});
