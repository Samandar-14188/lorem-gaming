export default function Checkbox() {
  return (
    <div className="checkbox-container">
      <span className="label-before">Monthly</span>
      <input type="checkbox" id="toggle-checkbox" />
      <label htmlFor="toggle-checkbox" className="checkbox-label"></label>
      <span className="label-after">Yearly</span>
    </div>
  );
}
