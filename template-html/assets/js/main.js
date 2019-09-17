window.onload = function(){

	// Variáveis
	menuTopo = $('#menuTopo')
	logoTopo = $('#logoTopo')
	
	usuarios = $('#usuarios')
	dataUsuarios = document.location.origin+'/No-Dubts/frontend/data/usuarios.json'
	// console.log(dataUsuarios)

	asideTopoEnqAjax = $('#asideTopoEnqAjax')
	dataEnquetes = document.location.origin+'/No-Dubts/frontend/data/enquetes.json'
	// console.log(dataUsuarios)

	asideTopoCatAjax = $('#asideTopoCatAjax')
	dataCategorias = document.location.origin+'/No-Dubts/frontend/data/categorias.json'
	// console.log(dataCategorias)
	
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

	// Atribui lista de usuários a uma variável (objeto usuarios)
	function listarUsuarios(){
		fetch(dataUsuarios)
		.then(res => res.json())
		.then((out) => {
		  // console.log('Checkout this JSON! ', out)
			usuariosJson = out
			for(let i = 0; i < usuariosJson.usuarios.length; i++){
				if(usuariosJson.usuarios[i].nivel_acesso == 0){
					usuariosJson.usuarios[i].status == 1 ? status = 'user-online' : status = 'user-offline'
					usuarios.append('<div class="post shadow-sm bg-white rounded-sm p-3 pt-5 my-4 mx-3 mx-md-1 d-flex flex-row flex-wrap"><article class="col-12 col-md-10 d-flex flex-wrap px-0"><aside class="col-3"><div class="my-2 position-relative '+status+' text-center"><img src="'+usuariosJson.usuarios[i].avatar+'" alt="" height="50" width="50" class="d-block mx-auto rounded-circle"><small>'+usuariosJson.usuarios[i].apelido+'</small></div><hr class="col-auto"><div class="d-flex flex-wrap justify-content-center align-items-stretch"><i class="align-self-center m-3" title="Posts"><span class="badge badge-info badge-pill">112</span></i><i class="fab fa-font-awesome-flag text-success m-3" title="Marcado como Destaque"></i><i class="fas fa-medal m-3 text-primary" title="Tópico Campeão"></i><i class="fas fa-tag m-3 text-danger" title="Tageado"></i></div></aside><section class="col"><a href="pergunta.html" target="_self" rel="next" title="Saiba mais sobre Titela\'s Feelings"><h4 class="text-dark">Titela\'s Feelings</h4></a><p class="text-black-50 text-justify mt-3">Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Aenean aliquam molestie leo, vitae iaculis nisl. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.</p></section></article><aside class="col-12 col-md-2 px-0 py-4"><ul class="list-group d-flex flex-row d-md-block justify-content-around"><li class="list-group-item bg-white text-black-50 text-center border-0 mb-3"><span class="badge-secondary text-center px-3 py-2">165</span><span class="text-black-50 d-block">&#9660;</span></li><li class="list-group-item bg-white text-black-50 text-center border-0 mb-3"><i class="fas fa-eye"></i> 16</li><li class="list-group-item bg-white text-black-50 text-center border-0 mb-3"><i class="fas fa-clock"></i> 63 min</li></ul></aside></div>')
				}
			}
		})
		.catch(err => { throw err });
	}
	if(usuarios){
		listarUsuarios()
	}

	// Atribui lista de categorias a uma variável (objeto categorias)
	function listarCategoriasAsideLateral(){
		fetch(dataCategorias)
		.then(res => res.json())
		.then((out) => {
			asideTopoCatAjax.append('<section class="col-12"><a href="index.html" target="_self" rel="next" title="Acesse todas as Categorias"><h4 class="text-dark">Principais Categorias</h4></a><hr class="col-auto"><ul class="list-group text-black-50" id="listaDasCategoriasAside">')
			// console.log('Checkout this JSON! ', out)
			categoriasJson = out
			for(let i = 0; i < categoriasJson.categorias.length; i++){
				if(categoriasJson.categorias[i].status == 1){
					$('#listaDasCategoriasAside').append('<li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0"><a href="categoria.html" class="text-black-50" target="_self" rel="next" title="Saiba mais sobre '+categoriasJson.categorias[i].titulo+'">'+categoriasJson.categorias[i].titulo+'</a><span class="badge badge-secondary badge-pill">'+categoriasJson.categorias[i].perguntas+'</span></li>')
				}
			}
			asideTopoCatAjax.append('</ul></section>')
		})
		.catch(err => { throw err });
	}
	if(asideTopoCatAjax){
		listarCategoriasAsideLateral()
	}


	// Atribui lista de Enquetes a uma variável (objeto enquetes)
	function listarEnquetesAsideLateral(){
		fetch(dataEnquetes)
		.then(res => res.json())
		.then((out) => {
			// console.log('Checkout this JSON! ', out)
			enquetesJson = out
			asideTopoEnqAjax.append('<section class="col-12" id="enquetesAjax"><a href="#" target="_self" rel="next" title="Acesse todas as enquetes"><h4 class="text-dark">Enquete da Semana</h4></a><hr class="col-auto"><p>Qual tema está estudando essa semana?</p>')
			// console.log(enquetesJson.enquetes[0].status)
			for(let i = 0; i < enquetesJson.enquetes.length; i++){
				if(enquetesJson.enquetes[i].status == 1){
					// console.log(enquetesJson.enquetes[i].temas)
					// console.log(enquetesJson.enquetes[i])
					for(let x = 0; x < enquetesJson.enquetes[i].temas.length; x++){
						cores = ['bg-success', 'bg-info', 'bg-primary', 'bg-warning', 'bg-danger']
						votos = enquetesJson.enquetes[i].temas[x].votos * 10
						// console.log(votos)
						$('#enquetesAjax').append('<div class="row d-flex flex-row flex-nowrap mb-3"><div class="progress col-9 pl-0 mr-auto ml-3" style="height: 30px;"><div class="progress-bar progress-bar-striped progress-bar-animated '+cores[x]+'" role="progressbar" style="width: '+ votos +'%;" aria-valuenow="'+ votos +'" aria-valuemin="0" aria-valuemax="100">'+ enquetesJson.enquetes[i].temas[x].tema +'</div></div><button class="btn btn-secondary col-2 py-0" aria-label="selecionar" value="'+ enquetesJson.enquetes[i].temas[x].tema +'">&#10003;</button></div>')
					}
				}
			}
			$('#enquetesAjax').append('<small class="text-muted">Votações até dia 01/10/2019</small></section>')
		})
		.catch(err => { throw err });
	}
	if(asideTopoEnqAjax){
		listarEnquetesAsideLateral()
	}


              

}()