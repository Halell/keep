
import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const Service = {
    query,
    saveNote,
}

const KEY = 'keep_DB'
var gNotes

function query(filterBy, labelBy) {
    let notes
    if (!gNotes) {
        notes = _loadFromStorage()
        if (!notes) {
            notes = []
            _saveToStorage(notes)
        }
        gNotes = notes
    }
    notes = gNotes

    if (labelBy) {  //            better way?
        if (labelBy === 'garbage') {
            notes = notes.filter(note => note.isGarbage === true)
            return Promise.resolve(notes)
        }
        notes = notes.filter(note =>
            note.label.includes(labelBy))
    }
    if (filterBy) {
        let { title } = filterBy
        notes = notes.filter(note =>
            note.title.includes(title))
    }
    notes = notes.filter(note => !note.isGarbage)
    return Promise.resolve(notes)
}

function _createNote(note) {
    let { title, body, bodyHeight, bgClr } = note
    return {
        id: utilService.makeId(),
        body,
        bodyHeight,
        title,
        label: '',
        bgClr,
    }
}

function getIndex(noteId) {
    return gNotes.findIndex(note => note.id === noteId)
}

function saveNote(note) {
    if (note.id) return _update(note)
    else return _add(note)
}


function _update(note) {
    gNotes[getIndex(note.id)] = note
    if (note.title === 'delete') return _deleteNote(note.id)
    _saveToStorage(gNotes)
    return Promise.resolve(true)
}

function _deleteNote(noteId) {
    gNotes.splice(gNotes[getIndex(noteId)], 1)
    _saveToStorage(gNotes)
    return Promise.resolve(false)
}
function _add(noteToAdd) {
    noteToAdd = _createNote(noteToAdd)
    gNotes = [noteToAdd, ...gNotes]
    _saveToStorage(gNotes)
    return Promise.resolve()
}




function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}