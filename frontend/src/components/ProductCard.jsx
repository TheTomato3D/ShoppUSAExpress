function ProductCard({
  image,
  category,
  name,
  price,
}) {
  return (
    <article className="catalog-product-card">

      <div className="catalog-product-image">

        <img
          src={image}
          alt={name}
        />

      </div>

      <div className="catalog-product-info">

        <span>
          {category}
        </span>

        <h3>
          {name}
        </h3>

        <div className="catalog-product-bottom">

          <strong>
            {price}
          </strong>

          <button>
            +
          </button>

        </div>

      </div>

    </article>
  )
}

export default ProductCard