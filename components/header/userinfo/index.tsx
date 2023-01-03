import {CgProfile} from "react-icons/cg";

export default function UserInfo() {
    return (
        <div className="c-userinfo">
            <div className="c-userinfo__avatar">
                <CgProfile size={40} />
            </div>
            <div className="c-userinfo__name">
                <p>Roy Roodenburg</p>
            </div>
        </div>
    )
}