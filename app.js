const  hamburger  =  document . querySelector ( '.header .nav-bar .nav-list .hamburger' ) ;
const  menu_mobile  =  document . querySelector ( '.header .nav-bar .nav-list ul' ) ;
const  élément_menu  =  document . querySelectorAll ( '.header .nav-bar .nav-list ul li a' ) ;
 en- tête  const =  document . querySelector ( '.header.container' ) ;

hamburger . addEventListener ( 'clic' ,  ( )  =>  {
	hamburger . classList . bascule ( 'actif' ) ;
	menu_mobile . classList . bascule ( 'actif' ) ;
} ) ;

documenter . addEventListener ( 'scroll' ,  ( )  =>  {
	var  scroll_position  =  fenêtre . scrollY ;
	si  ( position_défilement  >  250 )  {
		en-tête . style . backgroundColor  =  '#29323c' ;
	}  sinon  {
		en-tête . style . backgroundColor  =  'transparent' ;
	}
} ) ;

élément_menu . pourChaque ( ( élément )  =>  {
	article . addEventListener ( 'clic' ,  ( )  =>  {
		hamburger . classList . bascule ( 'actif' ) ;
		menu_mobile . classList . bascule ( 'actif' ) ;
	} ) ;
} ) ;