$(
	function()
	{
		if( !$( "body" ).is( ".page-fotos" ) )
		{
			return;
		}
	
		$( "#photos a" ).click( function(e)
		{
			var container = $( "#photos" );
			if( container.is( ".working" ) )
			{
				e.preventDefault();
				return;
			}
			container.addClass( "working" );
			
			var link = $( e.target );
			if( link.is( "a" ) === false )
			{
				link = link.parents( "a" );					
			}
			if( link.is( ".selected" ) )
			{
				e.preventDefault();
				return;
			}
			$( "#photos a" ).removeClass( "selected" );
			link.addClass( "selected" );
		
			var img = link.attr( "href" );
			$( "#main-nav" ).attr( "style", "" ).addClass( "loading" );
			
			var i = new Image();
			i.onload = function()
			{
				$( "#main-nav nav" ).animate({height:i.height + "px"},500, function()
				{
					$( "#main-nav" ).css( "background-image", "url( " + img + ")" ).removeClass( "loading" );
					container.removeClass( "working" );
				});
			}
			i.src = img;
		
			e.preventDefault();
		} );
		$( "#photos-next" ).click( function(e)
		{
			var next = $( "#photos .selected" ).parents( "li" ).next().find( "a" );
			console.debug( next );
			if( next.size() === 0 )
			{
				next = $( "#photos a:first" );
			}
			next.click();
		
			e.preventDefault();
		} );
		$( "#photos-prev" ).click( function(e)
		{
			var prev = $( "#photos .selected" ).parents( "li" ).prev().find( "a" );
			if( prev.size() === 0 )
			{
				prev = $( "#photos a:last" );
			}
			prev.click();
		
			e.preventDefault();
		} );
		$( "#photos a:first" ).click();
		$( "body" ).keyup( function(e)
		{
			if( e.keyCode === 37 )
			{
				$( "#photos-prev" ).click();
			}
			else if( e.keyCode === 39 )
			{
				$( "#photos-next" ).click();
			}
		} );
	}
);
$(
	function()
	{
		if( !$( "body" ).is( ".page-contato" ) )
		{
			return;
		}

		$( "#by-email" ).submit( function(e)
		{
			var prefix = $( "#form_prefix" ).val();
			var phone = $( "#form_phone" ).val();
			if( prefix == "" || phone == "" )
			{
				alert( 'Por favor, preencha seu telefone de contato' );
				e.preventDefault();
				return false;
			}
		} );
	}
);
