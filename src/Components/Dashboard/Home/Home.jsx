import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import appConstants from '../../../configs/appConstants';

import RecentExpenses from './RecentExpenses';
import TopStats from './TopStats';

const Home = (props) => {
  
  const allExpenses = props.expenses;
  const someExpenses = allExpenses && allExpenses.slice(0, appConstants.RECENT_EXPENSES_COUNT);

  return (
    <Fragment>
      <div className="left-container">
        <TopStats />  
        <div className="graph-container">
          <div className="container">
          </div>
        </div>
      </div>
      <div className="right-container">
        <RecentExpenses expenses={someExpenses}/>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expense.expenses
    // expenses: state.firestore.ordered.expenses
  }
}

export default connect(mapStateToProps)(Home);
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { 
//       collection: 'expenses', 
//       limit: 50,
//       orderBy: ['timestamp', 'desc']
//     }
//   ])
// )(Home);