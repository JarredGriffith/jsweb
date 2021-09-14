console.log("test")
const btnhambuger = document.querySelector('#btnhambuger') //grabs the ham buger menu.
const body = document.querySelector("body")
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeEle = document.querySelectorAll('.has-fade')

    btnhambuger.addEventListener('click',function(){ //closes
        //function checks to see if the element has class.
        if(header.classList.contains('open')){
            //if it has the class open then it removes it.
            body.classList.remove("noscroll")
            header.classList.remove('open')
            fadeEle.forEach((e)=> {
                e.classList.remove('fade-in')
                e.classList.add('fade-out')
            })
        }
        else {
            //else adds open class. 
            body.classList.add("noscroll")
            header.classList.add('open') // opens menu 
            fadeEle.forEach((e)=> {
                e.classList.remove('fade-out')
                e.classList.add('fade-in')
                
                
            })
        }
    })