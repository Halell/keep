
export function ComposFooter({ onSaveNote }) {
    return <div className="compos-footer container ">

        <div className="tools-container flex">
            <div className="btn-footer-compos flex">
                <div className="btn-footer-delete footer-icon"></div>
                <div className="btn-footer-color footer-icon"></div>
                <div className="btn-footer-img footer-icon"></div>
            </div>
            <div className="btn-close-compos" onClick={() => onSaveNote()}>save</div>

        </div>

    </div>
}