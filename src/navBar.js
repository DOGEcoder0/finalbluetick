import './navBar.css'
import logo1 from './Assets/logo1.png'
function navbar(){
    return(
        <nav className='nav'>
            <div className='nav_logo'>
                <img src={logo1} alt='logo'/>
            </div>
            <div className='options'>
                <a className='home' href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Blog</a>
                <a href="#">Contact Us</a>
            </div>
        </nav>
    )
}
export default navbar
