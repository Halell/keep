import React, { Fragment, Component } from 'react'

import { ClrPiker } from './color-piker'
import ModalDelete from './modal-delete'
import { Service } from '../service/app.service.js'
import { WithNoteHandling } from './HOC/with-note-handling'


// svg's
import { ReactComponent as DeleteIco } from '../assets/svg/delete-ico.svg'
import { ReactComponent as AddImgIco } from '../assets/svg/add-img-ico.svg'


// class for notes
class Notes extends Component {

    state = {
        bgClr: this.props.note.bgClr,
        isClrPickerOpen: false,
        deleteModal: false
    }
    //need to go to the handlingNote HOC 
    setBgClr = (bgClr) => {
        this.setState({ bgClr: bgClr })
        let note = this.props.note
        note.bgClr = bgClr
        Service.saveNote(note)
    }
    ClrPikerOpen = (isOpen) => {
        this.setState({ isClrPickerOpen: isOpen })
    }

    render() {
        const { note } = this.props
        const { isClrPickerOpen } = this.state
        const style = { '--bgClr': this.state.bgClr, '--clr': `${(this.state.bgClr === '#ffffff') ? '#000000' : '#d4f2ff'}` }
        return (
            <section className="note" style={ { zIndex: this.props.zIndex } }>
                <div className={ `container bg-clr-opt ` } style={ style } >
                    <div className="title-container">
                        <div className="title" >{ `${note.title}` } </div>
                        <div className="icons btn-pin-icon"></div>
                    </div>
                    <div className={ "body" }>
                        { note.body.split("\n").map((line, index) => (
                            <Fragment key={ index }>
                                { line }
                                <br />
                            </Fragment>
                        )) }
                    </div>
                    <div className="tools-container flex">
                        <DeleteIco
                            className={ `footer-icon ${isClrPickerOpen ? 'inactive' : ''}` }
                            onClick={ (this.props.currLabel === 'garbage')
                                ? () => this.props.handelNoteChange(note, 'title', 'garbage')
                                : () => this.setState({ deleteModal: true })
                            }
                        />
                        { this.state.deleteModal && <ModalDelete /> }
                        <ClrPiker
                            setBgClr={ this.setBgClr }
                            currBgClr={ this.state.bgClr }
                            clrPikerOpen={ this.ClrPikerOpen }
                        />
                        <AddImgIco className={ `footer-icon ${isClrPickerOpen ? 'inactive' : ''}` } />
                    </div>
                </div>
            </section>
        )
    }
}

export default WithNoteHandling(Notes)

