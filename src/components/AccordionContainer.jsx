import React, { useState } from 'react';
import Accordion from './Accordion';
import '../components/css/AccordionContainer.css';

const AccordionContainer = () => {
    // Состояние для хранения индекса открытого аккордеона
    const [openIndex, setOpenIndex] = useState(null);

    // Данные аккордеона, которые будут отображаться
    const accordionData = [
        {
            title: 'What about the paperwork?',
            content: 'The bicycle plan is set up so that there will be no administrative work on your part as the employer. You can use a free online platform that has been created by our leasing partner. This provides you with a simple overview of your business and your employees, allowing you to arrange everything. It also simplifies all the paperwork. Everything is organised with just a few clicks.'
        },
        {
            title: 'How does it work with an employee who retires early?',
            content: 'Content for question about employee retiring early.'
        },
        {
            title: 'What does a Veloretti Bike Plan cost for an employer?',
            content: 'Content for question about the cost of Veloretti Bike Plan.'
        },
        {
            title: 'How is the insurance & maintenance arranged when leasing a Veloretti bike?',
            content: 'Content for question about insurance and maintenance.'
        },
        {
            title: 'What are the legal requirements for the Veloretti bicycle plan?',
            content: 'Content for question about legal requirements.'
        }
    ];

    // Функция для управления открытием/закрытием аккордеона
    const handleAccordionClick = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion-container">
            <h1>Any questions?</h1>
            {/* Отображение списка аккордеонов */}
            {accordionData.map((item, index) => (
                <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleAccordionClick(index)}
                />
            ))}
        </div>
    );
};

export default AccordionContainer;
