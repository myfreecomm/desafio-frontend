// A $( document ).ready() block.
$( document ).ready(function() {

    
    
    $(window).scroll(function(){
        
        if($(window).scrollTop()>=70){
             $('#navegacao').addClass('animated  fadeInDown');
            
            $("#navegacao").addClass("fixed-top");
            
            
           
           } 
        
        
           else {
               
               
                 $('#navegacao').removeClass('animated  fadeInDown');
                 $('#navegacao').removeClass('fixed-top');
               
               
                   
               
               
           }
        
        

        
      
   
   
        
   
        
   
});
    
    
    
    
});