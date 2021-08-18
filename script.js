function verificar (){
    var n1 = window.document.getElementById("nt1")
    var n2 = window.document.getElementById("nt2")
    var tr = window.document.getElementById("ntt")
    var res = window.document.getElementById ("res")
    var tot = Number(n1.value) * 0.4 + Number(n2.value)*0.6 *0.8 + Number(tr.value)*0.2
    
    if (n1.value == 0 || n2.value == 0 || tr.value == 0){
        alert("Insira os dados corretamente")
    }

    else if (tot < 6){
        res.innerHTML = `Sua nota foi: ${tot} <font color="red"><strong>você está de recuperação</strong>`
    }


    else if (tot >= 6){
        res.innerHTML = `Parabens, sua nota foi ${tot} <font color="green"> <strong>você foi aprovado</strong> `
    }
    else{
    
    res.innerHTML  = ` Verifique os dados corretamente`}

}
    