import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  className: string;
  router: string;
}

export default function Button({ text, className, router }: ButtonProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(router.startsWith('/') ? router : `/${router}`);
  };

  return (
    <button className={className} onClick={handleNavigate}>
      {text}
    </button>
  );
}
