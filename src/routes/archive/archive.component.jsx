import ArchiveItem from "../../components/archive-item/archive-item.component";
import './archive.styles.scss'

const Archive = () => {

    //initializa objects
    const details1 = [
        {
            "id": 1,
            "country": "Japan",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
        {
            "id": 2,
            "country": "Korea",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
        {
            "id": 3,
            "country": "Canada",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
    ]

    const details2 = [
        {
            "id": 4,
            "country": "Japan",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
        {
            "id": 5,
            "country": "Korea",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
        {
            "id": 6,
            "country": "Canada",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
    ]

    const details3 = [
        {
            "id": 7,
            "country": "Japan",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
        {
            "id": 8,
            "country": "Korea",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
        {
            "id": 9,
            "country": "Canada",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
    ]

    const details4 = [
        {
            "id": 10,
            "country": "Japan",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
        {
            "id": 11,
            "country": "Korea",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
        {
            "id": 12,
            "country": "Canada",
            "header": "THE MOURNING FOREST, 2007, NOAMI KAWASE",
            "content": "Shigeki lives in a retirement home. He is looked after by a friendly caregiver, Machiko. They don’t know that they share a painful secret: the loss of a dear one. After an accident during a drive in the country, they end up embarking on an exhausting and enlightening two-day journey in the forest.",
        },
    ]

    return (        
        <div className='archive-outside-container'>
            <div className='archive-items-container'>
                <ArchiveItem details={details1} />
                <ArchiveItem details={details2} />
                <ArchiveItem details={details3} />
                <ArchiveItem details={details4} />
            </div>
        </div>
    )
}

export default Archive;