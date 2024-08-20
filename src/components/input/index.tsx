
interface InputProps {
  type: string;
  placeholder: string;
  label: string;
}

export default function Input({ type, placeholder, label }: InputProps) {
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={placeholder} />
    </div>
  );
}
