import Checkbox from "@mui/material/Checkbox";

interface RadioInputProps {
  title: string;
  paragraf: string;
  price: string;
}
export default function RadioInput({
  title,
  paragraf,
  price,
}: RadioInputProps) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="checkbox-card">
      <Checkbox {...label} />
      <label>
        <span>{title}</span>
        <p>{paragraf}</p>
      </label>
      <span className="price-chexkbox">{price}</span>
    </div>
  );
}
