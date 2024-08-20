import Button from "../../components/button";



export default function Summary() {
  return (
    <div className="summary-container main-items-container">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="result-container">
        <div className="Arcade-result">
          <div>
            <h2>Arcade (Monthly)</h2>
            <a href="/">Change</a>
          </div>
          <span>$9/mo</span>
        </div>
        <hr />
        <div className="result-info">
          Online service <span>+$1/mo</span>
        </div>
        <div className="result-info">
          Larger storage <span>+$2/mo</span>
        </div>
      </div>
      <div className="result-total result-info">
        <h3>Total (per month)</h3> <span>+$12/mo</span>
      </div>
      <div className="btn-container btn-wrapper">
        <Button text="Go Back" className="back-button" router="/" />
        <Button text="Confirm" className="confirm-button next-button" router="step5"  />
      </div>
    </div>
  );
}
