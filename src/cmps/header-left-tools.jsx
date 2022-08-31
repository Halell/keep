// import { MailService } from "../../mail/service/mail.service.js";
import { NavLink } from "react-router-dom"


export function HeaderLeftTools() {
    return <div className="keep-header-left-tools-icons flex align-center">

        <div className="keep-app-header keep-heder-icon-container keep-img-container flex" >
            <svg className="keep-apps-icon-svg" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
        </div>
        <div>
            {/* <Link to="/home"><div title={MailService.getUserDetails().email} className="keep-app-header keep-heder-icon-container keep-img-container keep-user-icon " ><div className="keep-user-name-letter">{MailService.getUserDetails().email.charAt(0).toUpperCase()}</div>
                <img className="keep-home-heder keep-img-heder keep-circle" src={"./assets/img/icons/iconG.svg "} />
            </div></Link> */}
        </div>

    </div>
}