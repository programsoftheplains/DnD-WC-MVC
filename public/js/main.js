//const deleteBtn = document.querySelectorAll('.del')


//Delete Items

const delItem = document.querySelectorAll('.delItem')


Array.from(delItem).forEach((el)=>{
    el.addEventListener('click', itemDeleter)
})


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

//Delete Characters

//charDeleter working, but it's firing two requests. One works, one pulls a 404 and triggers catch(err). Still manages to delete the object, though. Will pursue at a later date for more comprehensive fix.

const delCharacter = document.querySelectorAll('.delChar')


Array.from(delCharacter).forEach((el)=>{
    el.addEventListener('click', charDeleter)
})


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


//Edit Form

const edit = document.querySelectorAll('.edit')

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


//Open + close conditions

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        const id = button.parentNode.getAttribute("data-id")
        const path = button.parentNode.getAttribute("data-path")
        a = button.parentNode.getAttribute("data-a")
        b = button.parentNode.getAttribute("data-b")
        cid = button.parentNode.getAttribute("data-cid")
        openModal(modal, path, id, a, b, cid)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

//here's where the magic happens
//kinda cheeky, using form[2] to pass cid for /view/cid page reload
//this fix is only needed for Inventory controller, id & cid will be the same for the Characters controller
//should be some way to pass cid to controller w/o form - much cleaner, will look into this later

function openModal(modal, path, id, a, b, cid){
    if(modal == null) return
    const form = document.querySelector('.formInput')
    form.action = path + '/' + id + '?_method=PUT'
    form[0].value = a
    form[1].value = b
    form[2].value = cid
    modal.classList.add('active')
    overlay.classList.add('active')
}