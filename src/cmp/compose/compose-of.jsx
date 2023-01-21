

export function ComposeOf({ labelBy, setIsCompose }) {

    if (labelBy === 'garbage') return
    return (
        <div className="compose-note-of container"
            onClick={ () => setIsCompose(true) }
        >
            <div>רישום הערה ...</div>
            <div className="to-do-icon icons"></div>
            <div className="draw-icon icons"></div>
            <div className="img-icon icons"></div>
        </div>
    )
}