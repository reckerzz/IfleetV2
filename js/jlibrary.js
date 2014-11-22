$(document).ready(function(){

    $('#dispatch-logo').delay(500).addClass('animated fadeInDown');
    $('#dispatch-form').delay(500).addClass('animated fadeInUp'); 
    $('#Account-Setup').delay(500).addClass('animated fadeInUp');
    $('#booking-container').delay(500).addClass('animated fadeInUp');
   


    $('#forgot-pass').click(function(){
         $('#dispatch-form').addClass('animated fadeOutDown');
         $('#dispatch-form').css("display","none");
         $('#forgot-passform').css("display","block");
         $('#forgot-passform').addClass('animated fadeInUp');
         
    });
    
    $('#goback-login').click(function(){
          $('#dispatch-form').removeClass();
        $('#dispatch-form').css("display","Block");
        $('#dispatch-form').addClass('animated fadeInUp');
                                    
     
         
        $('#forgot-passform').addClass('animated fadeOutDown');
        $('#forgot-passform').removeClass();  
        $('#forgot-passform').css("display","none");
       
        
        
    });
    
    $("#inland-logo").addClass('animated fadeInLeft');
    $("#right-panenav").addClass('animated fadeInRight');
   
    
    $("[data-toggle='tooltip']").tooltip(); 
    
  
    $('.Import-Button').click(function(){

        $('#Import-tab').css("display","block");
        $('#Export-tab').css("display","none");
        $('#Local-tab').css("display","none");
        $('#Hustling-tab').css("display","none");
        $('#Others-tab').css("display","none");
    });
    
    $('.Export-Button').click(function(){
        
        $('#Import-tab').css("display","none");
        $('#Export-tab').css("display","block");
        $('#Local-tab').css("display","none");
        $('#Hustling-tab').css("display","none");
        $('#Others-tab').css("display","none");
        
    });
    $('.Local-Button').click(function(){
        $('#Import-tab').css("display","none");
        $('#Export-tab').css("display","none");
        $('#Local-tab').css("display","block");
        $('#Hustling-tab').css("display","none");
        $('#Others-tab').css("display","none");
       
    }); 
    $('.Hustling-Button').click(function(){
        $('#Import-tab').css("display","none");
        $('#Export-tab').css("display","none");
        $('#Local-tab').css("display","none");
        $('#Hustling-tab').css("display","block");
        $('#Others-tab').css("display","none");
    });
    $('.Others-Button').click(function(){
        $('#Import-tab').css("display","none");
        $('#Export-tab').css("display","none");
        $('#Local-tab').css("display","none");
        $('#Hustling-tab').css("display","none");
        $('#Others-tab').css("display","block");
    });
    
    $('#menu-home').click(function(){
        window.location = 'index.html';
    });
    $('#menu-booking-CN').click(function(){
        window.location = 'transaction-booking.html';
    });
    $('#menu-booking-AL').click(function(){
        window.location = 'booking-alllisting.html';
    });
    $('#menu-eir-CN').click(function(){
        window.location = 'EIR-create.html';
    });
    $('#menu-eir-AL').click(function(){
        window.location = 'EIR-alllisting.html';
    });
    $('#menu-maintenance-DH').click(function(){
        window.location = 'maintenance-driver-helper.html';
    }); 
    $('#menu-maintenance-chassis').click(function(){
        window.location = 'maintenance-chassis.html';
    });
    $('#menu-report-container').click(function(){
        window.location = 'container-report.html';
    });
    $('#menu-report-chassis').click(function(){
        window.location = 'chassis-report.html';
    });
    $('#menu-report-ContainerAging').click(function(){
        window.location = 'containeraging-report.html';
    }); 
    $('#menu-report-ChassisAging').click(function(){
        window.location = 'chassisaging-report.html';
    });
    $('#menu-password').click(function(){
        window.location = 'change-password.html';
    });   
    
    
    $('.Container-Button').click(function(){
        $('#Container-tab').css("display","block");
        $('#Chassis-tab').css("display","none");
        
    }); 
     $('.Chassis-Button').click(function(){
        $('#Container-tab').css("display","none");
        $('#Chassis-tab').css("display","block");
    }); 
    

    $("#dtBox").DateTimePicker({
     dateFormat: "yyyy-MM-dd",
    timeFormat: "hh:mm AA",
    dateTimeFormat: "MM-dd-yyyy hh:mm:ss AA"   
    });
    
    
});
