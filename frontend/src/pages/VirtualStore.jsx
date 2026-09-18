import ProductCard from '../components/ProductCard'

function VirtualStore() {

  const products = [
    {
      id: 1,
      name: 'Producto Tienda 01',
      category: 'Moda',
      price: '$29.99',
      image: '/productos/producto-1.jpg',
    },
    {
      id: 2,
      name: 'Producto Tienda 02',
      category: 'Tecnología',
      price: '$39.99',
      image: '/productos/producto-2.jpg',
    },
    {
      id: 3,
      name: 'Producto Tienda 03',
      category: 'Hogar',
      price: '$24.99',
      image: '/productos/producto-3.jpg',
    },
    {
      id: 4,
      name: 'Producto Tienda 04',
      category: 'Accesorios',
      price: '$49.99',
      image: '/productos/producto-4.jpg',
    },
  ]

  return (
    <main className="catalog-page">

      <section className="catalog-hero">

        <div className="catalog-hero-content">

          <span>ShoppUSAExpress</span>

          <h1>
            Tienda Virtual
          </h1>

          <p>
            Explora nuestros productos disponibles
            y encuentra tu próxima compra.
          </p>

        </div>

      </section>


      <section className="catalog-products-section">

        <div className="section-container">

          <div className="catalog-toolbar">

            <div>

              <span className="catalog-small-label">
                Tienda
              </span>

              <h2>
                Todos los productos
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
            <button>Tecnología</button>
            <button>Hogar</button>
            <button>Accesorios</button>

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

export default VirtualStore