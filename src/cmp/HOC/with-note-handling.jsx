import React from 'react'
import { Service } from '../../service/app.service'

export const WithNoteHandling = (WrappedComponent) => {
    return class WithService extends React.Component {
        state = {
            noteInCompose: null,
        }

        saveNote = async (note) => {
            try {
                await Service.saveNote(note)
            } catch (err) {
                console.error(err)
            }
        }

        onNewNoteChange = (note) => {
            this.setState({ noteInCompose: note })
        }

        onSave = () => {
            if (!this.state.noteInCompose) return false
            this.saveNote(this.state.noteInCompose)
            this.setState({ noteInCompose: null })
            return true
        }
        handelNoteChange = async (note, filed, newValue) => {
            note[filed] = newValue
            try {
                return await this.saveNote(note)
            } catch (err) {
                console.error(err)
            }
        }

        render() {
            return (
                <WrappedComponent
                    { ...this.props }
                    noteInCompose={ this.state.noteInCompose }
                    onNewNoteChange={ this.onNewNoteChange }
                    onSave={ this.onSave }
                    handelNoteChange={ this.handelNoteChange }
                />
            )
        }
    }
}


