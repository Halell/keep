import React from 'react'
import '../assets/styles/cmp/modal.scss'
import WithClickOutside from './HOC/with-click-outside'

class ModalDelete extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    {/* modal content here */ }
                </div>
            </div>
        )
    }
}

export default WithClickOutside(ModalDelete)
