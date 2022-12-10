import React from 'react';

const Saludo = ({tipoSaludo}) => {
    return (
        <div>
            <h1 className='saludo'>Hola, {tipoSaludo}</h1>
        </div>
    );
}

export default Saludo;
