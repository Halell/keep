import { React } from 'react'

import { SearchBox } from "./header-search-box.jsx"
import { HeaderRightTools } from "./header-right-tools.jsx"
import { HeaderMiddleTools } from "./header-middle-tools.jsx"
import { HeaderLeftTools } from "./header-left-tools.jsx"

export class Header extends React.Component {
    state = {

    }

    render() {
        return <section className="keep-header " >
            <div className="keep-header-main-container flex">
                <HeaderRightTools />
                <div className="keep-header-middle-tools flex align-center">
                    <SearchBox />
                    <HeaderMiddleTools />
                </div>
                <div className="keep-header-left-tools">
                    <HeaderLeftTools />
                </div>
            </div>
        </section >
    }
}