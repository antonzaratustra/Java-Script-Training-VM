const inputElement = document.getElementById('title')
const createButton = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [
    {
        title: 'Задача 1',
        completed: false,
    },
    {
        title: 'Задача 2',
        completed: true,
    },
]

function renderNotes(arrayNotes) {

    listElement.innerHTML = ''

    if (notes.length === 0) {
        listElement.innerHTML = '<p>Нет элементов</p>'
    }

    for (let i = 0; i < arrayNotes.length; i++) {       
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(arrayNotes[i], i))       
    }
}

renderNotes(notes)

function getNoteTemplate(obj, index) {
    return `
    <li class="list-group-item">
        <span class="${obj.completed ? 'completed' : 'not_completed'}">${obj.title}</span>
        <div class="button-panel">
            <button data-type="toggle" data-index=${index} class="note-button btn-${obj.completed ? 'orange' : 'green'}">
            Выполнить
            </button>
            <button data-type="remove" data-index=${index} class="note-button btn-red">
            Удалить
            </button>
        </div>
    </li>
    `
 }

createButton.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }

    const newNote = {
        title: inputElement.value,
        completed: false,
    }

    notes.push(newNote)

    renderNotes(notes)

    inputElement.value = ''
 }

 listElement.onclick = function (event) {
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type

    if (event.target.dataset.index) {
        
        if (type === 'toggle') {
             notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
        renderNotes(notes)
    }
}
 