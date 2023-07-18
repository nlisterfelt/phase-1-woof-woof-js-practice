

document.addEventListener('DOMContentLoaded', ()=>{
    fetch('http://localhost:3000/pups')
    .then(resp=>resp.json())
    .then(data=>data.forEach(dog=>printDog(dog)))
    const filterButton = document.getElementById('good-dog-filter')
    
    filterButton.addEventListener('click', e=>{
        e.preventDefault()
        filterDogs()
    })
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
    if(dog.isGoodDog === true){
        return 'Good Dog!'
    } else {
        return "Bad Dog!"
    }
}

function filterDogs(){
    const filterButton = document.getElementById('good-dog-filter')
    const dogContainer = document.getElementById('dog-bar')
    const dogInfoContainer = document.getElementById('dog-info')
    dogInfoContainer.innerText = ''

    if(filterButton.innerText === 'Filter good dogs: OFF'){
        filterButton.innerText = 'Filter good dogs: ON'
        dogContainer.innerText = ''
        fetch('http://localhost:3000/pups')
        .then(resp=>resp.json())
        .then(data=>data.forEach(dog=>{
            if(dog.isGoodDog === true){
                printDog(dog)
            }
        }))
    } else {
        filterButton.innerText = 'Filter good dogs: OFF'
        dogContainer.innerText = ''
        fetch('http://localhost:3000/pups')
        .then(resp=>resp.json())
        .then(data=>data.forEach(dog=>printDog(dog)))
    }
}