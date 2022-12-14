import './archive-modal.styles.scss';
import { ReactComponent as CloseSign } from '../../assets/close-sign.svg';

const ArchiveModal = ({detailObj, setOpenModal}) => {

    const {header, country, content } = detailObj

    return (
            <div className='archive-modal-container'>
                <div
                    id='close-sign'  
                    onClick={() => {
                    setOpenModal(false);
                }}
                >
                    <CloseSign />  
                </div>  
                <p className='archive-modal-header'>{header}</p>
                <p className='archive-modal-country'>{country}</p>
                {/*<p className='archive-modal-content'>{content}</p>*/}                         
            </div>
        )
}

export default ArchiveModal;