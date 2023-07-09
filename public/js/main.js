//delete may not be best used in the main.js folder?
//good place to put a toggle for Night Mode
//render button in ejs -> event listener in public main.js -> toggle colors in public css


//const deleteBtn = document.querySelectorAll('.del')
const inventoryItem = document.querySelectorAll('span.not')

const delItem = document.querySelectorAll('.delItem')
const delCharacter = document.querySelectorAll('.delChar')


Array.from(delItem).forEach((el)=>{
    el.addEventListener('click', itemDeleter)
})

Array.from(delCharacter).forEach((el)=>{
    el.addEventListener('click', charDeleter)
})

function tester(){
    console.log(this.parentNode.dataset.id)
}


async function itemDeleter(){
    const itemId = this.parentNode.dataset.id
    try{
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'itemIdFromJSFile': itemId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

//charDeleter is sending 2121/deleteCharacter instead of 2121/characters/deleteCharacter ???
//item deleter is not encounter this issue, code looks... identical though?

async function charDeleter(){
    const charId = this.parentNode.dataset.id
    try{
        const response = await fetch('deleteCharacter', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'charIdFromJSFile': charId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}