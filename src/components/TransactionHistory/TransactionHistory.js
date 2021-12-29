import s from 'components/TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({transactions}) {
  
  return (
    <table className={s.transaction__history}>
      <thead>
        <tr className={s.hrow}>
          <th className={s.hcol}>Type</th>
          <th className={s.hcol}>Amount</th>
          <th className={s.hcol}>Currency</th>
        </tr>
      </thead>
      <tbody >
        {transactions.map(({ id, type, amount, currency }) => {
          return <tr className={s.brow} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
  
        })}
      </tbody>
    </table>
  );
};
PropTypes.TransactionHistory = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TransactionHistory;