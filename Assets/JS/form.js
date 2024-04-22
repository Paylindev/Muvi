function validaEmail() {
	
   //validando o email
   const input = document.querySelector('#email');

   //arrow function
    input.addEventListener('blur', () => {
    
 	usuario = input.value.substring(0, input.value.indexOf("@"));
	dominio = input.value.substring(input.value.indexOf("@")+ 1, input.value.length);
		//retorno -1 significa que não encontrou nada
		/* Tamanho de usuário maior ou igual a 1 caracter e
			Tamanho do domínio maior ou igual a 3 caracteres E
			Usuário não pode conter o @.
			Domínio não pode conter o @.
			Usuário não pode conter o “ ” espaço em branco.
			Domínio não pode conter o “ ” espaço em branco.
			Domínio tem que possuir “.” Ponto.
			A posição do primeiro ponto tem que ser maior ou igual a 1, lembrando a posição 0 deve ser ocupado por algum caracter após o @.
			A posição do ultimo ponto tem que ser menor que o ultimo caracter, deve ser finalizado o domínio por um caracter. */

		if ((usuario.length >=1) &&
		    (dominio.length >=3) &&
		    (usuario.search("@")==-1) &&
		    (dominio.search("@")==-1) &&
		    (usuario.search(" ")==-1) &&
		    (dominio.search(" ")==-1) &&
		    (dominio.search(".")!=-1) &&
		    (dominio.indexOf(".") >=1)&&
		    (dominio.lastIndexOf(".") < dominio.length - 1)) 
		{
			//alert("E-mail valido");
		}
		else
		{
			//alert("E-mail invalido");
            document.getElementById("email").value="";
            document.getElementById("email").focus();

		}
    })
}