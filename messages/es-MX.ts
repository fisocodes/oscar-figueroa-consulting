import { Site } from './interfaces/Site'

const site: Site = {
  home: {
    heroHeader: {
      items: [
        {
          title: 'Ingeniero De Software',
          description: 'Desarrollando sitios web y aplicaciones robustas, escalables y preparadas para el futuro desde 2023'
        },
        {
          title: 'Desarrollo Web',
          description: 'Creando sitios web responsivos, intuitivos, con diseño moderno y funcionalidad impecable'
        },
        {
          title: 'Optimización para motores de búsqueda',
          description: 'Impulsando la visibilidad en buscadores y el tráfico orgánico mediante una optimización estratégica basada en datos'
        },
        {
          title: 'Correos electrónicos profesionales',
          description: 'Creación de correos electrónicos impactantes que convierten — ya sea para prospección, marketing o comunicación interna'
        },
        {
          title: 'Soporte multilingüe',
          description: 'Ampliando tu alcance digital a través de culturas e idiomas con soluciones escalables y listas para el mercado global'
        },
        {
          title: 'Consultoría',
          description: 'Orientación a negocios con asesoría personalizada, conocimientos técnicos y planificación estratégica'
        }
      ]
    },
    collaborations: {
      items: [{
        alt: 'Advancio logo',
        imageSrc: '/assets/advancio.svg',
        description: 'Soluciones de software para el mercado americano',
        url: 'https://www.advancio.com/'
      },
      {
        alt: 'Enologia Integral logo',
        imageSrc: '/assets/enologia-integral.svg',
        description: 'PWAs para el mercado vitivinícola en Baja California',
        url: 'https://enologiaintegral.com.mx/'
      },
      {
        alt: 'MT3 logo',
        imageSrc: '/assets/mt3.svg',
        description: 'Soluciones de software para el mercado Sueco',
        url: 'https://mt3.se/'
      }]
    },
    testimonials: {
      items: [
        {
          firtName: 'Eugenio',
          lastName: 'Verdugo',
          role: 'Project Manager',
          linkedIn: 'https://www.linkedin.com/in/euveos/',
          quote: 'Oscar es un individuo comprometido y bastante capaz. Adquiere conocimiento rápido y lo aplica no solo con destreza sino con la intención de optimizar y mejorar sus propios procesos y habilidades. Habiendo trabajado con él, puedo decir que algunas de sus habilidades más fuertes son el compañerismo, la dedicación, la curiosidad y el esfuerzo.'
        }
      ]
    }
  }
}

export default site
