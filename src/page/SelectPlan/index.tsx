
import Menu from "../../utils/menu";
import SelectPlan from "../../utils/selectPlan";

export default function Step2() {
  return (
    <div className="container">
      <Menu />
      <div className="main-container">
        <SelectPlan />
      </div>
    </div>
  );
}
