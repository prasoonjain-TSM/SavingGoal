import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyForm() {
  return (
    <form className="p-3">

  <div className="form-group">
    <label htmlFor="taskName">Task Name</label>
    <input type="text" className="form-control form-control-sm" id="taskName" placeholder="Enter task name" />
  </div>


  <div className="form-group">
    <label htmlFor="totalAmount">Total Amount</label>
    <input type="number" className="form-control form-control-sm" id="totalAmount" placeholder="Enter amount" />
  </div>

  <div className="form-group">
    <label>Frequency</label>
    <div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="frequency" id="monthly" value="month" />
        <label className="form-check-label" htmlFor="monthly">Month</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="frequency" id="weekly" value="week" />
        <label className="form-check-label" htmlFor="weekly">Week</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="frequency" id="yearly" value="year" />
        <label className="form-check-label" htmlFor="yearly">Year</label>
      </div>
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="reachDate">Reach Date</label>
    <input type="date" className="form-control form-control-sm" id="reachDate" />
  </div>


  <div className="form-group">
    <label htmlFor="interestRate">Interest Rate (%)</label>
    <input type="number" className="form-control form-control-sm" id="interestRate" placeholder="Enter interest rate" />
  </div>
  
  <button type="submit" className="btn btn-primary mt-2">Confirm</button>
</form>

  );
}

export default MyForm;
