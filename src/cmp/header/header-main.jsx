import { Component } from 'react'

import { SearchBox } from "./header-search-box.jsx"
import { HeaderRightTools } from "./header-right-tools.jsx"
import { HeaderMiddleTools } from "./header-middle-tools.jsx"
import { HeaderLeft } from "./header-left-tools.jsx"

export class Header extends Component {
    state = {
        largePadding: false,
    }
    setSectionPadding = () => {
        this.setState(prevState => ({
            largePadding: !prevState.largePadding
        }))
    }
    render() {
        return <section className={ `header ${this.state.largePadding ? "with-padding" : ""}` } >
            <div className="header-main-container flex">
                <HeaderRightTools />
                <div className="header-middle-tools">
                    <SearchBox setSectionPadding={ this.setSectionPadding } />
                    <HeaderMiddleTools />
                </div>
                <HeaderLeft />
            </div>
        </section >
    }
}