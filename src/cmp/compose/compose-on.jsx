import { React, Component, createRef } from 'react'

import { ComposFooter } from "./compose-footer.jsx"
import { WithNoteHandling } from '../HOC/with-note-handling'

class ComposeOn extends Component {
    state = {
        note: {
            id: '',
            title: '',
            body: '',
            bodyHeight: 25,
            bgClr: '#ffffff'
        }
    }

    inputRef = createRef()
    composeRef = createRef()
    componentDidMount() {
        this.inputRef.current.focus()
        document.addEventListener("mousedown", this.handleClickOutside)
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside)
    }
    handleClickOutside = (event) => {
        if (this.composeRef && !this.composeRef.current.contains(event.target)) {
            if (this.props.onSave()) {
                this.props.asyncLoadNotes()
            }
            this.props.setIsCompose(false)
        }
    }
    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        let { bodyHeight } = this.state.note
        if (field === 'body') {
            if (target.scrollHeight > (bodyHeight + 5)) {
                bodyHeight = bodyHeight + 25
            }
            let lineCount = (value.match(/\n/g) || []).length
            if (((lineCount) * 25) + 25 !== bodyHeight) {
            }
        }
        this.setState((prevState) => ({ note: { ...prevState.note, [field]: value, bodyHeight: bodyHeight } }),
            () => { this.props.onNewNoteChange(this.state.note) })
    }
    setBgClr = (bgClr) => {
        let note = this.state.note
        this.setState({ note: { ...note, bgClr: bgClr } },
            () => { this.props.onNewNoteChange(this.state.note) })
    }
    render() {
        const { title, bodyHeight, body } = this.state.note
        let bodyWithLines = body.replace('\\n', '\n')
        let bodyStyle = { height: bodyHeight }
        return <section className="compose-note">
            <div className="container flex">
                <div ref={ this.composeRef }
                    className={ `compose-note-on container bg-clr-opt ` }
                    style={ { '--bgClr': this.state.note.bgClr } }>
                    <form onSubmit={ e => { e.preventDefault() } }>
                        <div className="title-container">
                            <input className="title" type="text" placeholder="כותרת" name="title"
                                value={ title } onChange={ this.handleChange } ref={ this.inputRef } />
                            <div className="icons btn-pin-icon"></div>
                        </div>
                        <div className="body-container">
                            <textarea placeholder="תוכן" className="body" style={ bodyStyle } name="body"
                                onChange={ this.handleChange }
                                value={ bodyWithLines } />
                        </div>
                        <ComposFooter
                            onSave={ this.props.onSave }
                            setBgClr={ this.setBgClr }
                            currBgClr={ this.state.note.bgClr }
                            setIsCompose={ this.props.setIsCompose }
                        />
                    </form>
                </div>
            </div>
        </section>
    }
}

export default WithNoteHandling(ComposeOn)
