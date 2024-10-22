import React, { useState } from 'react';
import './dimensiones.css';
import Dimension from './Dimension';

const DimensionSelector = () => {
    const [selectedDimension, setSelectedDimension] = useState('');

    const handleSelectDimension = (value) => {
        setSelectedDimension(value);
    };

    return (
        <div className="dimension-selector">
            <form id="formulario-envio" action="/submit" method="GET">
                <div className="contenedor-opciones">
                    <Dimension dimension="pequeño" selected={selectedDimension === 'pequeño'} onSelect={handleSelectDimension} />
                    <Dimension dimension="mediano" selected={selectedDimension === 'mediano'} onSelect={handleSelectDimension} />
                    <Dimension dimension="grande" selected={selectedDimension === 'grande'} onSelect={handleSelectDimension} />
                </div>
                <input type="hidden" name="dimension-seleccionada" value={selectedDimension} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default DimensionSelector;
