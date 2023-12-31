import { useState } from 'react';
import '../styles/navbar.css'
function Navbar() 
{
    let [dropdown, setdropdown] = useState(false);

    return(
        <nav>
            <div id="logo">
            <i className='bx bxs-leaf' ></i>
            </div>

            <div id="humburger" onClick={() => {setdropdown(!dropdown)}}>
            { dropdown == false ? <i className='bx bx-menu' ></i> :
            <i class='bx bx-menu-alt-left' ></i> }
            </div>   

            {dropdown && <div id="dropdown">
                <ul>
                    <li><a href=""> About us</a> </li>
                    <li><a href=""> Profile</a> </li>
                    <li><a href=""> History</a> </li>
                    <li><a href=""> Services</a> </li>
                    <li><a href=""> Settings</a> </li>
                    <li><a href=""> Log out</a> </li>
                </ul>
            </div> }

            
        </nav>
    )
}

export default Navbar;
