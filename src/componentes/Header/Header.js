import './Header.scss';
import UserAva from "../../svg/user.svg";
import Arrow from "../../svg/arrow.svg";
import Burg from "../../svg/burger.svg";

function Header({ title, avatar }) {

    return (
        <header className='header'>
            <div className='burger'>
                <img  svg={Burg}/>
            </div>

            {title}: {avatar}
            <div className='icons'>
                <img  className='userAva'  src={UserAva} />
                <img  className='arow'  src={Arrow} />
            </div>
        </header>
    )
}

export default Header;