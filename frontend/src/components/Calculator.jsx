import React from 'react';

function Calculator({ num1, num2, frontendResult, backendResult, handleNum1Change, handleNum2Change, handleSubmit }) {
  return (
    <div className="container mt-5">
      <h2>Calculator</h2>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <label>Enter First Number:</label>
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                value={num1}
                onChange={handleNum1Change}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label>Enter Second Number:</label>
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                value={num2}
                onChange={handleNum2Change}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <button className="btn btn-primary mb-3" onClick={handleSubmit}>Submit</button>
          <h4>Your Addition Result (from server) is: {backendResult && <span> {backendResult}</span>}</h4>
          <h4>Your Addition Result (from ReactJS) is: {frontendResult && <span> {frontendResult}</span>}</h4>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
