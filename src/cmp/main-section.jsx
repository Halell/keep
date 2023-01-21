import { Component } from 'react'

import Notes from './notes.jsx'
import { Compose } from './compose/compose'
import { Service } from '../service/app.service'

export class MainSection extends Component {
    state = {
        notes: null,
    }
    loadNotes = async () => {
        try {
            const notes = await Service.query(this.props.filterBy, this.props.currLabel)
            this.setState({ notes })
            console.log('have loaded notes')
        } catch (err) {
            console.error(err)
        }
    }
    componentDidMount() {
        this.loadNotes()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.currLabel !== this.props.currLabel) {
            this.loadNotes()
        }
    }
    render() {
        if (!this.state.notes) return <div>Loading...</div>
        return (
            <section className="main-section">
                <Compose
                    asyncLoadNotes={ this.loadNotes }
                    currLabel={ this.props.currLabel }
                />
                <div className="notes-area">
                    { this.state.notes.map((note, idx, notes) =>

                        < Notes
                            zIndex={ notes.length - idx }
                            note={ note }
                            key={ note.id }
                            currLabel={ this.props.currLabel }
                        />
                    ) }
                </div>
            </section>
        )
    }
}
