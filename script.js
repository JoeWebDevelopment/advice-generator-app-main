
btn = document.querySelector('.dice-icon');

const getAdvice = () =>{

    btn.classList.toggle('spin');
    const randomNumber = Math.floor(Math.random() * 117) + 1;

 fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
  .then(res => res.json())
  
  .then(data =>{
    console.log(data)
   adviceContent = document.querySelector('p')
   adviceContent.innerText = data.slip.advice
   adviceHeading = document.querySelector('span')
   adviceHeading.innerHTML = data.slip.id

  })
  .catch(err => {
    console.log(`error ${err}`)
  })
  
}
btn.addEventListener('animationend',() =>{
   btn.classList.remove('spin') 
})
getAdvice()


btn.addEventListener('click', ()=>{

    getAdvice()
});





