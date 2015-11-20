export default class TimeLine {
    constructor(options) {
        this.timeLineElem = options.timeLineElem;
        this.scale = this.timeLineElem.querySelector('.experience-scale');

        //коллекция всех должностей на шкале
        this.positions = this.scale.querySelectorAll('.item-position-name');

        //коллекция всех описаний должностей
        this.descriptions = this.timeLineElem.querySelectorAll('.experience-description');
        
        //текущие выбранные элементы
        this.currentPosition = this.scale.querySelector('.current-position');
        this.currentDescription = this.timeLineElem.querySelector('.current-description');

        this.scale.addEventListener('click', event => this.onScaleClick(event));
    }
    
    onScaleClick(event) {
        event.preventDefault();
        let target = event.target;
        if (target.matches('.item-position-name')) {
            this.selectScalePosition(target);
        }
    }
    
    selectScalePosition(position) {
        //проверяем наличие класса текущего элемента, если есть, то ничего не делаем
        if (position.matches('.current-position')) return;

        //если нет, добавим
        position.classList.add('current-position');
        //удалим текущий класс у предыдущего элемента
        this.currentPosition.classList.remove('current-position');
        //запомним новый текущий
        this.currentPosition = position;

        //изменим текст описания
        this.changePositionDescription();
    }

    changePositionDescription() {
        let index = 0;
        //ищем индекс текущей выбранной должности в массиве должностей
        for(let i = 0; i < this.positions.length; i++) {
            if (this.positions[i].matches('.current-position')) {
                index = i;
                break;
            }
        }
        //у предыдущего текущего элемента удаляем класс текущего элемента
        this.currentDescription.classList.remove('current-description');

        //выбираем новое описание, соответствующее выбранной позиции
        this.currentDescription = this.descriptions[index];

        //отображаем новое описание
        this.currentDescription.classList.add('current-description');
    }   
}
