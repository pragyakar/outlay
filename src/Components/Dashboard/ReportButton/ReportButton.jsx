import React, { useState } from 'react';
import MonthlyReport from '../../MonthlyReport/MonthlyReport';

const ReportButton = () => {

  const [reportVisibility, setModalVisibility] = useState(false);
  const [reportData, setReportData] = useState([]);

  const toggleReportModal = () => {
    setModalVisibility(!reportVisibility);
  }

  const fetchAllData = () => {

  }

  return (
    <>
      <div className="buttons-container" onClick={toggleReportModal}>
        <div className="button">
          <p className="button-text">View Full Report</p>
        </div>
      </div>
      { reportVisibility && 
        <MonthlyReport closeModal={toggleReportModal} />
      }
    </>
  );
}

export default ReportButton;