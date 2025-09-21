// how to add new li and innertext using appendchild 
// const li = document.getElementById('funnode')
// undefined
// console.log(li)
// VM1898:1 <ul id=​"funnode">​…​</ul>​
// undefined
// const newLi = document.createElement('li')
// undefined
// newLi.innerText = 'DOM is the real BOSS'
// 'DOM is the real BOSS'
// funnode.appendChild(newLi)
// <li>​::marker​"DOM is the real BOSS"</li>​

// how to get parent node 

// funnode.parentNode
// <section id=​"hayhay" style=​"border:​ 2px solid steelblue;​ text-align:​ center;​ padding:​ 3px;​ margin:​ 15px;​ border-radius:​ 20px;​ background-color:​ red;​ color:​ white;​">​…​</section>​
// funnode.parentNode.parentNode
// <body cz-shortcut-listen=​"true">​…​</body>​
// funnode.parentNode.parentNode.parentNode
// <html lang=​"en">​scroll<head>​…​</head>​<body cz-shortcut-listen=​"true">​…​</body>​</html>​
// funnode.parentNode.parentNode.parentNode.parentNode
// #document (http://127.0.0.1:5500/index.html)
// funnode.parentNode.parentNode.parentNode.parentNode.parentNode

// direcly create a section (important)

const headShot = document.createElement('section')
headShot.innerHTML = 
 `<h1>direcly section created here</h1>
 <ul>
    <li>jani </li>
    <li>ekdin</li>
    <li>hobe</li>
</ul>
`
mainContainer.appendChild(headShot)
