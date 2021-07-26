console.log('%c HI', 'color: firebrick')
const dogImgObj = {}
window.addEventListener('DOMContentLoaded', init)
const dropDown = document.querySelector('#breed-dropdown')
dropDown.addEventListener('change', handleBreedDropList)

function init(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => rendersHeaderImages(json));

  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => createBreedList(json))
}

function rendersHeaderImages(obj){
  const imgDiv = document.querySelector('#dog-image-container')
  const imgArr = obj.message
  imgArr.forEach(imgSrc => {
    let dogImage = document.createElement('img');
    dogImage.className = 'images'
    dogImage.style.float = 'left'
    dogImage.style.width = '25%'
    dogImage.src = imgSrc
    imgDiv.appendChild(dogImage)
  })
  const lastImage = imgArr[imgArr.length - 1]
  document.querySelector('hr').style.clear = "both"
}

function createBreedList(obj){
  const breedList = document.querySelector('#dog-breeds')
  const breedObj = obj.message

  for (const breed in breedObj){
    const li = document.createElement('li')
    li.textContent = breed;
    li.className = li.textContent.charAt(0);
    li.style.display = 'none';
    breedList.appendChild(li);
    li.addEventListener('mouseover', () => {
      li.style.color = '#556B2F';
      li.style.backgroundColor = '#DCDCDC'
    })
    li.addEventListener('mouseleave', () => {
      li.style.color = 'black';
      li.style.backgroundColor = 'white'
    })
    li.addEventListener('click', () => {
      li.style.color = 'white';
      li.style.backgroundColor = 'black'
    })
    const dropDownVal = document.querySelector('#breed-dropdown').value
    if (li.className === dropDownVal){
      li.style.display = 'block'
    }
  }
}

function handleBreedDropList(e){
  const selectedLetter = e.target.value
  const breedNode = document.getElementsByTagName('li')
  for (breed of breedNode){
    breed.className === selectedLetter ? breed.style.display = 'block' : breed.style.display = 'none'
  }
}




// function handleBreedDropList(e){
//   const selectedLetter = e.target.value
//   const breedNode = document.getElementsByTagName('li')
//   for (breed of breedNode){
//     if(breed.className === selectedLetter){
//       breed.style.display = 'block'
//     } else {
//       ind.style.display = 'none'
//     }
//   }
// }






