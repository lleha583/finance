import "./HeaderUser.scss";
import search from "../../assets/icons/components/search.svg";
import notification from "../../assets/icons/components/notification.svg";
import unknownImage from "../../assets/icons/components/user.svg";


export default function HeaderUser() {
    let user: boolean = false;

    return (
        <section className="section_header">
            <div className="search">
                <img src={search} alt="" />
                <input className="search__inner" type="text" />
            </div>
            <div className="user_nav">
                <div className="block_icon notification">
                    <img className="user_nav_box" src={notification} />
                </div>
                <div className="block_icon user">
                    {
                        (user === true) ? <img className="user_nav_box" src={unknownImage} /> : <img className="user_nav_box" src={unknownImage} />
                    }
                    
                </div>
            </div>
        </section>
    )
}