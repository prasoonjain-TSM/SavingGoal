import React, { useEffect, useCallback } from 'react';

function getMonthDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();
  return yearDiff * 12 + monthDiff;
}

function AnnualInterestCalculator({ task, onInterestUpdate }) {
  const addAnnualInterest = useCallback(() => {
    const monthsElapsed = getMonthDifference(task.startDate, new Date());

    if (monthsElapsed > 0 && monthsElapsed % 12 === 0) {
      const annualInterest = (task.currentAmount * task.interestRate) / 100;
      const newAmount = task.currentAmount + annualInterest;
      onInterestUpdate(task.id, newAmount);
    }
  }, [task, onInterestUpdate]);

  useEffect(() => {
    addAnnualInterest();
  }, [addAnnualInterest]);

  return null; 
}

export default AnnualInterestCalculator;
