import getNotes from "./getNotes";

function outputNotes() {

    const notesArray = getNotes();
    const noteOutput = document.querySelector<HTMLElement>('#note-output');


    if (!notesArray.length && noteOutput) {
        noteOutput.innerHTML = '<p>No notes...bumber...</p>'
    } else if (notesArray.length && noteOutput) {
        noteOutput.innerHTML = '';
    }


    // Loop over the array of note objects and output an article element into the section output for each object in the array

    /*
    notesArray.forEach((noteObj: Note, index: number) => {
        noteOutput?.insertAdjacentHTML('beforeend', `
          <article class="mb-4">
            <h3>${noteObj.text}</h3>
            <p>Added On: ${noteObj.date}</p>
            <button data-index="${index}" class="btn btn-danger">Delete</button>
            <hr>
          </article>
        `);
      });
*/


    for (let i = 0; i < notesArray.length; i++) {
        const noteObj = notesArray[i];

        noteOutput?.insertAdjacentHTML('beforeend', `
            <article class="mb-4">
                <h3>${noteObj.text}</h3>
                <p>Added On: ${noteObj.date}</p>
                <button data-index="${i}" class="btn btn-danger">Delete</button>
                <hr>
            </article>
        `);
    }
}

export default outputNotes;