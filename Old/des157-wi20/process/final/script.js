(function(){ 
    "use strict";
  

    const hate = document.getElementsByClassName('hate');
    

    const mask1 = document.getElementById('mask1');
    const mask2 = document.getElementById('mask2');
    const mask3 = document.getElementById('mask3');

    const bulb = document.getElementById('light');

    const percent = document.getElementById('percent');
    const caption = document.getElementById('caption');
    const click = document.getElementById('clickNotif');

    const mean = document.getElementById('meanComments');
    const fire = document.getElementById('fire');
    const superiority = document.getElementById('superiority');
    const thumb = document.getElementsByClassName('thumb');
    var a = 1;
    var b = 1;
    

    percent.addEventListener('mouseover', function(){

        click.className="visible";
    });
    percent.addEventListener('mouseout', function(){
        click.className="hidden";
    });

    percent.addEventListener('click', function(){
        
        if(b==1){
            b=0;
            percent.innerHTML="87%"
            caption.innerHTML="of young people have witnessed cyberbullying occurring online.";
        }
        else if(b==0){
            b=1;
            percent.innerHTML="36.5%"
            caption.innerHTML="of people feel they have been cyberbullied in their lifetime";
        }
      
    });

    
    function fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 50);
    }
    
    function unfade(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 50);
    }
    
    for(let i=0; i<hate.length; i++){
        hate[i].addEventListener('click', disappear(i));    
    }
    function disappear(i) {
        return function() {
            fade(hate[i])
            setTimeout(function(){
                unfade(hate[i]);   
            }, 5000);
        };
     }
   

    mask1.addEventListener('mouseover',function(){
        mask1.src="images/face1.svg"
        
    });
    mask1.addEventListener('mouseout',function(){
        mask1.src="images/mask.svg"
        
    });

    mask2.addEventListener('mouseover',function(){
        mask2.src="images/face2.svg"
    });
    mask2.addEventListener('mouseout',function(){
        mask2.src="images/mask.svg"
    });

    mask3.addEventListener('mouseover',function(){
        mask3.src="images/face3.svg"
    });
    mask3.addEventListener('mouseout',function(){
        mask3.src="images/mask.svg"
    });


    bulb.addEventListener('mouseover', function(){
            bulb.src="images/bulbhover.svg";
    });

    bulb.addEventListener('mouseout', function(){
        
        if(a == 1){
            bulb.src="images/bulboff.svg";
        }
        else if(a==0){
            bulb.src="images/bulbon.svg";
        } 
    });


    bulb.addEventListener('click', function(){
        
        if(a == 1){
            bulb.src="images/bulbon.svg";
            a = 0; 
        }
        else if(a ==0){
            bulb.src="images/bulboff.svg";
            a = 1 ;
        }
        bulb.addEventListener('click', function(){
            if(a == 0){
                bulb.src="images/bulboff.svg";
                a = 1 ;
            }
            else if(a ==1){
                bulb.src="images/bulbon.svg";
                a = 0 ;
            }
        });
    });

    for(let j=0; j<thumb.length; j++){
        thumb[j].addEventListener('click', positivity(j));  
    }
    function positivity(j){
        return function() {
            if(j===0){
                thumb[j].src="images/thumbsup.svg";
                mean.innerHTML="<h3 class='superioritySub'>Try to be supportive!</h3><p class='superioritySub2'>Even to those that don’t seem to deserve it. </p>"
            }
            else if(j===1){
                thumb[j].src="images/thumbsup.svg";
                fire.innerHTML="<h3 class='superioritySub'>Be the bigger person.</h3><p class='superioritySub2'>Know when to apologize and show more compassion.</p>"
            }
            else if(j===2){
                thumb[j].src="images/thumbsup.svg";
                superiority.innerHTML="<h3 class='superioritySub'>Choose your battles.</h3><p class='superioritySub2'>Even to those that don’t seem to deserve it. </p>"
            }
           
        };
    }

   

}());