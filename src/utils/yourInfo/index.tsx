import Button from "../../components/button";
import Input from "../../components/input";



export default function YourInfo() {
  return (
    <div className="your-info-container main-items-container ">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="inputs-container">
        <Input type="text" placeholder="e.g. Stephen King" label="Name" />
        <Input type="email" placeholder="e.g. stephenking@lorem.com" label="Email Address" />
        <Input type="number" placeholder="e.g. +1 234 567 890" label="Phone Number" />
      </div>
      <div className="btn-container">
        <Button text="Next Step" className="next-button" router="step2"  />
      </div>
    </div>
  );
}
