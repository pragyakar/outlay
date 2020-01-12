import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

import History from './History';
import Welcome from './Welcome';
import RecentStatistics from './Statistics/RecentStatistics';
import TopStatistics from './Statistics/TopStatistics';
import Report from './Report';
import LogoBox from './LogoBox';
import AddButton from './AddButton';
import Loader from '../UI/Loader';
import ReportButton from './ReportButton/ReportButton';

const Dashboard = (props) => {

  const { user, expenses } = props;

  return (
    <div className="main-container">
    {expenses ? 
      <div className="records-container">
        <div className="header-container">
          <div className="logo-wrapper">
            <LogoBox />
          </div>
          <div className="welcome-wrapper grid-side">
            <Welcome user={user} />
          </div>
          <div className="buttons-wrapper">
            <AddButton />
            <ReportButton />
          </div>
        </div>
        
        <div className="grid-wrapper">
          <div className="grid-1 grid-table">
            <History expenses={expenses} />
          </div>
          <div className="grid-2 grid-side">
            <RecentStatistics expenses={expenses} />
          </div>
          <div className="grid-3 grid-side">
            <TopStatistics expenses={expenses} />
          </div>
          <div className="grid-4 grid-side">
            <Report expenses={expenses} />
          </div>
        </div>
      </div>
    : <Loader />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expense.expenses
    // expenses: state.firestore.ordered.expenses
  }
}

export default connect(mapStateToProps)(Dashboard);
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { 
//       collection: 'expenses', 
//       limit: 30,
//       orderBy: 'timestamp'
//     }
//   ])
// )(Dashboard);