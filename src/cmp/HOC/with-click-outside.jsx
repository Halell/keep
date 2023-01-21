import React from "react"

const WithClickOutside = (WrappedComponent) => {
    class WithClickOutsideWrapper extends React.Component {
        constructor(props) {
            super(props)
            this.componentRef = React.createRef()
        }

        componentDidMount() {
            window.addEventListener('click', this.handleClickOutside)
        }

        componentWillUnmount() {
            window.removeEventListener('click', this.handleClickOutside)
        }

        handleClickOutside = (event) => {
            if (this.componentRef.current && !this.componentRef.current.contains(event.target)) {
                this.props.handleClickOutside()
            }
        }

        render() {
            return (
                <div ref={ this.componentRef }>
                    <WrappedComponent { ...this.props } />
                </div>
            )
        }
    }
    return WithClickOutsideWrapper
}
export default WithClickOutside
