import ProductCard from '../components/ProductCard'

function Box200() {

  const products = [
    {
      id: 1,
      name: 'Producto Caja 01',
      category: 'Moda',
      price: '$25.00',
      image: '/productos/producto-1.jpg',
    },
    {
      id: 2,
      name: 'Producto Caja 02',
      category: 'Belleza',
      price: '$18.00',
      image: '/productos/producto-2.jpg',
    },
    {
      id: 3,
      name: 'Producto Caja 03',
      category: 'Accesorios',
      price: '$32.00',
      image: '/productos/producto-3.jpg',
    },
    {
      id: 4,
      name: 'Producto Caja 04',
      category: 'Hogar',
      price: '$15.00',
      image: '/productos/producto-4.jpg',
    },
  ]

  return (
    <main className="catalog-page">

      <section className="catalog-hero">

        <div className="catalog-hero-content">

          <span>ShoppUSAExpress</span>

          <h1>
            Caja $200
          </h1>

          <p>
            Explora productos y arma tu selección
            de acuerdo con nuestra modalidad Caja $200.
          </p>

        </div>

      </section>


      <section className="catalog-products-section">

        <div className="section-container">

          <div className="catalog-toolbar">

            <div>

              <span className="catalog-small-label">
                Caja $200
              </span>

              <h2>
                Arma tu selección
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
            <button>Accesorios</button>
            <button>Belleza</button>
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

export default Box200