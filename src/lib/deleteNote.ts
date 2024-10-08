import getNotes from "./getNotes";
import outputNotes from "./outputNotes";

function deleteNote(i: string) {
    // Get the notes array from localStorage
    const notesArray = getNotes();
    const confirmDelete = confirm('Youre about to delete this note. Are you sure?');

    if (confirmDelete) {
        // Use the index number to splice the corresponding not object from the array
        notesArray.splice(Number(i), 1);

        // Update/Overwrite the array in localStorage
        localStorage.setItem('notes', JSON.stringify(notesArray));

        // Call outputNotes
        outputNotes();
    }
}

export default deleteNote;