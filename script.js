// // const firstList = document.querySelector('.recipe-item')
// // firstList.innerHTML = 'paha ayam'

// const secondList = document.querySelectorAll('.recipe-item')[1]
// secondList.style.backgroundColor = 'yellow'
// secondList.style.color = 'red'


// const firstList = document.querySelectorAll('ul li')[0]
// firstList.setAttribute('class', 'recipe-item')
// console.log(firstList.getAttribute('class'))
// console.log(firstList.removeAttribute('class'))


// const thirdList = document.querySelectorAll('ul li')[2]
// console.log(thirdList)
// thirdList.classList.add('recipe-item')
// thirdList.classList.toggle('primary')
// thirdList.style.fontWeight = 'normal'

// console.log(thirdList.classList.item(2)) // output: primary
// console.log(thirdList.classList.contains('thin-text')) //output: false

// thirdList.classList.replace('primary', 'secondary')

// const newList = document.createElement('li') // li kosong
// const text = document.createTextNode('gula') // teks
// newList.appendChild(text) // <li>gula</li>

// const ul = document.getElementsByTagName('ul')[0]
// // ul.appendChild(newList)
// const listSalt = ul.querySelector('li:nth-child(1)')
// ul.insertBefore(newList, listSalt)

// const lastList = document.querySelectorAll('ul li')[3]
// console.log(lastList)

// const tiramList = document.querySelectorAll('.recipe-item')[0]
// ul.removeChild(tiramList)

// const div = document.getElementById('article')

// const li = document.createElement('li')
// const textP = document.createTextNode('Lorem')
// li.appendChild(textP)



// ul.replaceChild(li, lastList)
const square = document.querySelector('.square')

function changeBackgroundColor(){
  let square = document.querySelector('.square')

  square.style.backgroundColor = 'yellow'
}

square.onclik = changeBackgroundColor
square.onclick = function (){
  this.style.fontSize = '30px'
}

function addListItem(){
  const listItem = document.createElement('li')
  const text = document.createTextNode('bawang putih')
  listItem.appendChild(text)

  const ul = document.querySelector('div#article ul')
  ul.appendChild(listItem)
}

function addClass(){
  document.getElementById('button').classList.add('on')
}

const button = document.getElementById('button')
button.addEventListener('click', addListItem)
button.addEventListener('click', addClass)