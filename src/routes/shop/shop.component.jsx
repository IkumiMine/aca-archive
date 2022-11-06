import './shop.styles.scss'
import Overlay from '../../assets/ShadowOverlay.jpg';
import { ReactComponent as Search } from '../../assets/search.svg';

const Shop = () => {

    return (
        <div 
            className='shop-container'
            style={{
                backgroundImage: `url(${Overlay})`
            }}
        >
            <div className='shop-menu-container'>
                <div className='shop-menu-left'>
                    <p id='shop-bag'>Bag</p>
                    <div id='shop-line'></div>
                    <p id='shop-num'>0</p>
                </div>
                <div className='shop-menu-right'>
                    <Search />
                </div>
            </div>
            <h2>Shop</h2>
        </div>
    )

}

export default Shop;