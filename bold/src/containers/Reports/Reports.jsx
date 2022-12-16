import React, {createContext} from 'react';
import Filters from '../../components/Filters'
import Table from '../../components/Table'
import TotalSells from '../../components/TotalSells'
import s from './Reports.module.css'
import useReports from '../../hooks/useReports';
import CustomCell from '../../components/Table/CustomCell';

export const ReportsContext = createContext({})
const { Provider } = ReportsContext

const Reports = () => {

  const methods = useReports()

  const value = {...methods}
  return (
    <Provider value={value}>
      <main className={s.reports}>
        <section className={s.reports_header}  name="header">
          <TotalSells />
          <Filters />
        </section>
        <section className={s.reports_table}>
          <Table>
            <CustomCell />
          </Table>
        </section>
      </main>
    </Provider>
    
  )
}

export default Reports