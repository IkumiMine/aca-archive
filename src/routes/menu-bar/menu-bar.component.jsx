import { Outlet, Link } from 'react-router-dom';
import './menu-bar.styles.scss';

const MenuBar = () => {

    return (
        <>
            <div className='menu-bar-container'>
                <Link className='menu-links' to='/'>Home</Link>
                <Link className='menu-links' to='/archive'>Archive</Link>
                <Link className='menu-links' to='/shop'>Shop</Link>
            </div>
            <Outlet />
        </>
    )

}

export default MenuBar