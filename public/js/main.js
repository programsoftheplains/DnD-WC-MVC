const deleteBtn = document.querySelectorAll('.del')
const inventoryItem = document.querySelectorAll('span.not')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteCharacter)
})


async function deleteCharacter(){
    const characterId = this.parentNode.dataset.id
    try{
        const response = await fetch('character/deleteCharacter', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'characterIdFromJSFile': characterId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}