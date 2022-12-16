import React from 'react'
import Dropdown from '../Dropdown'
import DateFilter from './DateFilter'
import TypeOfCharge from './TypeOfCharge'

const Filters = () => {
  return (
    <div>
        <DateFilter />
        <Dropdown title='FILTRAR'>
            <TypeOfCharge />
        </Dropdown>
    </div>
  )
}

export default Filters