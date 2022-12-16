import React from 'react'
import s from './TotalSells.module.css'
import { Icon } from '@iconify/react';

const TotalSells = () => {

  return (
    <div className={s.totalSells}>
        <div className={s.totalSells_title}>
            <p>Total de ventas de Diciembre</p>
            <Icon width="24px" color="white" icon="zondicons:information-outline" style={{paddingRight: '5px'}} />
        </div>
        <div className={s.totalSells_body}>
            <p className={s.totalSells_value}>1'560.000</p>
            <p className={s.totalSells_date}>Diciembre, 2022</p>
        </div>
    </div>
  )
}

export default TotalSells