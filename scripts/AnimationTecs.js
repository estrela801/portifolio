export default function AnimationTecs () {
// document.body.style.backgroundColor='red'
const details = [
    {"javascript":"é uma linguagem de programação amplamente utilizada no front-end."}
]
function getElement(){
    const elements = document.querySelectorAll('.tec')
    elements.forEach(el=>{
        const foiEsse = el.innerHTML
        return foiEsse
    })
}
function getDetails(value){
    const elemento = value
    const detail = details.pop(elemento)
    return detail
}
function addDetailsToContainer(det){
    const detail = det
    const container = document.querySelector('.tec-details')
    container.innerHTML=detail
    const titulo = document.querySelector('.nome-tec-titulo')
    titulo.innerHTML=chaveDoArray
}
function ExecuteDetails(){
    const esse = getElement()
    console.log(esse);
    const teste = ()=>{console.log('teste');}
    teste()
}
}
document.addEventListener("mouseover", ExecuteDetails )


