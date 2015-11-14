import './index.html';
import './css/style.css';
import './img/ja.jpg';
import './img/favicon.ico'
import TimeLine from './timeLine.js';

document.addEventListener('DOMContentLoaded', () => {
    let timeLine = new TimeLine({
        timeLineElem: document.querySelector('.experience')
    });
});