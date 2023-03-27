import './Header.css';
import logo from '../../image/logo.png';

export const Header = ()=> {
    return (
        <div className="Header">
            <img src={logo} alt="Shop logo"/>
        </div>
    )
}