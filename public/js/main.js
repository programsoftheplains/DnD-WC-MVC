//delete may not be best used in the main.js folder?
//good place to put a toggle for Night Mode
//render button in ejs -> event listener in public main.js -> toggle colors in public css


const deleteBtn = document.querySelectorAll('.del')
const inventoryItem = document.querySelectorAll('span.not')

const deleteItem = document.querySelectorAll('.delItem')


Array.from(deleteItem).forEach((el)=>{
    el.addEventListener('click', itemDeleter)
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