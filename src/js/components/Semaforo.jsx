import React, { useState } from 'react';

function Semaforo() {
    const [colorSeleccionado, setColorSeleccionado] = useState('');

    return (

        <div className="d-flex justify-content-center mt-5">
            <div className="semaforo-fondo d-flex flex-column align-items-center gap-3 mt-5">
                <div
                    className={`luz bg-danger ${colorSeleccionado === 'rojo' ? 'encendido' : ''}`}
                    onClick={() => setColorSeleccionado('rojo')}>
                </div>

                <div
                    className={`luz bg-orange ${colorSeleccionado === 'naranja' ? 'encendido' : ''}`}
                    onClick={() => setColorSeleccionado('naranja')}>
                </div>

                <div
                    className={`luz bg-success ${colorSeleccionado === 'verde' ? 'encendido' : ''}`}
                    onClick={() => setColorSeleccionado('verde')}>
                </div>

            </div>
        </div >
    )
}

export default Semaforo;