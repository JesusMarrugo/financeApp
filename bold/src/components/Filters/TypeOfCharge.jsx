
import React, { useState, useContext } from 'react';
import s from './TypeOfCharge.module.css'
import { ReportsContext } from '../../containers/Reports/Reports';


const TypeOfCharge = () => {
    const { setCanalFilter } = useContext(ReportsContext);

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setCanalFilter(selectedOption)
    }

    return (
        <form onSubmit={handleFormSubmit} className={s.typeOfCharge}>
            <label>
                <input
                    type="checkbox"
                    value="datafono"
                    checked={selectedOption === 'datafono'}
                    onChange={handleOptionChange}
                />
                Cobros con datafono
            </label>

            <label>
                <input
                    type="checkbox"
                    value="link"
                    checked={selectedOption === 'link'}
                    onChange={handleOptionChange}
                />
                Cobros con link de pago
            </label>

            <label>
                <input
                    type="checkbox"
                    value="all"
                    checked={selectedOption === 'all'}
                    onChange={handleOptionChange}
                />
                Ver todos
            </label>

            <div>
                <button>Aplicar</button>
            </div>

        </form>
    );
};

export default TypeOfCharge;