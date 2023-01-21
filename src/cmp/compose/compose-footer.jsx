import { Component } from 'react'
import { ClrPiker } from '../color-piker'

export class ComposFooter extends Component {
    state = {
        isClrPickerOpen: false
    }
    ClrPikerOpen = (isOpen) => {
        this.setState({ isClrPickerOpen: isOpen })
    }
    render() {
        let { onSave, setBgClr, currBgClr } = this.props
        let { isClrPickerOpen } = this.state
        return (
            <div className="footer">
                <div className="container">
                    <div className={ `delete-icon footer-icon ${isClrPickerOpen ? 'inactive' : ''}` }></div>
                    <ClrPiker
                        setBgClr={ setBgClr }
                        currBgClr={ currBgClr }
                        clrPikerOpen={ this.ClrPikerOpen }
                    />
                    <div className={ `img-icon footer-icon ${isClrPickerOpen ? 'inactive' : ''}` }></div>
                </div>
                <div className="btn-save" onClick={ () => (onSave(), this.props.setIsCompose(false)) }>save</div>
            </div>
        )
    }
}