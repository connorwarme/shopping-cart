import { v4 as uuidv4 } from 'uuid';

const content = [
    {
        id: uuidv4(),
        title: "4 Sessions",
        about: "details about the 4 week counseling program",
        quantity: 0,
        price: 400,
        url: '4-sessions',
    },
    {
        id: uuidv4(),
        title: "8 Sessions",
        about: "details about the 8 week counseling program",
        quantity: 0,
        price: 800,
        url: '8-sessions',
    },
    {
        id: uuidv4(),
        title: "12 Sessions",
        about: "details about the 12 week counseling program",
        quantity: 0,
        price: 1200,
        url: '12-sessions',
    },
    {
        id: uuidv4(),
        title: "Single Session Consultation",
        about: "details about the single session",
        quantity: 0,
        price: 150,
        url: 'single-session',
    }
]
const photo = ['Felipe Nordenflycht', 'Taylor Shaffer', 'Anthony Berley', 'JP Melville'];

export { content, photo };