import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function CatalogCard({
  image,
  label,
  title,
  description,
  link,
}) {
  return (
    <article className="catalog-card">

      <Link to={link} className="catalog-card-image">
        <img src={image} alt={title} />

        <div className="catalog-card-overlay"></div>

        <span className="catalog-card-label">
          {label}
        </span>
      </Link>

      <div className="catalog-card-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <Link to={link} className="catalog-card-link">
          Ver catálogo
          <FaArrowRight />
        </Link>

      </div>

    </article>
  )
}

export default CatalogCard