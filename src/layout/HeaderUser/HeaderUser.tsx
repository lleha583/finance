import "./HeaderUser.scss";
import search from "../../assets/icons/components/search.svg";
import notification from "../../assets/icons/components/notification.svg";
import unknownImage from "../../assets/icons/components/user.svg";
import userImg from "../../assets/icons/components/userImg.png"
import { useSelector } from "react-redux";
import { IUser, IUserData } from "../../interface/interface";


export default function HeaderUser() {
    
    const userStatus = useSelector((state: {user: IUser, userData: IUserData}) => {return state.user.status})


    return (
        <section className="section_header">
            <div className="search">
                <img src={search} alt="" />
                <input className="search__inner" type="text" placeholder="search" />
            </div>
            <div className="user_nav">
                <div className="block_icon notification">
                    <img className="user_nav_box" src={notification} />
                </div>
                <div className="block_icon user">
                    {
                        (userStatus === "fulfilled") ? <img className="user_nav_box" src={userImg} /> : <img className="user_nav_box" src={unknownImage} />
                    }
                    
                </div>
            </div>
        </section>
    )
}