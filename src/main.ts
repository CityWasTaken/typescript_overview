const noteForm = document.querySelector('#note-form');

function addNote(eventObj: Event) {
  eventObj.preventDefault();

  console.log('submit');
  
}

noteForm?.addEventListener('click', addNote);