import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import moment from 'moment';

import Modal from '../UI/Modal';
import MonthlyReportGraph from './MonthlyReportGraph';
import Loader from '../UI/Loader';

const formatGraphData = (expenses) => {
  let data = [
    {
      "month": "January",
      "expense": 0,
    },
    {
      "month": "February",
      "expense": 0,
    },
    {
      "month": "March",
      "expense": 0,
    },
    {
      "month": "April",
      "expense": 0,
    },
    {
      "month": "May",
      "expense": 0,
  
    },
    {
      "month": "June",
      "expense": 0,
  
    },
    {
      "month": "July",
      "expense": 0,
    },
    {
      "month": "August",
      "expense": 0,
    },
    {
      "month": "September",
      "expense": 0,
    },
    {
      "month": "October",
      "expense": 0,
    },
    {
      "month": "November",
      "expense": 0,
    },
    {
      "month": "December",
      "expense": 0,
    },

  ]
  expenses.map((expense) => {
    const month = moment(+expense.timestamp).format('MMMM');
    data.map((data) => {
      if (month === data.month) {
        data.expense += +(expense.amount)
      }
    });
  });
  return data;
}

const MonthlyReport = (props) => {

  const { expenses } = props;
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (expenses) {
      setReportData(formatGraphData(expenses));
      setLoading(false);
    }
  }, [expenses]);

  return (
    <>
    { reportData && !loading ?
      <Modal>
        <div className="report-modal">
          <p className="modal-close" onClick={props.closeModal}>❌</p>
          <p className="report-modal-title">Monthly Report for 2020</p>
          <div className="monthly-report-container">
            <MonthlyReportGraph data={reportData} />
          </div>
        </div>
      </Modal>
      : <Loader />
    }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expense.expenses
    // expenses: state.firestore.ordered.expenses
  }
}

export default connect(mapStateToProps)(MonthlyReport);
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { 
//       collection: 'expenses',
//       orderBy: 'timestamp'
//     }
//   ])
// )(MonthlyReport); 