import './archive-modal.styles.scss';
import ArchiveItem from '../archive-item/archive-item.component'; 

const ArchiveModal = ({detailObj, setSelectedElementID}) => {


    return (
        <div className='archive-modal-container'>
            <button
              onClick={() => {
                setSelectedElementID(false);
              }}
            >
              X
            </button>
            
            <p className='archive-modal-header'>{detailObj.id}</p>
            <p className='archive-modal-country'>{detailObj.country}</p>
            
        </div>
    )
}

export default ArchiveModal;