import React, {useContext} from 'react'
import s from './DateFilter.module.css'
import { ReportsContext } from '../../containers/Reports/Reports';

const DateFilter = () => {
  const {setDateFilter, dateFilter} = useContext(ReportsContext);
  return (
    <div className={s.dateFilter}>
        <button 
          className={dateFilter === 'today' ? s.active : s.dateFilter_option} 
          onClick={()=>setDateFilter('today')}
        >
            Hoy
        </button>
        <button 
          className={dateFilter === 'week' ?  s.active : s.dateFilter_option} 
          onClick={()=>setDateFilter('week')}
        >
            Esta semana
        </button>

        <button 
          className={dateFilter === 'month' ? s.active : s.dateFilter_option} 
          onClick={()=>setDateFilter('month')}
        >
            Diciembre
        </button>     
    </div>
  )
}

export default DateFilter