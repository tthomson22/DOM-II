import './less/index.less'
// Your code goes here!

window.onload = function (evt){
    document.body.addEventListener('dblclick', function(evt){
        evt.target.classList.toggle('rotate')
    })

    const signUpButton = document.querySelectorAll('.btn')
    for(let btn of signUpButton){
        btn.addEventListener('mouseenter', function(){
            btn.style.padding = '20%';
        })
        btn.addEventListener('mouseleave', function(){
            btn.style.padding = '0%';
        })
    }
    document.querySelector('.content-pick .btn').addEventListener('click', function(evt){
        evt.preventDefault();
        console.log(`${evt.target.textContent} is not a trusted link`);
    })

    document.body.addEventListener('click', function(evt){
        evt.target.style.fontWeight = 'bold'
    })

    document.body.addEventListener('keydown', function(evt){
        if(evt.key === 'Escape'){
            evt.target.style.color = 'white'
            evt.target.style.background = 'black'
        } else {
            evt.target.style.background = 'white'
            evt.target.style.color = 'black'
        }
    })

    const allSections = document.querySelectorAll('section');
    for(let sections of allSections){
        sections.addEventListener('mouseenter', function(evt){
            sections.classList.toggle('animate');
        })
        sections.addEventListener('mouseleave', function(evt){
            sections.classList.toggle('animate');
        })
    }
}