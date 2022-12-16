import React, {useContext, cloneElement} from 'react'
import { ReportsContext } from '../../containers/Reports/Reports';
import s from './Table.module.css'
import CustomCell from './CustomCell';

const columns = [
  {
    Header: "Transaccion",
    accessor: "transactionSuccess"
  },
  {
    Header: "Fecha y hora",
    accessor: "date"
  },
  {
    Header: "Metodo de Pago",
    accessor: "creditCard"
  },
  {
    Header: "ID Transaccion Bold",
    accessor: "id"
  },
  {
    Header: "Monto",
    accessor: "value"
  }
];

//This Table component uses the RenderProps design pattern, 
//it can receive a cell component to customize the table cells if required, 
//or it can not receive any children element, in this case the table will use standard cells but will keep the design pattern of the brand.
const Table = ({children}) => {

    const {filteredTransactions, dateFilter} = useContext(ReportsContext);

    const title = () => {
      return dateFilter === 'month' ? 'Diciembre' :
             dateFilter === 'week' ? 'esta semana' :
             dateFilter === 'today' ? 'hoy' : 'Diciembre';
    };
      
    return (
        <>
          <div className={s.table_title}>
              <h3>{`Tus ventas de ${title()}`}</h3>
          </div>
         <table className={s.table} role="table">
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.Header}>{column.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody >
            {filteredTransactions.map(row => (
              <tr key={row.id}>
                {columns.map(column => (    
                  children ? 
                  cloneElement(children, { row, column, key: column.accessor })
                  :
                  <td key={column.accessor}>{row[column.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>


        </table>
        </>
       
      );
}

export default Table