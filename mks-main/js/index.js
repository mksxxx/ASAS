
function buscaCep(){
    let cep = document.getElementById('cep').value;
    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //resposta req

        req.onload = function() {
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("rua").value = endereco.street;
                document.getElementById("bairro").value = endereco.neighborhood;
                document.getElementById("cdd").value = endereco.city;
                document.getElementById("estado").value = endereco.state;
            }
            else if(req.status === 404){
                alert("CEP inválido");
            }
            else{
                alert("Erro ao fazer a requisição");
            }
        }
    }
}

window.onload = function(){
    let txtcep = document.getElementById("cep");
    txtcep.addEventListener("blur", buscaCep);
}

$(document).ready(function(){
    $("#cnpj").on("blur", function() {
        $.get("https://brasilapi.com.br/api/cnpj/v1/" + cnpj, function(data){
            $("#nf").val(data.nome);
            $("#rs").val(data.logradouro);
        })
    })
})