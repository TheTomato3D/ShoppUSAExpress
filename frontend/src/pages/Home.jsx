import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import CatalogCard from '../components/CatalogCard'
import mayoristaImg from '../assets/mayorista.jpg'
import caja200Img from '../assets/caja200.jpg'
import tiendaImg from '../assets/tienda.jpg'
import nosotrosImg from '../assets/nosotros.jpg'



function Home() {

 const countries = [
    { name: 'Perú', flag: 'https://flagcdn.com/w80/pe.png' },
    { name: 'Colombia', flag: 'https://flagcdn.com/w80/co.png' },
    { name: 'Ecuador', flag: 'https://flagcdn.com/w80/ec.png' },
    { name: 'Bolivia', flag: 'https://flagcdn.com/w80/bo.png' },
    { name: 'Argentina', flag: 'https://flagcdn.com/w80/ar.png' },
    { name: 'Chile', flag: 'https://flagcdn.com/w80/cl.png' },
    { name: 'Costa Rica', flag: 'https://flagcdn.com/w80/cr.png' },
    { name: 'México', flag: 'https://flagcdn.com/w80/mx.png' },
    { name: 'Brasil', flag: 'https://flagcdn.com/w80/br.png' },
    { name: 'República Dominicana', flag: 'https://flagcdn.com/w80/do.png' },
    { name: 'Puerto Rico', flag: 'https://flagcdn.com/w80/pr.png' },
    { name: 'Venezuela', flag: 'https://flagcdn.com/w80/ve.png' },
 ]

  const services = [
    {
      icon: '📦',
      title: 'Mayorista',
      description:
        'Compra productos por volumen desde Estados Unidos y encuentra nuevas oportunidades para tu negocio.',
      buttonText: 'Conocer más',
    },
    {
      icon: '🛍️',
      title: 'Caja $200',
      description:
        'Una alternativa práctica para realizar compras seleccionadas desde Estados Unidos.',
      buttonText: 'Conocer más',
    },
    {
      icon: '🇺🇸',
      title: 'Tienda Virtual',
      description:
        'Explora nuestra selección de productos disponibles directamente desde nuestra tienda.',
      buttonText: 'Ver productos',
    },
  ]

  const products = [
    {
      id: 1,
      name: 'Producto destacado',
      category: 'Moda',
      price: '$29.99',
    },
    {
      id: 2,
      name: 'Producto destacado',
      category: 'Accesorios',
      price: '$39.99',
    },
    {
      id: 3,
      name: 'Producto destacado',
      category: 'Hogar',
      price: '$24.99',
    },
    {
      id: 4,
      name: 'Producto destacado',
      category: 'Tecnología',
      price: '$49.99',
    },
  ]

  return (
    <main>

      {/* =========================================
          HERO
      ========================================== */}

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span>Tu puente de compras</span>
              <div className="hero-eyebrow-line"></div>
            </div>

            <h1>
            SHOPPING{' '}
            <span className="usa-u">U</span>
            <span className="usa-s">S</span>
            <span className="usa-a">A</span> &
            <br />
            COURIER EXPRESS
            </h1>

            <p className="hero-description">
              Compra en Estados Unidos. Nosotros nos encargamos del resto.
            </p>

            {/* BANDERAS */}

            <div className="country-list">
            {countries.map((country) => (
                <div className="country-item" key={country.name}>
                <img
                    src={country.flag}
                    alt={`Bandera de ${country.name}`}
                />

                <div className="country-tooltip">
                    {country.name}
                </div>
                </div>
            ))}
            </div>

            {/* BOTONES */}

            <div className="hero-actions">

              <Link
                to="/productos"
                className="hero-primary-button"
              >
                Ver productos
                <span>→</span>
              </Link>

              <a
                href="#servicios"
                className="hero-secondary-button"
              >
                <span className="play-button">▶</span>
                Conoce más
              </a>

            </div>

          </div>

        </div>

        {/* INDICADOR SCROLL */}

        <a href="#servicios" className="scroll-indicator">

          <div className="mouse">
            <div className="mouse-wheel"></div>
          </div>

          <span>DESLIZA HACIA ABAJO</span>

          <div className="scroll-line"></div>

        </a>

        <div className="hero-bottom-shape"></div>

      </section>


        {/* =========================
        CATÁLOGOS
    ========================== */}

    <section
    className="catalogs-home section"
    id="productos"
    >

    <div className="section-container">

        <div className="section-heading">

        <span>Catálogos</span>

        <h2>
            Encuentra la opción ideal para tu compra
        </h2>

        <p>
            Explora nuestros catálogos y elige la modalidad
            que mejor se adapte a lo que estás buscando.
        </p>

        </div>


        <div className="catalogs-grid">

        <CatalogCard
            image={mayoristaImg}
            label="Compras por volumen"
            title="Mayorista"
            description="Encuentra productos para compras por volumen y nuevas oportunidades para tu negocio."
            link="/catalogos/mayorista"
        />
        <CatalogCard
            image={caja200Img}
            label="Arma tu selección"
            title="Caja $200"
            description="Selecciona tus productos favoritos y arma una caja adaptada a esta modalidad de compra."
            link="/catalogos/caja-200"
        />

        <CatalogCard
            image={tiendaImg}
            label="Compra online"
            title="Tienda Virtual"
            description="Explora nuestros productos disponibles y encuentra lo que buscas directamente en nuestra tienda."
            link="/catalogos/tienda"
        />

        </div>

    </div>

    </section>


      {/* =========================================
          COMO FUNCIONA
      ========================================== */}

      <section
        className="how-it-works section"
        id="como-funciona"
      >

        <div className="section-container">

          <div className="section-heading">

            <span>Proceso</span>

            <h2>
              ¿Cómo funciona?
            </h2>

            <p>
              Desde tu compra hasta la recepción de tus productos.
            </p>

          </div>


          <div className="steps-grid">

            <div className="step">

              <div className="step-number">
                01
              </div>

              <h3>Elige</h3>

              <p>
                Encuentra los productos o la modalidad
                de compra que necesitas.
              </p>

            </div>


            <div className="step">

              <div className="step-number">
                02
              </div>

              <h3>Compra</h3>

              <p>
                Realiza tu solicitud y coordina los
                detalles de tu compra.
              </p>

            </div>


            <div className="step">

              <div className="step-number">
                03
              </div>

              <h3>Recibimos</h3>

              <p>
                Tus productos son recibidos y preparados
                en Estados Unidos.
              </p>

            </div>


            <div className="step">

              <div className="step-number">
                04
              </div>

              <h3>Recibe</h3>

              <p>
                Coordinamos el proceso para que puedas
                recibir tu compra.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* =========================================
          NOSOTROS
      ========================================== */}

      <section className="about-home section">

        <div className="section-container about-home-container">

          <div className="about-visual">

            <div className="about-image-placeholder">

            <img
                src={nosotrosImg}
                alt="Shopping USA Express"
                className="about-image"
            />

            </div>

          </div>


          <div className="about-content">

            <span className="section-label">
              Nosotros
            </span>

            <h2>
              Acercamos tus compras de Estados Unidos
            </h2>

            <p>
              En Shopping USA Express simplificamos tus 
              compras en Estados Unidos. Somos una 
              compañía familiar que entiende lo 
              importante que es recibir tus pedidos de 
              forma segura, rápida y sin complicaciones.
            </p>

            <p>
              Brindamos un servicio completo de buzón 
              internacional con dirección exclusiva en 
              Miami, consolidación de paquetes, empaque 
              y gestión aduanera para la entrega puerta 
              a puerta. Nos mueve la confianza, la 
              claridad y el compromiso de acompañarte en 
              cada envío, porque tu tranquilidad es 
              nuestra prioridad.
            </p>


            <div className="mission-vision">

              <div>

                <h3>Misión</h3>

                <p>
                  Conectar a nuestros clientes con 
                  las mejores tiendas de Estados 
                  Unidos a través de un servicio de 
                  buzón internacional personalizado, 
                  simple y transparente. Brindar 
                  soluciones de envío internacional 
                  seguras, accesibles y confiables 
                  para ti
                </p>

              </div>


              <div>

                <h3>Visión</h3>

                <p>
                  Ser el socio de envíos internacionales más 
                  confiable y cercano, nuestra visión es 
                  entregar un trabajo ordenado, nos regimos 
                  en la calidad no en la cantidad trabajando 
                  de forma segura, eficiente y sin 
                  complicaciones para nuestros clientes.
                </p>

              </div>

            </div>


            <Link
              to="/nosotros"
              className="text-link"
            >
              Conoce más sobre nosotros →
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================== */}

      <section className="home-cta">

        <div className="home-cta-container">

          <div>

            <span>
              ShoppUSAExpress
            </span>

            <h2>
              ¿Listo para encontrar tu próxima compra?
            </h2>

            <p>
              Explora nuestros productos y descubre
              nuestras opciones.
            </p>

          </div>


          <Link
            to="/productos"
            className="cta-button"
          >
            Ver productos
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Home