
function numerosAlerta(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    if(valor1 === "" || valor2 === ""){
        alert("Preencha todos os campos!");
        return;
    }

    valor1 = parseFloat(document.getElementById("valor1").value);
    valor2 = parseFloat(document.getElementById("valor2").value);

    if(isNaN(valor1)||isNaN(valor2)){
        alert("Algum valor é inválido, insira outro valor em números!");
    } else {
        alert("Valores válidos, escolha a operação!");
    }

}