
document.getElementById('greeting').onclick= function (){
    document.getElementById('hello').innerHTML="Hello World!<br> My name is Luciana Soledad Caminos Cano.<br>I am a Web Developer.";
    document.getElementById('greeting').innerHTML="";
}

/** 
document.addEventListener('click', function(){
    document.getElementById('enjoy').innerHTML="Enjoy it!";
})
*/

document.getElementById('enjoy').addEventListener('click', function(){
    document.getElementById('enjoy').innerHTML="Enjoy it!";
})

document.getElementById('music').addEventListener('click', function(){
    document.getElementById('rolling').controls='controls';
})

document.getElementById('paint').addEventListener('click', function(){
    if (document.getElementById('barra').style.background== 'linear-gradient(var(--second-color), var(--first-color))'
    ){
        document.getElementById('barra').style.background= 'linear-gradient(var(--fourth-color), var(--first-color))' ;
    }else{
        document.getElementById('barra').style.background= 'linear-gradient(var(--second-color), var(--first-color))' ;
    }
})

document.getElementById('contactme').addEventListener('click', function(){
    if(document.getElementById('extrainfo').style.display== 'none'){
        document.getElementById('extrainfo').style.display= 'block';
    }else{
        document.getElementById('extrainfo').style.display= 'none';
    }
    
})
