import './style.css';
import TimeLine from './timeLine.js';

document.addEventListener('DOMContentLoaded', () => {
    let timeLine = new TimeLine({
        timeLineElem: document.querySelector('.experience')
    });
});