(function(){
    const buttons = document.querySelectorAll(".btn-counter");
    let count = 0;

    const counter = document.querySelector(".counter-machine");
    const counterConainer = document.querySelector(".counter");

    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            if(button.classList.contains("decrease-btn")){
                count--;
            }
            else if(button.classList.contains("increase-btn")){
                count++;
            }

            counter.textContent = count;
        });
    })

})();