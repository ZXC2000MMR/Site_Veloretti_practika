import React from 'react';
import '../components/css/Accordion.css';

// Компонент Accordion принимает title, content, isOpen и onClick как пропсы
const Accordion = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            {/* Заголовок аккордеона с обработчиком клика */}
            <div className="accordion-title" onClick={onClick}>
                <h2>{title}</h2>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {/* Содержимое аккордеона отображается только если isOpen true */}
            {isOpen && <div className="accordion-content"><p>{content}</p></div>}
        </div>
    );
};

export default Accordion;
