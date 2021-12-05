import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
    duration: 5000,
    ripple: true,
    position: {
        x: 'right',
        y: 'top',
    },
    types: [
        {
            type: 'info',
            background: 'orange',
            ripple: true,
        },
    ],
});

export default notyf;
