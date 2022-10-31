import  React,{ useState, useEffect } from 'react';
import ArchiveModal from '../archive-modal/archive-modal.component';
import './archive-item.styles.scss';

let detailObj;

//this is your new "modal" rendering function
const renderData = (detail) => {
    console.log(detail)
    detailObj = {
        "id": detail.id,
        "country": detail.country,
    }

    return (
        <div>
            {detailObj["id"]}
            {detailObj["country"]}
        </div>
    )
}

console.log(detailObj);

const ArchiveItem = ({details}) => {


    //open/close modal state
    //const [openModal, setOpenModal] = useState(false);


    

    //Selected element state
    const [selectedElementID, setSelectedElementID] = useState(false);


    return (
        <>
            <div className='archive-item-container'>
                {details.map((detail, i) => (
                    <div 
                        className='archive-item'    
                        key={detail.id}
                        onClick={() => {
                            renderData(detail);
                            setSelectedElementID(true);
                        }}
                    >  
                     {detail.id}
                     {detail.country}

                    </div>
                    

                ))}
                    {/*if selectedElementID is more than 0, and selectedElementID and detail.id are same, display ArchiveModal*/}
                    {selectedElementID && 
                        <ArchiveModal setSelectedElementID={setSelectedElementID} detailObj={detailObj}/>
                    }
                
            </div>
        </>
    )
}

export default ArchiveItem;