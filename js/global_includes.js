function navbar_init(){
                  
	var menu=' <a href="#acasa"><img src="img/logo.png" class="logo"/></a>'+
				  ' <a href="#" class="ui-btn-right button" id="btn-menu">Menu</a>'+
				  ' <ul data-role="listview" data-inset="true" data-theme="e" id="list_view">'+'<li>'+
								'<a href="#acasa" data-transitio="slide" class="menu">'+
									'<h3>Acasa</h3>'+
									'<p>evenimete,oferte,recomandari</p>'+
							'	</a>'+
							'</li>'+
							'<li>'+
								'<a href="#categorie" data-transition="slide" class="menu" onclick="populate(1)">'+
									'<h3>Dorm</h3>'+
									'<p>hoteluri,moteluri,pensiuni,vile</p>'+
								'</a>'+
							'</li>'+
							'<li>'+
								'<a href="#categorie" data-transition="slide" onclick="populate(2)">'+
									'<h3>Mananc</h3>'+
									'<p>restaurante,baruri,cafenele,pub-uri</p>'+
								'</a>'+
							'</li>'+
							'<li>'+
								'<a href="#map" data-transition="slide">'+
									'<h3>Fac Ceva</h3>'+
									'<p>tururi,excursii</p>'+
								'</a>'+
							'</li></ul>';
							return menu;			
}
function navbar(d){
	
	 	var header=  $(d).find('#wrap-header');
		
	 	header.empty();
	 	header.append(navbar_init());
		header.find('#btn-menu').on('click',function(){
  				header.find('#list_view').toggle();
 		});
}


