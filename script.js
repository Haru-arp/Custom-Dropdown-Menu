const optionMenu = document.querySelector('.select-menu'),
      selectBtn = optionMenu.querySelector('.select-btn'),
      options = optionMenu.querySelectorAll('.option'),
      sBtn_txt = optionMenu.querySelector('.sBtn-text');

selectBtn.addEventListener('click', ()=>{
  optionMenu.classList.toggle('active') 
})

options.forEach(option => {
  option.addEventListener('click', ()=>{
    let selectedOption = option.querySelector('.option-text').innerText;
    sBtn_txt.innerText = selectedOption
    console.log(option)
    
    optionMenu.classList.remove('active') 
  })
})