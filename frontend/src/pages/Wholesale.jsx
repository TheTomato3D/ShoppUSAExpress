import ProductCard from '../components/ProductCard'

function Wholesale() {

  const products = [
    {
      id: 1,
      name: 'Producto Mayorista 01',
      category: 'Moda',
      price: '$25.00',
      image: '/productos/producto-1.jpg',
    },
    {
      id: 2,
      name: 'Producto Mayorista 02',
      category: 'Accesorios',
      price: '$32.00',
      image: '/productos/producto-2.jpg',
    },
    {
      id: 3,
      name: 'Producto Mayorista 03',
      category: 'Hogar',
      price: '$18.00',
      image: '/productos/producto-3.jpg',
    },
    {
      id: 4,
      name: 'Producto Mayorista 04',
      category: 'Moda',
      price: '$40.00',
      image: '/productos/producto-4.jpg',
    },
  ]

  return (
    <main className="catalog-page">

      <section className="catalog-hero">

        <div className="catalog-hero-content">

          <span>ShoppUSAExpress</span>

          <h1>
            Catálogo Mayorista
          </h1>

          <p>
            Productos seleccionados para compras por
            volumen y oportunidades de negocio.
          </p>

        </div>

      </section>


      <section className="catalog-products-section">

        <div className="section-container">

          <div className="catalog-toolbar">

            <div>
              <span className="catalog-small-label">
                Mayorista
              </span>

              <h2>
                Explora nuestros productos
              </h2>
            </div>


            <div className="catalog-search">

              <input
                type="text"
                placeholder="Buscar producto..."
              />

            </div>

          </div>


          <div className="catalog-filters">

            <button className="active">Todos</button>
            <button>Moda</button>
            <button>Calzado</button>
            <button>Accesorios</button>
            <button>Hogar</button>

          </div>


          <div className="catalog-products-grid">

            {products.map((product) => (

              <ProductCard
                key={product.id}
                {...product}
              />

            ))}

          </div>

        </div>

      </section>

    </main>
  )
}

export default Wholesale