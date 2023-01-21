import { ReactComponent as RefreshIco } from '../../assets/svg/refresh-ico.svg'
import { ReactComponent as ListDisplayIco } from '../../assets/svg/list-display-ico.svg'
import { ReactComponent as SettingsIco } from '../../assets/svg/settings-ico.svg'


export function HeaderMiddleTools() {
    return <div className="header-middle-tools-icons ">
        <div className="header-middle-icons inline-block on-hover-color">
            <RefreshIco className="header-ico" />
        </div>
        <div className=" header-middle-icons inline-block on-hover-color">
            <ListDisplayIco className="header-ico" />
        </div>
        <div className="header-middle-icons inline-block on-hover-color">
            <SettingsIco className="header-ico" />
        </div>
    </div>
}
