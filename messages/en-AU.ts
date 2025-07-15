import { Site } from './interfaces/Site'

const site: Site = {
  home: {
    heroHeader: {
      items: [
        {
          title: 'Software Engineer',
          description: 'Building robust, scalable, and future-proof websites and applications since 2023'
        },
        {
          title: 'Web Development',
          description: 'Crafting responsive, user-friendly websites with modern design and seamless functionality'
        },
        {
          title: 'Search Engine Optimization',
          description: 'Boosting search visibility and organic traffic with strategic, data-driven optimization'
        },
        {
          title: 'Professional Emails',
          description: 'Creating impactful emails that convert — whether it\'s outreach, marketing, or internal communication'
        },
        {
          title: 'Multilingual Support',
          description: 'Expanding your digital reach across cultures and languages with scalable, globally-ready solutions'
        },
        {
          title: 'Consultancy',
          description: 'Guiding businesses with tailored advice, technical insights, and strategic planning'
        }
      ]
    },
    collaborations: {
      items: [
        {
          alt: 'Advancio logo',
          imageSrc: '/assets/advancio.svg',
          description: 'Software solutions for the American market',
          url: 'https://www.advancio.com/'
        },
        {
          alt: 'Enologia Integral logo',
          imageSrc: '/assets/enologia-integral.svg',
          description: 'PWAs for the wine market in Baja California',
          url: 'https://enologiaintegral.com.mx/'
        },
        {
          alt: 'MT3 logo',
          imageSrc: '/assets/mt3.svg',
          description: 'Software solutions for the Swedish market',
          url: 'https://mt3.se/'
        }
      ]
    },
    testimonials: {
      items: []
    }
  }
}

export default site
