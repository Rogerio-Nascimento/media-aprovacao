function verificar (){
    var n1 = window.document.getElementById("nt1")
    var n2 = window.document.getElementById("nt2")
    var tr = window.document.getElementById("ntt")
    var res = window.document.getElementById ("res")
    var tot = Number(n1.value) * 0.4 + Number(n2.value)*0.6 *0.8 + Number(tr.value)*0.2
    
    if (n1.value == '' || n2.value == '' || tr.value == ''){
        alert("Reveja se todas as notas estão inseridas!")
    }

    else if (tot < 6){
        res.innerHTML = `Sua nota foi: ${tot.toFixed(1)} <font color="red"><strong> infelizmente você terá que fazer a P3. </strong>`
    }


    else if (tot >= 6){
        res.innerHTML = `Parábens, sua nota foi ${tot.toFixed(1)} <font color="green"> <strong>e você não precisará fazer P3!</strong>`
    }
    else{
    
    res.innerHTML  = `Verifique os dados corretamente`}

}
    