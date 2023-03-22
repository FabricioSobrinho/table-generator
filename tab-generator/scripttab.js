let res = document.getElementById("res")
let nume = document.getElementById("num")
let qtd = document.getElementById("qtdnum")
function gerar() {
    res.innerHTML = ""   
    let num = Number(nume.value)
    let qtdn = Number(qtd.value)
    if (qtdn == null || num == null || qtdn > 100 || qtdn < 0) {
        alert("Insira valores validos nos dois campos")
    } else {
    for (let i =0;i <= qtdn; i++) {
        res.innerHTML += `<p>${num} x ${i} = ${num * i}</p>`
    } 
    }
}