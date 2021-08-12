function verificar (){
    var n1 = window.document.getElementById("nt1")
    var n2 = window.document.getElementById("nt2")
    var tr = window.document.getElementById("ntt")
    var res = window.document.getElementById ("res")

    var tot = Number(n1.value) * 0.4 + Number(n2.value)*0.6 *0.8 + Number(tr.value)*0.2
    res.innerHTML  = `sua nota foi: ${tot}`
}