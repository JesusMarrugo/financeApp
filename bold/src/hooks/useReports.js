import { useState, useEffect} from 'react';
import data from '../data/data'

const useReports = () => {
  // Initialize the state variables that will hold the filter values
  const [dateFilter, setDateFilter] = useState(
    localStorage.getItem('dateFilter') || 'month'
  );
  const [canalFilter, setCanalFilter] = useState(
    localStorage.getItem('canalFilter') || 'all'
  );

  // Initialize the state variable that will hold the filtered transactions
  const [filteredTransactions, setFilteredTransactions] = useState(data);

  //update the localStorage values whenever the filter values change
  useEffect(() => {
    localStorage.setItem('dateFilter', dateFilter);
    localStorage.setItem('canalFilter', canalFilter);
  }, [dateFilter, canalFilter]);


const filterByDate = (transactions, dateFilter) => {
    // Determine the current date and time
    const currentDate = new Date();
  
    // Filter the transactions based on the date filter value
    switch (dateFilter) {
      case 'today':
        // Keep only the transactions that were made TODAY
        return transactions.filter(t => {
          // Convert the date and time in the t object to a valid format
          const [date, time] = t.date.split(' - ');
          const transactionDate = new Date(date.split('-')[2], date.split('-')[1] - 1, date.split('-')[0], time.split(':')[0], time.split(':')[1]);
          return (
            transactionDate.getDate() === currentDate.getDate() &&
            transactionDate.getMonth() === currentDate.getMonth() &&
            transactionDate.getFullYear() === currentDate.getFullYear()
          );
        });
      case 'week':
        // Keep only the transactions that were made this WEEK
        return transactions.filter(t => {
          // Convert the date and time in the t object to a valid format
          const [date, time] = t.date.split(' - ');
          const transactionDate = new Date(date.split('-')[2], date.split('-')[1] - 1, date.split('-')[0], time.split(':')[0], time.split(':')[1]);
          return (
            transactionDate.getTime() >= currentDate.getTime() - 7 * 24 * 60 * 60 * 1000 &&
            transactionDate.getTime() < currentDate.getTime()
          );
        });
      case 'month':
        // Keep only the transactions that were made this MONTH 
        return transactions.filter(t => {
          // Convert the date and time in the t object to a valid format
          const [date, time] = t.date.split(' - ');
          const transactionDate = new Date(date.split('-')[2], date.split('-')[1] - 1, date.split('-')[0], time.split(':')[0], time.split(':')[1]);
          return (
            transactionDate.getMonth() === currentDate.getMonth() &&
            transactionDate.getFullYear() === currentDate.getFullYear()
          );
        });
      default:
        // Keep all the transactions
        return transactions;
    }
  };






  // Define a function that filters the transactions based on the channel filter value
  const filterByCanal = (transactions, canalFilter) => {
    // Filter the transactions based on the canal filter value
    switch (canalFilter) {
      case 'datafono':
        // Keep only the transactions made through the datafono channel
        return transactions.filter(t => t.canal === 'datafono');
      case 'link':
        // Keep only the transactions made through the link channel
        return transactions.filter(t => t.canal === 'link');
      default:
        // Keep all the transactions
        return transactions;
    }
  };

  // Apply the filters whenever the filter values change
  useEffect(() => {
    // Apply the filters to the transactions list
    const filtered = filterByCanal(filterByDate(data, dateFilter), canalFilter);
    // Update the state with the filtered transactions
    setFilteredTransactions(filtered);
  }, [dateFilter, canalFilter]);

  
  return {filteredTransactions, setDateFilter, setCanalFilter, dateFilter}
}

export default useReports