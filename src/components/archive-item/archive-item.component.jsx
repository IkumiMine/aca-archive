import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import ArchiveModal from '../archive-modal/archive-modal.component';
import './archive-item.styles.scss';

const ArchiveItem = ({details}) => {

    //open/close modal state
    //const [openModal, setOpenModal] = useState(false);

    //Selected element state
    const [selectedElementID, setSelectedElementID] = useState(0);

    //Assigned detial.id into setSelectedElement on click
    const handleClick = (id) => {
        setSelectedElementID(id);
    }

    const handleRemove = () => {
        setSelectedElementID(prevSelectedElementID => ([...prevSelectedElementID, ...newSelectedElementID]));
        console.log(`this is handle remove function ${selectedElementID}`);
    }
    
    return (
        <Fragment>
            <div className='archive-item-container'>
                {details.map((detail, i) => (
                    <div 
                        className='archive-item'    
                        key={detail.id}
                        onClick={() => {
                            handleClick(detail.id);
                        }}
                    >
                    {/*if selectedElementID is more than 0, and selectedElementID and detail.id are same, display ArchiveModal*/}
                    {selectedElementID > 0 && (selectedElementID === detail.id) && 
                        <ArchiveModal detail={detail} handleRemove={handleRemove}/>
                    }
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default ArchiveItem;