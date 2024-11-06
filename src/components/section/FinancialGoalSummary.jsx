import React from 'react';
import './FinancialGoalSummary.css'; 

const FinancialGoalSummary = ({ totalAmount, depositAmount, timeLeft, frequency, annualInterest}) => {
  const depositLabel = frequency === 'month' ? 'Monthly Deposit Required:' :
                       frequency === 'week' ? 'Weekly Deposit Required:' :
                       'Yearly Deposit Required:';

  return (
    <div>
      <h4 className="text-secondary">Financial Goal Summary</h4>
      <hr />
      <p><strong className="text-secondary">Total Amount:</strong> ${totalAmount}</p>
      <p><strong className="text-secondary">{depositLabel}</strong> ${depositAmount.toFixed(2)}</p>
      <p><strong className="text-secondary">Time Left:</strong> {timeLeft}</p>
      <p><strong className="text-secondary">Annual Interest:</strong> ${annualInterest}</p> 
    </div>
  );
};

export default FinancialGoalSummary;
