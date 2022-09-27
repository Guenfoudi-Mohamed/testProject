// start project_12 media query

const homeItem = document.querySelector('body .header_top .nav_bar .container > .list > .homeItem');
homeItem.onclick = function(){
    const wrapper = document.querySelectorAll('body main .wrapper');
    wrapper.forEach(function(value,index){
        if(index==0){
            value.classList.remove('active');
            const header_bottom = document.querySelector('body .header_bottom');
            header_bottom.classList.remove('active');
        }else{
            value.classList.add('active');
        }
    })
}

const productsItem = document.querySelector('body .header_top .nav_bar .container > .list > .productsItem');
productsItem.onclick = function(){
    const self = this;
    const wrapper_0 = document.querySelector('body main .wrapper_0');
    const wrapper_1 = document.querySelector('body main .wrapper_1');
    const header_bottom = document.querySelector('body .header_bottom');

    header_bottom.classList.add('active');
    wrapper_0.classList.add('active');
    wrapper_1.classList.remove('active');
}

const aForms = document.querySelectorAll('main #wrapper_1 .container article .section_1 .forms .form .img + a');
aForms.forEach(function(value,index){
    value.onclick = function(){
        const wrapper = document.querySelectorAll('body main .wrapper');
        wrapper.forEach(function(value,index){
            if(index==2){
                value.classList.remove('active');
                const header_bottom = document.querySelector('body .header_bottom');
                header_bottom.classList.add('active');
            }else{
                value.classList.add('active');
            }
        });      
    } 
})

const cartItem = document.querySelector('main #wrapper_2 .section_1 .container .content_right .inp_btn .cartItem');
cartItem.onclick = function(){
    const wrapper = document.querySelectorAll('body main .wrapper');
        wrapper.forEach(function(value,index){
            if(index==3){
                value.classList.remove('active');
                const header_bottom = document.querySelector('body .header_bottom');
                header_bottom.classList.add('active');
            }else{
                value.classList.add('active');
            }
        });
}