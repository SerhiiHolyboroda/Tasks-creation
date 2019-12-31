const form = document.querySelector('form')
const div = document.querySelector('.div')
const uls = document.querySelector('.uls')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const divMaker = text => {
  const divs = document.createElement('textarea')
     const butDel= document.createElement('button')
     const butEd = document.createElement('button')
  divs.textContent = text
    divsn = `${div.childNodes.length}`
    divs.className = `n${div.childNodes.length}`  
    butDel.className = `b${div.childNodes.length}` + ' ' + 'btn-outline-danger'
     butEd.className = `d${div.childNodes.length}` + ' ' +  'btn-outline-warning'
     let del = divs.className    
     let edt = divs.className  
     
     console.log(del)
     console.log(edt)
      
    
  div.appendChild(divs)
     
    butDel.innerHTML += `${div.childNodes.length}`
    butDel.innerHTML = 'Delete'
     
     div.appendChild(butDel)
      
     butEd.innerHTML += `${div.childNodes.length}`
     butEd.innerHTML = 'Edit'
     div.appendChild(butEd)
    
    
    butDel.addEventListener( 'click',function(){
     let parent = document.querySelector('.div')
     let child = document.querySelector(`.${del}`)
     
     parent.removeChild(child);
        console.log(`${divs.value}`)
        divs.value  = ''
//     localStorage.removeItem(`${divs.value}`);
      itemsArray.splice( itemsArray.indexOf(`${divs.value}`), 1 );
         localStorage.setItem('items', JSON.stringify(itemsArray))
  
    
      console.log(`n${div.childNodes.length}`)
      console.log(`b${div.childNodes.length}`)
        })
    butEd.addEventListener( 'click',function(){
//        var key, obj = window.localStorage;
//for(key in obj){
//  console.log('Ошибка где-то до этой строки.');
           
 
     let parent = document.querySelector('.div')
     let child = document.querySelector(`.${del}`)
     itemsArray.splice( itemsArray.indexOf(`${divs.value}`), 1 );
     let x = prompt('Edit Task')
      child.innerHTML = ''
      divs.innerHTML = ''
     divs.value = `${x}`
      child.innerHTML = ''
          
        
  
          let b = itemsArray.indexOf(`${divs.value}`)   
           
          console.log(b)
        itemsArray.unshift( `${x}`)
   localStorage.setItem('items', JSON.stringify(itemsArray))  
      
      
     
      console.log(`n${div.childNodes.length}`)
      console.log(`b${div.childNodes.length}`)
        })
 
 
}
form.addEventListener('submit', function(e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  divMaker(input.value)
  input.value = ''
})

data.forEach(item => {
  divMaker(item)
})

button.addEventListener('click', function() {
  localStorage.clear()
  while (div.firstChild) {
    div.removeChild(div.firstChild)
  }
})
