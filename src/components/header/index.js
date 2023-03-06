import './header.css'
import Logo from './logo.png'
const Header=()=>{

    return (
<>
        <div className='header-box'>
            <img className='header-img' src={Logo}/>
            <p className='header-title'>
                Cat Clicker
            </p>
        </div>
</>
    );
}
export default Header ;