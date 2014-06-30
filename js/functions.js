function populate(id){
	string="category_id="+id;
	$.blockUI({ message: '<img src="http://kilometri.ro/brasovtour/mobile/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://kilometri.ro/brasovtour/mobile/ajax/ajax.php",
   		    dataType: "json",
            data:  string,
            success:function(response){
               	$('.category-name').empty().append(response[0]);
            	$('.category-tagline').empty().append(response[1]);
            	$('.category-description').empty().append(response[2]);
            	$('.category-locations').empty().append(response[3]);
            	$.unblockUI();
            	
            	
		  }
		});
}


function reload_location(text){
	$.blockUI({ message: '<img src="http://kilometri.ro/brasovtour/mobile/img/busy.gif" />' });
		string="location_name="+text;
        $.ajax({
            type: 'POST',
            url: "http://kilometri.ro/brasovtour/mobile/ajax/ajax.php",
   		    dataType: "text",
            data:  string,
            success:function(response){
            	$('.location-content').empty().append(response);
            	$.unblockUI();
            	
		  }
		});
	
	
}
function cont_page(){
	return '<div data-role="panel" id="cont" data-position="right" data-display="overlay"><h1>Pagina de cont</h1><p>stuff</p></div>';
}
