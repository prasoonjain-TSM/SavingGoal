import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FinancialGoalSummary() {
  return (
    <div className="p-4 m-auto">
    <hr />
    <h5>Financial Goal Summary</h5>
    <hr />
    <p><strong>Future Value of Your Financial Goal:</strong> $500</p>
    <hr />
    <p><strong>Future Value of Existing Investment:</strong> $500</p>
    <hr />
    <p><strong>Monthly Investment Needed:</strong> $500</p>
    <hr />
  </div>
  );
}

export default FinancialGoalSummary;