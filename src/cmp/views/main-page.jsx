import { Component } from 'react'

import { Header } from '../header/header-main'
import { MainSection } from '../main-section'
import { SideBar } from '../side-bar.jsx'


export class MainPage extends Component {
    state = {
        currLabel: '',
        filterBy: '',

    }
    activeLabel = (label) => {
        this.setState({ currLabel: label }, () => { console.log(this.state.currLabel) })

    }
    render() {
        let { currLabel, filterBy } = this.state
        return (
            <section className="main-app">
                <Header filterBy={ filterBy } />
                <div className="container flex">
                    <SideBar currLabel={ currLabel } onLabel={ this.activeLabel } />
                    <MainSection currLabel={ currLabel } filterBy={ filterBy } />
                </div>
            </section >
        )
    }
}