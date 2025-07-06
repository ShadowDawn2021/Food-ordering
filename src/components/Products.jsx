export default function Products({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
}) {
  return (
    <article>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>Price: {price}</p>
        <p>{description}</p>
      </div>
      <p>
        <button onClick={onAddToCart(id)}></button>
      </p>
    </article>
  );
}
