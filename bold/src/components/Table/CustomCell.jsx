import React from 'react'
import { Icon } from '@iconify/react';
import s from './CustomCell.module.css'


const CustomCell = ({row, column}) => {

    const RenderCell = () => {
        if(column.accessor === 'transactionSuccess'){
            if(row[column.accessor] === true && row.canal === 'datafono'){
                return <span className={s.cellWithIcon}>{<Icon width="25px" color="#111e6c" icon="ph:calculator" style={{paddingRight: '5px'}} /> } Cobro exitoso</span>
            }else if(row[column.accessor]=== false && row.canal === 'datafono'){
                return <span className={s.cellWithIcon}>{<Icon width="25px" color="#111e6c" icon="ph:calculator" style={{paddingRight: '5px'}} /> } Cobro No realizado</span>
            }else if(row[column.accessor] === true && row.canal === 'link'){
                return <span className={s.cellWithIcon}>{<Icon width="25px" color="#111e6c" icon="mdi:link-variant" style={{paddingRight: '5px'}} /> } Cobro exitoso</span>
            }else if(row[column.accessor] === false && row.canal === 'link'){
                return <span className={s.cellWithIcon}>{<Icon width="25px" color="#111e6c" icon="mdi:link-variant" style={{paddingRight: '5px'}} /> } Cobro No realizado</span>
            }

        }else if(column.accessor === 'creditCard'){
            return (<span className={s.cellWithIcon}> <Icon width="25px" color="black" icon="logos:mastercard" style={{paddingRight: '5px'}} />  {row[column.accessor]}</span>)
        }else if(column.accessor === 'value'){
            return (<div>
                <p className={s.priceValue}>{`$${row[column.accessor]}`}</p>
                {
                    row.Deduction && 
                    <>  
                        <p className={s.deductionText}>Deduccion Bold</p>
                        <p className={s.deductionValue}>{`-$${row.Deduction}`}</p>
                    </>
                }
            </div>)
        }
        
        else{
            return row[column.accessor]
        }
    }


    return (
        // <td key={column.accessor}>{row[column.accessor]}</td>
        <td key={column.accessor} role="td">{
            <RenderCell />
        }</td>
    )
}

export default CustomCell