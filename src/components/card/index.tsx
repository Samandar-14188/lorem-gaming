

interface CardProps {
img:string,
title:string,
price:string
}
export default function Card({img, title, price}:CardProps) {
  return (
    <div className="card-container">
        <img src={img} alt="rasm" />
        <h2>{title}</h2>
        <p>{price}</p>
    </div>
  )
}
