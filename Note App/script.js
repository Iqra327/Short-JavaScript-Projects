const addBtnEl = document.querySelector('.js-add-btn');
const noteElement = document.querySelector('.js-note');
const notesContainerEl = document.querySelector('.js-note-container');

function createNoteEl(id, content){
  const element = document.createElement('textarea');
  element.classList.add('note');
  element.placeholder = 'Empty Note';
  element.value = content;

  element.addEventListener('dblclick', () => {
    const warning = confirm('Are you sure you want to delete this note?');
    if(warning){
      deleteNote(id, element);
    }
  })

  element.addEventListener('input', () => {
    updateNote(id, element.value);
  })
}

function deleteNote(){

}

function updateNote(){

}

function addNote(){
  const noteObj = {
    id: Math.floor(Math.random() * 10000),
    content: ''
  }
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  
}

addBtnEl.addEventListener('click', addNote);
