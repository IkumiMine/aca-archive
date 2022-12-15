import ArchiveItem from "../../components/archive-item/archive-item.component";
import './archive.styles.scss'
import MorningForest from '../../assets/MourningForest.00_00_07_16.Still001_4.jpg';
import OneDayYouWillReachtheSea from '../../assets/OneDayYouWillReachTheSea.00_00_04_07_4.jpg';
import Kogonada from '../../assets/Kogonada.00_00_04_10_4.jpg';
import LoveLetter from '../../assets/LoveLetter.00_00_04_01.Still003_4.jpg';
import TheCloudInHerRoom from '../../assets/TheCloudInHerRoom.00_00_09_01_13.jpg';
import Maborosi from '../../assets/Maborosi.00_00_04_03.Still001_4.jpg';
import StillWalking from '../../assets/StillWalking.00_00_02_19_4.jpg';
import OnTheBeachAtNightAlone from '../../assets/OnTheBeachAtNightAlone.00_00_04_10.Still005_4.jpg';
import KikisDeliveryService from '../../assets/KikisDeliveryService.00_00_00_01.Still002_4.jpg';
import AsakoIandII from '../../assets/AsakoI&II.00_00_09_05_4.jpg';
import TheThirdMurder from '../../assets/TheThirdMurder.00_00_09_04_4.jpg';
import DriveMyCar from '../../assets/Filmtok.00_00_07_04_4.jpg';

const Archive = () => {

    //initialize objects
    const details = [
        {
            "id": 1,
            "country": "Japan",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {MorningForest}, 
        },
        {
            "id": 2,
            "country": "Japan",
            "header": "One Day, You Will Reach The Sea",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {OneDayYouWillReachtheSea}, 
        },
        {
            "id": 3,
            "country": "Canada",
            "header": "Kogonada",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {Kogonada}, 
        },
    /*    {
            "id": 4,
            "country": "Japan",
            "header": "Love Letter",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {LoveLetter},
        },
        {
            "id": 5,
            "country": "Korea",
            "header": "The Cloud in Her Room",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {TheCloudInHerRoom}, 
        },
        {
            "id": 6,
            "country": "Canada",
            "header": "Maborosi",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {Maborosi},
        },
        {
            "id": 7,
            "country": "Japan",
            "header": "Still Walking",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {StillWalking}, 
        },
        {
            "id": 8,
            "country": "Korea",
            "header": "On the Beach at Night Alone",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {OnTheBeachAtNightAlone}, 
        },
        {
            "id": 9,
            "country": "Canada",
            "header": "Kikis Delivery Service",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {KikisDeliveryService}, 
        },
        {
            "id": 10,
            "country": "Japan",
            "header": "Asako I & II",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {AsakoIandII}, 
        },
        {
            "id": 11,
            "country": "Korea",
            "header": "The Third Murder",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {TheThirdMurder}, 
        },
        {
            "id": 12,
            "country": "Canada",
            "header": "Drive My Car",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
            "image": {DriveMyCar}, 
        },
        */
    ]

    return (        
        <div className='archive-outside-container'>
            <ArchiveItem details={details} />
        </div>
    )
}

export default Archive;