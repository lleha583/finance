import './header.module.scss';
import iconMenu from '../../assets/icons/header/menu-alt-1-svgrepo-com.svg'
import home from '../../assets/icons/header/home.svg';
import graph from '../../assets/icons/header/graph.svg';
import settings from '../../assets/icons/header/settings.svg'
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='menu'>
                <img src={iconMenu} />
            </div>
            <nav>
                <Link to={"/"}>
                <div>
                    <img src={home} />
                    <p>Home</p>
                </div>
                </Link>
                <Link to={"/analys"}>
                <div>
                    <img src={graph} />
                    <p>Transitions</p>
                </div>
                </Link>
                <Link to={"/analys"}>
                <div>
                    <img src={home} />
                    <p>Home</p>
                </div>
                </Link>
                <Link to={"/settings"}>
                <div>
                    <img src={settings} />
                    <p>Settings</p>
                </div>
                </Link>
            </nav>
        </header>
    )
}