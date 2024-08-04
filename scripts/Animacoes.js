const details = {
    javascript: "JavaScript é usado para adicionar interatividade a páginas web, desenvolver interfaces dinâmicas de front-end, criar back-ends com Node.js, desenvolver aplicativos móveis com React Native, criar jogos web, automatizar tarefas de desenvolvimento, desenvolver aplicativos de desktop com Electron e em projetos de IoT.",
    html: "HTML é a linguagem de marcação usada para criar a estrutura das páginas web. Ele permite definir elementos como títulos, parágrafos, links, imagens, entre outros.",
    css: "CSS é a linguagem de estilos utilizada para definir a apresentação de documentos HTML. Com CSS, é possível alterar cores, fontes, espaçamento e layout das páginas web.",
    'react.js': "React é uma biblioteca JavaScript para a construção de interfaces de usuário. Ele facilita a criação de componentes reutilizáveis e gerenciamento de estado.",
    git: "Git é um sistema de controle de versão distribuído usado para rastrear mudanças no código-fonte durante o desenvolvimento de software.",
    "node.js": "Node.js é um ambiente de execução JavaScript que permite o uso do JavaScript no lado do servidor para criar aplicativos web escaláveis e eficientes.",
    figma: "Figma é uma ferramenta de design gráfico baseada em nuvem usada para criar interfaces de usuário, protótipos e colaboração em tempo real.",
    python: "Python é uma linguagem de programação versátil e popular, conhecida por sua simplicidade e legibilidade, amplamente usada em desenvolvimento web, ciência de dados, inteligência artificial e automação."
};

function addClass(el){
    el.classList.add('appear')
    setTimeout(()=>{
        el.classList.remove('appear')
    },350)
}

 function addDetails(tech){
    console.log('teste');
    const detail = details[tech.toLowerCase()]
    if(detail){
        const containerDetail = document.querySelector('.tec-details')
        const techTitle = document.querySelector('.nome-tec-titulo')
        containerDetail.innerHTML=detail
        techTitle.innerHTML=tech
        addClass(containerDetail)
    }
 }

 document.querySelectorAll('.tec').forEach(element =>{
    element.addEventListener('mouseover', (event)=>{
        const tech = event.currentTarget.querySelector('.nome-tec').innerHTML
        addDetails(tech)
    })
 })

//  --------------------------------------------------------------------------------  //

const services = document.querySelector('.servicos');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            services.querySelector('.landing').classList.add('slideLeft');
            services.querySelector('.ecommerce').classList.add('slideRight');
            setTimeout(()=>{
                services.querySelector('.landing').style.color='white'
                services.querySelector('.ecommerce').style.color='white'
            },2500)
            console.log(entry);
        }else{
            services.querySelector('.landing').classList.remove('slideLeft')
            services.querySelector('.ecommerce').classList.remove('slideRight')
            services.querySelector('.landing').style.color='transparent'
                services.querySelector('.ecommerce').style.color='transparent'
        }
    });
});

observer.observe(services);
