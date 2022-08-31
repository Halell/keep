import { CardTxt } from './card-txt.jsx'

export function MainSection({ notes, onDelete }) {
    if (!notes) return <div>Loading...</div>
    return <section className="keep-body-notes-area">
        {notes.map(note => < CardTxt
            note={note}
            key={note.id}
            onDelete={onDelete}
        />)}
    </section>

}