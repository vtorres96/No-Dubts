window.onload = function(){

	// Variáveis
	menuTopo = $('#menuTopo')
	logoTopo = $('#logoTopo')

	// Define menu topo como fixed após ultrapassar a altura do banner do topo
	document.onscroll = function(){
		if(window.pageYOffset >= 250){
			menuTopo.addClass('fixed-top')
			menuTopo.addClass('py-0')
			logoTopo.attr('height', 50)
		} else if(window.pageYOffset < 250){
			menuTopo.removeClass('fixed-top')
			menuTopo.removeClass('py-0')
			logoTopo.attr('height', 65)
		}
	}


}