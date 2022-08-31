import { React } from 'react'


import { Header } from '../cmps/header.jsx'
import { MainSection } from '../cmps/MainSection.jsx'
import { SideBar } from '../cmps/side-bar.jsx'
import { ComposOn } from '../cmps/compos-on.jsx'
import { ComposOf } from '../cmps/compos-of.jsx'
import { keepService } from '../service/keep.service.js'


export class KeepApp extends React.Component {

    state = {
        notes: null,
        isCompos: false,
        labelBy: '',
        filterBy: '',
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        keepService.query(this.state.filterBy, this.state.labelBy)
            .then(notes => {
                this.setState({ notes })
            })
    }

    noteInCompos = null
    onMainSectionClick = (isOn, e) => {
        if (!isOn) {
            if (this.noteInCompos) this.onSave()
            this.setState({ isCompos: false })
            return
        }
        e.stopPropagation()
        if (this.state.isCompos) return
        this.setState({ isCompos: true })
    }

    onNewNoteChange = (note) => {
        this.noteInCompos = note
        console.log(note)

    }

    onSave = () => {
        keepService.saveNote(this.noteInCompos)
            .then(() => {
                this.loadNotes()
                this.setState({ isCompos: false })
                this.noteInCompos = null
            })
    }

    onDelete = (noteId) => {
        keepService.setGarbage(noteId)
            .then(this.loadNotes)
    }

    onLabel = (label) => {
        this.setState({ labelBy: label }, () => this.loadNotes())
    }

    render() {
        let { isCompos, notes, labelBy } = this.state
        return <section className="keep-main-section"
            onClick={ (e) => this.onMainSectionClick(false, e) }>sssssssss
            {/* <div className="keep-header-external">
                <Header />
            </div>
            <div className="keep-body-side-bar-container flex">
                <div className="keep-side-bar flex">
                    <SideBar labelBy={ labelBy } onLabel={ this.onLabel } />
                </div>
                <div className="keep-body">
                    <div className="body-head">
                        { (isCompos)
                            ? <ComposOn
                                onNewNoteChange={ this.onNewNoteChange }
                                compos={ this.state.compos }
                                onMainSectionClick={ this.onMainSectionClick }
                                onSaveNote={ this.onSave } />

                            : <ComposOf
                                onMainSectionClick={ this.onMainSectionClick }
                                labelBy={ labelBy } /> }
                    </div>
                    <MainSection notes={ notes } onDelete={ this.onDelete } />
                </div>
            </div> */}
        </section >
    }
}