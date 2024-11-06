import React from 'react';
import './FinancialGoalSummary.css'; 

const FinancialGoalSummary = ({ totalAmount, depositAmount, timeLeft, frequency }) => {
  const depositLabel = frequency === 'month' ? 'Monthly Deposit Required:' :
                       frequency === 'week' ? 'Weekly Deposit Required:' :
                       'Yearly Deposit Required:';

  return (
    <div>
      <h4>Financial Goal Summary</h4>
      <p><strong>Total Amount:</strong> ${totalAmount}</p>
      <p><strong>{depositLabel}</strong> ${depositAmount.toFixed(2)}</p>
      <p><strong>Time Left:</strong> {timeLeft}</p>
    </div>
  );
};

export default FinancialGoalSummary;
