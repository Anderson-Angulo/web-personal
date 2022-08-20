
// ======= CLOSE / OPEN MENU =======
const menu=document.querySelector('.nav__list'),
       btnNavOpen=document.getElementById('nav__toggle'),
       btnNavClose=document.getElementById('nav__close')
    


function toggleShow(target,btnOpen,btnClose=null,className="open"){
  if(!btnClose){
    btnOpen.addEventListener('click',()=>{
      target.classList.toggle(className)
    })
    return
  }

  btnOpen.addEventListener('click',()=>{
    target.classList.add(className)
    if(target.classList.contains("portfolio__popup")){
      let projectCard=btnOpen.parentElement
      target.querySelector('.portfolio__popup-img').src=projectCard.querySelector("img").src
      target.querySelector('.portfolio__popup-subtitle span').innerHTML=projectCard.querySelector('.portfolio__title').innerHTML
      target.querySelector('.portfolio__popup-body').innerHTML=projectCard.querySelector('.portfolio__details').innerHTML
    }
  })

  btnClose.addEventListener('click',()=>{
    target.classList.remove(className)
  })

}

toggleShow(menu,btnNavOpen,btnNavClose,"show")

// ======= CLOSE / OPEN PORTFOLIO POPUP
const popup=document.querySelector('.portfolio__popup'),
      btnPopupClose=document.querySelector('.portfolio__popup-close'),
      btnsPopupOpen=Array.from(document.querySelectorAll('.portfolio__button'))

btnsPopupOpen.map(btnOpen=>{
  toggleShow(popup,btnOpen,btnPopupClose)
})

document.addEventListener("click",e=>{
  e.stopPropagation()
  let isOutTarget=e.target.classList.contains('portfolio__popup')
  if(isOutTarget) {
    popup.classList.remove("open")
  }
})

document.addEventListener('keydown',e=>{
  if(popup.classList.contains('open')){
    if(e.key==="Escape") popup.classList.remove('open')
  }
})


// ============= MIXITUP ==============
let mixerPortfolio = mixitup(".portfolio__container", {
    selectors: {
        target: '.portfolio__card'
    },
    animation: {
        duration: 100
    }
});


// ======== ACTIVAR TAB SELECCIONADO ==========

let tabsPortfolio=Array.from(document.querySelectorAll('.portfolio__item'))

function activeTab(){
  tabsPortfolio.map(l=>l.classList.remove("active-portfolio"))
  this.classList.add('active-portfolio')
}

tabsPortfolio.map(l=>l.addEventListener('click',activeTab))


// ============= INPUT ANIMATION ============

const inputs=document.querySelectorAll(".input")

function focusFunc(){
  let parent=this.parentNode
  parent.classList.add("focus")
}

function blurFunc(){
  let parent=this.parentNode
  if(this.value==""){
    parent.classList.remove('focus')
  }
}

inputs.forEach(input=>{
  input.addEventListener("focus",focusFunc)
  input.addEventListener('blur',blurFunc)
})
