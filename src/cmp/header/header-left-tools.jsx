import { ReactComponent as AllAppsIco } from '../../assets/svg/all-apps-ico.svg'
import { ReactComponent as UserIco } from '../../assets/svg/user-ico.svg'

export function HeaderLeft() {
    return <div className="header-left">
        <div className="all-apps-btn on-hover-color" >
            <AllAppsIco className="btn-apps" />
        </div>
        <div className="user-icon">
            <UserIco />
            <div >ה</div>
        </div>
    </div>
}