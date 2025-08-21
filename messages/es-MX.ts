import { Site } from './interfaces/Site'

const site: Site = {
  pages: {
    home: {
      metadata: {
        title: 'Fiso Codes - Ingeniero en Software',
        description: 'Ingeniero de software especializado en tecnologías web. Obtenga asesoramiento y servicios profesionales de TI para su negocio.',
        author: 'Oscar Figueroa, ingeniero en software y consultor'
      },
      sections: {
        hero: {
          title: 'Hero',
          items: [
            {
              headline: 'Ingeniero En Software',
              subheadline: 'Desarrollando sitios web y aplicaciones robustas, escalables y preparadas para el futuro desde 2023'
            },
            {
              headline: 'Desarrollo Web',
              subheadline: 'Creando sitios web responsivos, intuitivos, con diseño moderno y funcionalidad impecable'
            },
            {
              headline: 'SEO',
              subheadline: 'Impulsando la visibilidad en buscadores y el tráfico orgánico mediante una optimización estratégica basada en datos'
            },
            {
              headline: 'Correos electrónicos profesionales',
              subheadline: 'Creación de correos electrónicos impactantes que convierten — ya sea para prospección, marketing o comunicación interna'
            },
            {
              headline: 'Internacionalización',
              subheadline: 'Ampliando tu alcance digital a través de culturas e idiomas con soluciones escalables y listas para el mercado global'
            },
            {
              headline: 'Consultoría',
              subheadline: 'Orientación a negocios con asesoría personalizada, conocimientos técnicos y planificación estratégica'
            }
          ]
        },
        collaborations: {
          title: 'Colaboraciones',
          items: [
            {
              alt: 'Advancio logo',
              imageSrc: '/assets/advancio.svg',
              motto: 'Expertos de Microsoft, innovadores globales',
              description: 'Advancio es una potencia tecnológica global, especializada en soluciones impulsadas por Microsoft, innovación en IA y talento de TI escalable. Como Socio Gold de Microsoft, impulsa a medianas y grandes empresas con desarrollo de software de vanguardia, ingeniería en la nube y automatización basada en IA.',
              url: 'https://www.advancio.com/'
            },
            {
              alt: 'Enologia Integral logo',
              imageSrc: '/assets/enologia-integral.svg',
              motto: 'Profesionales haciendo vino',
              description: 'Enología Integral es una empresa independiente fundada en 2007 que reúne a profesionales con más de 20 años de experiencia en el sector vitivinícola. Inicialmente, se especializaron en servicios de consultoría personalizada, con especial énfasis en los procesos de producción y el control de calidad en la elaboración de vinos. Gradualmente, diversificaron y ampliaron su oferta de servicios.',
              url: 'https://enologiaintegral.com.mx/'
            },
            {
              alt: 'MT3 logo',
              imageSrc: '/assets/mt3.svg',
              motto: 'Experiencia a tu alcance',
              description: 'MT3 es una consultora especializada en conectar ingenieros mexicanos con amplia experiencia con empresas suecas. ¿Qué los distingue? La contratación personalizada de profesionales altamente cualificados con amplios conocimientos en sus respectivas áreas, deseosos de impulsar y apoyar el desarrollo tecnológico en Suecia.',
              url: 'https://mt3.se/'
            }
          ]
        },
        testimonials: {
          title: 'Testimonios',
          items: [
            {
              firtName: 'Eugenio',
              lastName: 'Verdugo',
              role: 'Project Manager',
              linkedIn: 'https://www.linkedin.com/in/euveos/',
              quote: 'Oscar es un individuo comprometido y bastante capaz. Adquiere conocimiento rápido y lo aplica no solo con destreza sino con la intención de optimizar y mejorar sus propios procesos y habilidades. Habiendo trabajado con él, puedo decir que algunas de sus habilidades más fuertes son el compañerismo, la dedicación, la curiosidad y el esfuerzo.'
            },
            {
              firtName: 'Shara',
              lastName: 'González',
              role: 'Senior Software Enginner',
              linkedIn: 'https://www.linkedin.com/in/sharagonzalez/',
              quote: 'Tuve el privilegio de trabajar con Oscar en un proyecto para un cliente sueco, y no puedo evitar pensar en el gran profesional que es. No le teme a lo desconocido. Es honesto sobre lo que sabe y lo que no, y cuando se encuentra con algo nuevo, lo aprende rápidamente y lo aplica con eficacia.'
            },
            {
              firtName: 'Marisa',
              lastName: 'Segovia',
              role: 'Sales Representative',
              linkedIn: 'https://www.linkedin.com/in/sharagonzalez/',
              quote: 'Oscar es responsable y profesional en todo lo que hace. Siempre muestra respeto por sus compañeros y una actitud cooperativa hacia el trabajo en equipo. Durante su tiempo trabajando con nosotros, demostró un profundo conocimiento. Además, tiene muchas ganas de aprender y está dispuesto a seguir progresando.'
            }
          ]
        }
      }
    }
  },
  components: {
    VisitWebsite: {
      label: 'Visitar sitio web'
    },
    ViewLinkedIn: {
      label: 'Ver perfil de LinkedIn'
    }
  }
}

export default site
