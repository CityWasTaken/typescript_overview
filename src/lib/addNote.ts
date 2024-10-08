import dayjs from 'dayjs';
import outputNotes from './outputNotes';
import getNotes from './getNotes';

// [{text: 'Note one', date: '10-08-2024}, {text: 'Note two', date: '10-09-2024}, {}]

function addNote(eventObj: Event) {
    eventObj.preventDefault();

    console.log('New note submited');

    // Select the note text input element
    const textInput = document.querySelector<HTMLInputElement>('#text-input');

    // Get the value from the input
    const noteText = textInput?.value;

    // Get the notes array from localStorage
    const notesArray = getNotes();


    if (!noteText) {
        alert('Entering a note rquires text!')
        return;
    }
    // Create a new note object with the proprties 'text' and 'date' - text is the input's value and date is a generated date like '10/8/2024'
    const newNote = {
        text: noteText,
        date: dayjs().format('MM-DD-YYY hh:mm a')
    };

    // Push the object to the notes array
    notesArray.push(newNote);
    // Overwrite the notes arrat in localStorage with our array from above
    localStorage.setItem('notes', JSON.stringify(notesArray));

    // Clear the input
    if (textInput) {
        textInput.value = '';
    }

    // Output all notes
    outputNotes();
}

export default addNote;
