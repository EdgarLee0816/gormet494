document.addEventListener("DOMContentLoaded", ()=>{

    const slide = document.querySelectorAll("#fadeslide img");		
    
    let t = 2;
    const fadeSlide = () => {
        
        
        if ( t == 2 ){            
            t--;
            slide[2].style.transition = "opacity 1.5s";
            slide[2].style.opacity = "0"; 
        }
        else if ( t == 1 ){
            t--;
            slide[1].style.transition = "opacity 1.5s";
            slide[1].style.opacity = "0";
        }

        else if ( t == 0 ) {
            t = 2;
            slide[2].style.transition = "opacity 1.5s";
            slide[2].style.opacity = "1";
            slide[1].style.transition = "opacity 1.5s";
            slide[1].style.opacity = "1";						
        }	
    };
    setInterval(fadeSlide , 3000);


    const info = document.querySelectorAll("#notice a");
    const black = document.getElementById("black");
    const btn = document.getElementById("btn");


    info.forEach( i =>{

        i.addEventListener("click", ()=>{
            black.style.display = "block";

        });
    });


    btn.addEventListener("click", ()=>{

        black.style.display = "none";

    });

    

    



});///////////////////끝;