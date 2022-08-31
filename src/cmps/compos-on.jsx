import { React } from 'react'

import { ComposFooter } from "./compos-footer.jsx"

export class ComposOn extends React.Component {
    state = {
        note: {
            id: '',
            title: '',
            body: '',
            bodyHeight: 25
        }
    }
    inputRef = React.createRef()
    componentDidMount() {
        this.inputRef.current.focus()
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
                bodyHeight -= 25
            }
        }
        this.setState((prevState) => ({ note: { ...prevState.note, [field]: value, bodyHeight: bodyHeight } }),
            () => { this.props.onNewNoteChange(this.state.note) })
    }

    render() {
        const { title, bodyHeight, body } = this.state.note
        // const { isBlank } = this.props.compos
        let bodyWithLines = body.replace('\\n', '\n')
        let bodyStyle = { height: bodyHeight }
        return <section className="compos-note"
            onClick={ (e) => this.props.onMainSectionClick({ isClickOnComposArea: true, label: 'basicNote' }, e) } >
            <div className="container flex">
                <div className="compos-note-on container">
                    <form onSubmit={ e => { e.preventDefault() } }>
                        <div className="title-container">
                            <input className="title" type="text" placeholder="כותרת" name="title"
                                value={ title } onChange={ this.handleChange } ref={ this.inputRef } />
                            <div className="compos-icons btn-pin-icon"></div>
                        </div>
                        <div className="body-container">
                            <textarea className="body" style={ bodyStyle } name="body"
                                onChange={ this.handleChange }
                                value={ bodyWithLines } />
                        </div>
                        <div className="footer container ">
                            <ComposFooter onSaveNote={ this.props.onSaveNote } />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    }
}