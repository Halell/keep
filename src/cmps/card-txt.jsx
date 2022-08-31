

export function CardTxt(props) {
    let { note, onDelete } = props
    return <section className="card-note txt-note">
        <div className="container ">
            <div className="title-container on-focus">
                <div className="card-note title on-focus" >{`${note.title}`} </div>
                <div className="compos-icons btn-pin-icon"></div>
            </div>
            <div className=" card-note body">
                {`${note.body}`}
            </div>
            <div className="tools-container flex">
                <div className="btn-footer-compos flex">
                    <div className="btn-footer-delete footer-icon" onClick={() => onDelete(note.id)}></div>
                    <div className="btn-footer-color footer-icon"></div>
                    <div className="btn-footer-img footer-icon"></div>
                </div>
            </div>
        </div>
    </section>
    // contentEditable="true"
}