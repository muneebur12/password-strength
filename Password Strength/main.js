
var pass=document.getElementById("password");
var mess=document.getElementById("message");
var strength=document.getElementById("strength");


pass.addEventListener('input',()=>{
    if(pass.value.length>0){
        mess.style.display='block';
    }
    else{
        mess.style.display='none';
    }
    if(pass.value.length < 4){
        strength.innerText='week';
        pass.style.borderColor='#ff5925';
        mess.style.color='#ff5925';
    }
    else if(pass.value.length >=4 && pass.value.length < 7 ){
        strength.innerHTML='medium';
        pass.style.borderColor='yellow';
        mess.style.color='yellow';
    }
    else if(pass.value.length >=8){
        strength.innerHTML='strong';
        pass.style.borderColor='#26d730';
        mess.style.color='#26d730';
    }
})