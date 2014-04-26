$(document).ready(function(){
$("#booktaxi").click(function(){
	  $.ajax({url:"http://10.60.127.2:8443/cabserver/customers/bookings", crossDomain:true,
		  type:"POST",
		  data:"{ \"phone\": \""+$("#phone").val() +"\","		
		  		+"\"name\": \""+$("#name").val() +"\", " 
		  		+"\"from\": \""+$("[name=from]").val() +"\","
		  		+"\"to\": \""+$("[name=to]").val() +"\","
		  		+"\"noOfPassengers\": \""+$("#noOfPassengers").val() +"\","
		  		+"\"mobileOperator\": \""+$("#mobileOperator").val() +"\","		  		
		  		+"\"airline\": \""+$("#airline").val() +"\","
		  		+"\"flightNumber\": \""+$("#flightNumber").val() +"\","
		  		+"\"datetime\": \""+$("#datetime").val() +"\","
		  		+"\"type\": \"MOBILE\","
		  		+"}",
		  success:function(result){
	      //alert(result);
			  
			
			  document.writeln("<script type='text/javascript' src='./js/jstorage.js'></script>");
			  var userId = $.jStorage.get("userId");
			  var phone = $.jStorage.get("phone");
			  alert(userId + ", "+ phone);
			  
			/*  $.getScript( "/js/jstorage.js", function() {
				  var userId = $.jStorage.get("userId");
				  var phone = $.jStorage.get("phone");
				  alert(userId + ", "+ phone);
				});*/
			  
			  
	      	      
			  var obj = jQuery.parseJSON(result);			  
			  if(obj.code == "200"){
				  alert("Booking Successful.");
				  window.location='bookCab.html';
				  
			  }else{
				  alert("Booking Failed. Try Again.");
			  }
			  
			  
	  }});
	});});