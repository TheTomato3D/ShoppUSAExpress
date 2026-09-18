function ServiceCard({ icon, title, description, buttonText }) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="service-button">
        {buttonText}
      </button>
    </article>
  )
}

export default ServiceCard