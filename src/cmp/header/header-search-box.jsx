import { Component } from 'react'

import { ReactComponent as MagnifierIco } from '../../assets/svg/magnifier-ico.svg'
import { ReactComponent as XIco } from '../../assets/svg/x-ico.svg'


export class SearchBox extends Component {
    state = {
        isShown: false,
    }
    onSearchClick = () => {
        this.props.setSectionPadding()
        this.setState(prevState => ({ isShown: !prevState.isShown }),
            () => { this.myInp.focus() })
    }
    render() {
        return <section className="header-search-box" >
            <div className="search-btn on-hover-color" onClick={ this.onSearchClick }>
                <MagnifierIco />
            </div>
            <form style={ this.state.isShown ? { display: "block" } : {} }>
                <div className="container" >
                    <input ref={ (ip) => this.myInp = ip } className={ `${this.state.isShown ? 'shown' : ''}` } placeholder="חיפוש" type="text" />
                </div>
                <button className="magnifier-btn">
                    <MagnifierIco />
                </button>
                <button className="X-btn">
                    <XIco />
                </button>
            </form>
        </section>
    }
}