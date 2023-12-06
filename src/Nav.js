import trophy from './img/trophy.png';

import './Nav.css';

function Nav() {
    return (
        <div className="Nav">
            <div className='header'>
                <img src={trophy} alt="" className='trophy' />
                <p><b>7 Days Student</b></p>
            </div>
        </div>
    );
}

export default Nav;
