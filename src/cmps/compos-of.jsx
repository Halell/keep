

export function ComposOf({ onMainSectionClick, labelBy }) {
    if (labelBy === 'garbage') return
    return <section className="compos-note"
        onClick={ (e) => onMainSectionClick(true, e) }>
        <div className="container flex">
            <div className="compos-note-of container">
                <div>רישום הערה... </div>
                <div className="to-do-icon compos-icons"></div>
                <div className="draw-icon compos-icons"></div>
                <div className="img-icon compos-icons"></div>
            </div>
        </div>
    </section>

}