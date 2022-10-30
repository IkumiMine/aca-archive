import { ReactComponent as CloseSign } from '../../assets/close-sign.svg';
import './archive-modal.styles.scss'; 

const ArchiveModal = ({detail, handleRemove}) => {

    const {header, country, content} = detail;

    return (
        <div className='archive-modal-container'>
            <div onClick={handleRemove}>
                <CloseSign />  
            </div>  
            <p className='archive-modal-header'>{header}</p>
            <p className='archive-modal-country'>{country}</p>
            <p className='archive-modal-content'>{content}</p>               
        </div>
    )
}

export default ArchiveModal;