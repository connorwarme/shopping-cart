import { v4 as uuidv4 } from 'uuid';

const content = [
    {
        id: uuidv4(),
        title: "4 Sessions",
        about: "details about the 4 week counseling program",
        quantity: 0,
        price: "$400",
    },
    {
        id: uuidv4(),
        title: "8 Sessions",
        about: "details about the 8 week counseling program",
        quantity: 0,
        price: "$800",
    },
    {
        id: uuidv4(),
        title: "12 Sessions",
        about: "details about the 12 week counseling program",
        quantity: 0,
        price: "$1200",
    },
    {
        id: uuidv4(),
        title: "Single Session Consultation",
        about: "details about the single session",
        quantity: 0,
        price: "$150",
    }
]

export default content;