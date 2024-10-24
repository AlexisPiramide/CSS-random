import React, { useState } from 'react';
import './PricingOptions.css';

const PricingOptions = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const options = [
        {
            title: "Express Comun Certificado",
            description: "Envio expres, nacional y con bajo coste la cantidad de la lala lalal",
            price: "Desde 4.5€"
        },
        {
            title: "Express Rápido Certificado",
            description: "Envio rápido, nacional y con buena calidad.",
            price: "Desde 6.5€"
        },
        {
            title: "Express Premium Certificado",
            description: "Envio premium, nacional con máxima calidad.",
            price: "Desde 9.5€"
        }
    ];

    const selectOption = (option) => {
        setSelectedOption(option.title);
    };

    return (
        <div>
            <ul>
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={`lista-precios-grid ${selectedOption === option.title ? 'selected' : ''}`}
                        onClick={() => selectOption(option)}
                    >
                        <div className="opcion-gird">
                            <p className="opcion-precios">{option.title}</p>
                        </div>
                        <div className="datos-gird">
                            <p className="descripcion-precios">{option.description}</p>
                            <p className="precio-precios">{option.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <input type="hidden" name="selected_option" id="selected_option" value={selectedOption} />
            <button type="submit">Enviar</button>
        </div>
    );
};

export default PricingOptions;
