
import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'

export const keepService = {
    query,
    saveNote,
    setGarbage,
}

const KEY = 'keep_DB'
var gNotes

function _createNote(note) {
    let { title, body, bodyHeight } = note
    return {
        id: utilService.makeId(),
        body,
        bodyHeight,
        title,
        label: '',
        isGarbage: false,
    }
}

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
            console.log('in')
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




function getIndex(noteId) {
    return gNotes.findIndex(note => note.id === noteId)
}

function saveNote(note) {
    if (note.id) return _update(note)
    else return _add(note)
}


function _update(note) {
    gNotes[getIndex(note.id)] = note
    _saveToStorage(gNotes)
    return Promise.resolve()
}

// function getById(noteId) {
//     const note = gNotes.find(note => noteId === note.id)
//     return Promise.resolve(note)
// }

function _add(noteToAdd) {
    noteToAdd = _createNote(noteToAdd)
    gNotes = [noteToAdd, ...gNotes]
    _saveToStorage(gNotes)
    return Promise.resolve()
}


function setGarbage(noteId) {
    let idx = getIndex(noteId)
    let note = gNotes[idx]
    if (note.isGarbage) gNotes.splice(idx, 1)
    else note.isGarbage = true
    _saveToStorage(gNotes)
    return Promise.resolve()
}

function _deleteNote(noteId) {

    _saveToStorage(gNotes)
    return Promise.resolve()
}


function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}