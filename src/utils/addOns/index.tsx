import Button from "../../components/button";
import RadioInput from "../../components/radio-input";



export default function AddOns() {
  return (
    <div className="addons-container main-items-container">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="addons-list">
      <RadioInput
          title="Online service"
          paragraf="Access to multiplayer games"
          price="+$1/mo"
        />
        <RadioInput
          title="Larger storage"
          paragraf="Extra 1TB of cloud save"
          price="+$2/mo"
        />
        <RadioInput
          title="Customizable profile"
          paragraf="Custom theme on your profile"
          price="+$2/mo"
        />      </div>
      <div className="btn-container btn-wrapper">
        <Button text="Go Back" className="back-button" router="/" />
        <Button text="Next Step" className="next-button" router="/step4" />
      </div>
    </div>
  );
}
