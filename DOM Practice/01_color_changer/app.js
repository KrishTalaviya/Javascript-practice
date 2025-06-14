

    let colorBtns=document.getElementsByClassName('button');
    let body=document.body
    for(let i=0;i<colorBtns.length;i++){
        colorBtns[i].addEventListener('click',function(event){
            let a=event.target;
            let colorBtnColor=getComputedStyle(a).backgroundColor;
            body.style.backgroundColor=colorBtnColor
        })
    }
    


