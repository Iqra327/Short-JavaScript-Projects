const addBtnEl = document.querySelector('.js-add-btn');
const notesContainerEl = document.querySelector('.js-note-container');

getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  notesContainerEl.insertBefore(noteEl, addBtnEl);
});

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
  });

  element.addEventListener('input', () => {
    updateNote(id, element.value);
  });

  return element;
};

function deleteNote(id, element){
  const notes = getNotes().filter((note) => note.id != id);
  saveStorage(notes);
  notesContainerEl.removeChild(element);
};

function updateNote(id, content){
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveStorage(notes);
};

function addNote(){
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 10000),
    content: ''
  };
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  notesContainerEl.insertBefore(noteEl, addBtnEl);
  
  notes.push(noteObj);
  saveStorage(notes);  
};

function saveStorage(notes){
  localStorage.setItem('note-ap', JSON.stringify(notes));
};

function getNotes(){
  return JSON.parse(localStorage.getItem('note-ap') || '[]');
};

addBtnEl.addEventListener('click', addNote);