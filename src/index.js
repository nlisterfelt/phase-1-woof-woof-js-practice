document.addEventListener('DOMContentLoaded', ()=>{
    fetch('http://localhost:3000/pups')
    .then(resp=>resp.json())
    .then(data=>data.forEach(dog=>printDog(dog)))
})

function printDog(dogInfo){
    const dogContainer = document.getElementById('dog-bar')
    const dogName = document.createElement('span')

    dogName.innerText = dogInfo.name
    dogContainer.appendChild(dogName)
    dogName.addEventListener('click', e=>dogCard(dogInfo))
}

function dogCard(dogInfo){
    const dogInfoContainer = document.getElementById('dog-info')
    dogInfoContainer.innerText = ''

    const dogPic = document.createElement('img')
    dogPic.src = dogInfo.image
    dogInfoContainer.appendChild(dogPic)

    const dogName = document.createElement('h2')
    dogName.innerText = dogInfo.name
    dogInfoContainer.appendChild(dogName)

    const dogButton = document.createElement('button')
    dogButton.innerText = goodOrBad(dogInfo)
    dogInfoContainer.appendChild(dogButton)
    dogButton.addEventListener('click', e =>{
        e.preventDefault()
        dogInfo.isGoodDog = !dogInfo.isGoodDog
        dogButton.innerText = goodOrBad(dogInfo)
    })
}

function goodOrBad(dog){
    console.log(dog.isGoodDog)
    if(dog.isGoodDog === true){
        return 'Good Dog!'
    } else {
        return "Bad Dog!"
    }
}