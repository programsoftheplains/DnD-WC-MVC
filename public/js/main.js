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

//charDeleter working, but it's firing two requests. One works, one pulls a 404 and triggers catch(err). Still manages to delete the object, though. Will pursue at a later date for more comprehensive fix.

async function charDeleter(){
    const charId = this.parentNode.dataset.id
    try{
        const response = await fetch('/characters/deleteCharacter', {
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
        location.reload()
    }
}