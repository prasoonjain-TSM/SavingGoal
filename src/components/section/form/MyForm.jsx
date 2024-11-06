import React, { useState, useRef, useEffect } from 'react';
import FinancialGoalSummary from '../FinancialGoalSummary';

function MyForm() {
  const [taskName, setTaskName] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [frequency, setFrequency] = useState('month');
  const [reachDate, setReachDate] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [message, setMessage] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const [currentAmount, setCurrentAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [leftAmountToComplete, setLeftAmountToComplete] = useState(0);
  const [timeLeft, setTimeLeft] = useState('');
  const [startDate, setStartDate] = useState(''); 
  const [annualInterest, setAnnualInterest] = useState(0); 

  const summaryRef = useRef(null);

  const calculateSummary = () => {
    const amountLeft = totalAmount - currentAmount;
    setLeftAmountToComplete(amountLeft);
    setTotalAmount(amountLeft);

    const targetDate = new Date(reachDate);
    const currentDate = new Date();

    const monthsLeft = (targetDate.getFullYear() - currentDate.getFullYear()) * 12 + (targetDate.getMonth() - currentDate.getMonth());
    setTimeLeft(`${monthsLeft}  months`);

    let requiredDeposit = 0;
    if (frequency === 'month') {
      requiredDeposit = amountLeft / monthsLeft;
    } else if (frequency === 'week') {
      requiredDeposit = amountLeft / (monthsLeft * 4);
    } else if (frequency === 'year') {
      requiredDeposit = amountLeft / (monthsLeft / 12);
    }

    setDepositAmount(requiredDeposit);
    const calculatedAnnualInterest = requiredDeposit * (interestRate / 100) * 12;
    setAnnualInterest(calculatedAnnualInterest);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().split('T')[0]; 
    setStartDate(currentDate);  

    const newTask = {
      id: Date.now(),
      taskName,
      totalAmount: Number(totalAmount),
      frequency,
      reachDate,
      interestRate,
      currentAmount,
      startDate: currentDate,
    };

    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));

    setMessage('Task added successfully!');

    setTaskName('');
    setTotalAmount('');
    setFrequency('month');
    setReachDate('');
    setInterestRate('');

    calculateSummary();
    setShowSummary(true);
  };

  useEffect(() => {
    if (showSummary) {
      summaryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showSummary]);

  return (
    <div className="container mt-4">
      <h3 className="text-secondary">Add Goals</h3>
      {message && <div className="alert alert-success">{message}</div>}
      <form onSubmit={handleSubmit} className="p-3">
        <div className="form-group text-secondary">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter goal name"
          />
        </div>

        <div className="form-group text-secondary">
          <label htmlFor="totalAmount">Total Amount</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            placeholder="Enter saving amount"
          />
        </div>

        <div className="form-group text-secondary">
          <label>Frequency</label>
          <div>
            <div className="form-check form-check-inline ">
              <input
                className="form-check-input "
                type="radio"
                name="frequency"
                id="monthly"
                value="month"
                checked={frequency === 'month'}
                onChange={(e) => setFrequency(e.target.value)}
              />
              <label className="form-check-label " htmlFor="monthly">Month</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="frequency"
                id="weekly"
                value="week"
                checked={frequency === 'week'}
                onChange={(e) => setFrequency(e.target.value)}
              />
              <label className="form-check-label" htmlFor="weekly">Week</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="frequency"
                id="yearly"
                value="year"
                checked={frequency === 'year'}
                onChange={(e) => setFrequency(e.target.value)}
              />
              <label className="form-check-label" htmlFor="yearly">Year</label>
            </div>
          </div>
        </div>

        <div className="form-group text-secondary">
          <label htmlFor="reachDate">Reach Date</label>
          <input
            type="date"
            className="form-control form-control-sm text-secondary"
            id="reachDate"
            value={reachDate}
            onChange={(e) => setReachDate(e.target.value)}
          />
        </div>

        <div className="form-group text-secondary">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn bg-info text-secondary mt-2">Confirm</button>
        </div>
      </form>

      {showSummary && (
        <div ref={summaryRef} className="mt-4">
          <FinancialGoalSummary
            totalAmount={totalAmount}
            depositAmount={depositAmount}
            leftAmountToComplete={leftAmountToComplete}
            timeLeft={timeLeft}
            annualInterest={annualInterest} 
            frequency={frequency} 
          />
        </div>
      )}
    </div>
  );
}

export default MyForm;
