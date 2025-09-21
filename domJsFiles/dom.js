//  get element by tag name 
 const list = document.getElementsByTagName('li')
        // console.log(list)
        for(const li of list){
            // console.log(li.innerText)
        }

const section = document.querySelectorAll('section');
for (const sec of section){
    sec.style.border = '2px solid steelblue';
    sec.style.textAlign = 'right';
    sec.style.padding  = '3px';
    sec.style.margin  = '15px';
    sec.style.borderRadius = '20px'
    sec.style.backgroundColor= '#964B00'
    sec.style.color= 'white'
//     sec.style.border = '3px solid red';
// sec.style.borderRadius = '30px';
// sec.style.background = 'lightblue';
}

const hay = document.getElementById('hayhay')
hay.style.backgroundColor = 'red'
hay.style.textAlign = 'center'
