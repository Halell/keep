import React, { Component } from 'react'
import { HexColorPicker } from "react-colorful"

//svg's
import { ReactComponent as ClrPickerIco } from '../assets/svg/clr-picker-ico.svg'

export class ClrPiker extends Component {
    state = {
        clrPiker: false,
        currBgClr: this.props.currBgClr,
        isEditClr: false,
        uniqueColor: ''
    }
    setUniqueColor = (hexCode) => {
        this.onColorClick(hexCode)
    }
    color = (isBtnClick) => {
        this.setState({ clrPiker: isBtnClick })
        this.props.clrPikerOpen(isBtnClick)
    }
    constructor(props) {
        super(props)
        this.clrPikerRef = React.createRef()
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }
    handleClickOutside(event) {
        if (this.clrPikerRef && !this.clrPikerRef.current.contains(event.target)) {
            if (this.state.clrPiker) {
                this.color(false)
                this.setState({ isEditClr: false })
            }
        }
    }
    onColorClick = (currClr) => {
        this.props.setBgClr(currClr)
        this.setState({ currBgClr: currClr })
    }
    onEditClr = () => {
        this.setState({ isEditClr: true })
    }
    clrOpt = [
        ['#1c6f2b'],
        ['#05365e'],
        ['#ff5100'],
        ['#ffeb3b'],
        ['#c2d942'],
    ]
    btnPos = [
        42.5,
        56.9,
        71.25,
        85.5,
        100
    ]
    d = [1]
    render() {
        let { currBgClr } = this.state
        return (
            <div ref={ this.clrPikerRef } className={ `clr-piker-warper ${this.state.clrPiker ? 'open' : ''}` } >
                <ClrPickerIco className="color-icon footer-icon" onClick={ () => this.color(!this.state.clrPiker) } />
                <div onClick={ (e) => e.stopPropagation() } className={ `clr-piker` }>
                    { this.btnPos.map((currPos, idx) => {
                        let currClr = (currBgClr[0] === this.clrOpt[idx][0]) ? '#ffffff' : this.clrOpt[idx]
                        return (
                            <div key={ idx } className={ `bg-clr-opt ${this.state.clrPiker ? 'open' : ''}` }
                                style={ {
                                    '--i': this.state.clrPiker ? currPos : 0,
                                    '--bgClr': currClr,
                                } }
                                onClick={ () => this.onColorClick(currClr,) }>
                            </div>
                        )
                    }) }
                    <div className={ "edit-clr" } onClick={ () => this.onEditClr() }>+</div>
                    { this.state.isEditClr && <HexColorPicker className={ "clr-edit" } onChange={ (hexCode) => this.setUniqueColor(hexCode) } /> }
                </div >
            </div>
        )
    }
}
