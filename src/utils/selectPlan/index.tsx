import Button from "../../components/button";
import Card from "../../components/card";
import Image from '../../assets/icon-arcade.svg';
import Image2 from '../../assets/icon-advanced.svg';
import Image3 from '../../assets/icon-pro.svg';
import Checkbox from "../../components/checkbox";



export default function SelectPlan() {
  return (
    <div className="select-plan-container main-items-container">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="cards-container">
        <Card img={Image} title="Arcade" price="$9/mo" />
        <Card img={Image2} title="Advanced" price="$12/mo" />
        <Card img={Image3} title="Pro" price="$15/mo" />
      </div>
      <div className="checkboxs-container">
        <Checkbox />
      </div>
      <div className="btn-container btn-wrapper">
        <Button text="Go Back" className="back-button" router="/" />
        <Button text="Next Step" className="next-button" router="step3" />
      </div>
    </div>
  );
}
