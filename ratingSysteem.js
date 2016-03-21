$(function(){

window.addEventListener('load', function rating(){
    
    var couleur = document.getElementById('kleur');
    var etoiles = document.querySelectorAll('#contSter .ster');
    
  var txtField = document.getElementById('field');
    var waardering = document.getElementById('waardering');
   var waarderingplus = 0.1;
    var nbrKlick = 0;
     var Nvooruit = 590;
    var Nachteruit;
    etoiles[4].addEventListener('click', function voor(){
         waarderingplus += 0.1;
        waardering.innerHTML = "uw waardering is:"+' '+waarderingplus;
      if(waarderingplus > 5){
            
            waarderingplus = 5;
        }
        nbrKlick ++;
        $('#kleur').animate({
            
            right: Nvooruit
            
        })
        Nvooruit -= 10;
        if(Nvooruit < 110){
            
            Nvooruit = 110;
        }
     
        txtField.innerHTML = 'Uw hebt'+' ' + nbrKlick +' '+ 'keer geklick.';
    })
    
    
    etoiles[3].addEventListener('click', function voor(){
         waarderingplus += 0.1;
        waardering.innerHTML = "uw waardering is:"+' '+waarderingplus;
      if(waarderingplus > 5){
            
            waarderingplus = 5;
        }
        nbrKlick ++;
        $('#kleur').animate({
            
            right: Nvooruit
            
        })
        Nvooruit -= 10;
        if(Nvooruit < 110){
            
            Nvooruit = 110;
        }
     
        txtField.innerHTML = 'Uw hebt'+' ' + nbrKlick +' '+ 'keer geklick.';
    })
                           
                        
    etoiles[0].addEventListener('click', function achter(){
       nbrKlick ++;
         txtField.innerHTML = 'Uw hebt'+' ' + nbrKlick +' '+ 'keer geklick.';
        
         waarderingplus -= 0.1;
        waardering.innerHTML = "uw waardering is:"+' '+waarderingplus;
        if(waarderingplus < 0.1){
            
            waarderingplus = 0.1;
        }
        
       $('#kleur').animate({
            
            right: Nvooruit + 20
            
        })
      Nvooruit += 10;
     
   if(Nvooruit > 600){
           
           Nvooruit = 600;
       }
        
    })    
    
    etoiles[1].addEventListener('click', function achter(){
       nbrKlick ++;
         txtField.innerHTML = 'Uw hebt'+' ' + nbrKlick +' '+ 'keer geklick.';
        
         waarderingplus -= 0.1;
        waardering.innerHTML = "uw waardering is:"+' '+waarderingplus;
        if(waarderingplus < 0.1){
            
            waarderingplus = 0.1;
        }
        
       $('#kleur').animate({
            
            right: Nvooruit + 20
            
        })
      Nvooruit += 10;
     
   if(Nvooruit > 600){
           
           Nvooruit = 600;
       }
        
    })    
    
   
                           
})
})