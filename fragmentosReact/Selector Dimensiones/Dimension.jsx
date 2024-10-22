import React from 'react';

const Dimension = ({ dimension, selected, onSelect }) => {
    return (
        <div className="contenedor-dimension">
            <div className={`dimension-paquete ${selected ? 'seleccionado' : ''}`} onClick={() => onSelect(dimension)} data-value={dimension}>
                <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt={`Paquete ${dimension}`} />
            </div>
            <div className="sombra-dimension" style={{ opacity: selected ? 0 : 1 }}></div>
        </div>
    );
};

export default Dimension;
