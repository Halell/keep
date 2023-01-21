import { Component } from 'react'

import ComposeOn from './compose-on'
import { ComposeOf } from './compose-of'

export class Compose extends Component {
    state = {
        isCompose: false,
    }
    setIsCompose = (isComposeValue) => {
        this.setState({ isCompose: isComposeValue })
    }
    render() {
        if (this.props.currLabel === 'garbage') return
        return (
            <div className={ 'compose' }>
                { (this.state.isCompose)
                    ? <ComposeOn
                        setIsCompose={ this.setIsCompose }
                        asyncLoadNotes={ this.props.asyncLoadNotes }
                    />
                    : <ComposeOf setIsCompose={ this.setIsCompose } />
                }
            </div>
        )
    }
}