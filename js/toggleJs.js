const init = function(){
    

    const toggleBtn = document.querySelector('.js-toggle');
    
    toggleBtn.addEventListener("click", function(){

        toggleBtn.classList.toggle('added');
        // console.log(toggleBtn.classList.contains('added'));

    })

}

document.addEventListener('DOMContentLoaded',init);