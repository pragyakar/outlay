import React from 'react';
import Modal from '../UI/Modal';

import { connect } from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import MonthlyReportGraph from './MonthlyReportGraph';

const data = [
  {
    "country": "AD",
    "hot dog": 17,
    "hot dogColor": "hsl(144, 70%, 50%)",
    "burger": 114,
    "burgerColor": "hsl(332, 70%, 50%)",
    "sandwich": 68,
    "sandwichColor": "hsl(258, 70%, 50%)",
    "kebab": 93,
    "kebabColor": "hsl(41, 70%, 50%)",
    "fries": 44,
    "friesColor": "hsl(39, 70%, 50%)",
    "donut": 44,
    "donutColor": "hsl(240, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 63,
    "hot dogColor": "hsl(151, 70%, 50%)",
    "burger": 39,
    "burgerColor": "hsl(216, 70%, 50%)",
    "sandwich": 1,
    "sandwichColor": "hsl(343, 70%, 50%)",
    "kebab": 109,
    "kebabColor": "hsl(306, 70%, 50%)",
    "fries": 129,
    "friesColor": "hsl(351, 70%, 50%)",
    "donut": 111,
    "donutColor": "hsl(353, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 164,
    "hot dogColor": "hsl(321, 70%, 50%)",
    "burger": 79,
    "burgerColor": "hsl(325, 70%, 50%)",
    "sandwich": 36,
    "sandwichColor": "hsl(246, 70%, 50%)",
    "kebab": 155,
    "kebabColor": "hsl(184, 70%, 50%)",
    "fries": 79,
    "friesColor": "hsl(175, 70%, 50%)",
    "donut": 150,
    "donutColor": "hsl(267, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 119,
    "hot dogColor": "hsl(168, 70%, 50%)",
    "burger": 87,
    "burgerColor": "hsl(313, 70%, 50%)",
    "sandwich": 56,
    "sandwichColor": "hsl(310, 70%, 50%)",
    "kebab": 14,
    "kebabColor": "hsl(73, 70%, 50%)",
    "fries": 104,
    "friesColor": "hsl(171, 70%, 50%)",
    "donut": 161,
    "donutColor": "hsl(76, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 182,
    "hot dogColor": "hsl(90, 70%, 50%)",
    "burger": 90,
    "burgerColor": "hsl(151, 70%, 50%)",
    "sandwich": 115,
    "sandwichColor": "hsl(162, 70%, 50%)",
    "kebab": 82,
    "kebabColor": "hsl(244, 70%, 50%)",
    "fries": 60,
    "friesColor": "hsl(59, 70%, 50%)",
    "donut": 138,
    "donutColor": "hsl(156, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 83,
    "hot dogColor": "hsl(249, 70%, 50%)",
    "burger": 70,
    "burgerColor": "hsl(206, 70%, 50%)",
    "sandwich": 185,
    "sandwichColor": "hsl(76, 70%, 50%)",
    "kebab": 91,
    "kebabColor": "hsl(359, 70%, 50%)",
    "fries": 152,
    "friesColor": "hsl(338, 70%, 50%)",
    "donut": 183,
    "donutColor": "hsl(51, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(288, 70%, 50%)",
    "burger": 88,
    "burgerColor": "hsl(278, 70%, 50%)",
    "sandwich": 165,
    "sandwichColor": "hsl(354, 70%, 50%)",
    "kebab": 153,
    "kebabColor": "hsl(133, 70%, 50%)",
    "fries": 106,
    "friesColor": "hsl(136, 70%, 50%)",
    "donut": 98,
    "donutColor": "hsl(172, 70%, 50%)"
  }
]

const MonthlyReport = (props) => {

  const { expenses } = props;

  return (
    
    <Modal>
      <div className="report-modal">
        <p className="modal-close" onClick={props.closeModal}>❌</p>
        <p className="report-modal-title">Monthly Report</p>
        <div className="monthly-report-container">
          <MonthlyReportGraph data={data} />
        </div>
      </div>
    </Modal>
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
// )(Dashboard); 