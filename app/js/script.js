let numberContainer = document.querySelector('.rating-state__number-container');
let rate = document.querySelector('.thankyou-state__result--number');
let submit = document.querySelector('.rating-state__button');
let ratingState = document.querySelector('.rating-state');
let thankyouState = document.querySelector('.thankyou-state');


numberContainer.addEventListener('click', event=>{
    let selected = event.target.innerText;
    rate.innerText = selected;

    if(selected > 0 || selected <= 5)
        submit.addEventListener('click', ()=> {
            ratingState.style.display = 'none';
            thankyouState.style.display = 'flex';
        })
    
});