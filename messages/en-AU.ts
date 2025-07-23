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
      items: [
        {
          firtName: 'Eugenio',
          lastName: 'Verdugo',
          role: 'Project Manager',
          linkedIn: 'https://www.linkedin.com/in/euveos/',
          quote: 'Oscar is a committed and highly capable individual. He quickly acquires knowledge and applies it not only skillfully but also with the intention of optimizing and improving his own processes and skills. Having worked with him, I can say that some of his strongest qualities are camaraderie, dedication, curiosity, and effort.'
        },
        {
          firtName: 'Shara',
          lastName: 'González',
          role: 'Senior Software Enginner',
          linkedIn: 'https://www.linkedin.com/in/sharagonzalez/',
          quote: 'I had the privilege of working with Oscar on a project for a swedish client, and I can\'t help but think of what a great professional he is. He\'s someone who isn\'t afraid of the unknown. He\'s honest about what he knows and what he dosen\'t and when he encounters something new, he\'s quick to learn it and apply it effectively.'
        },
        {
          firtName: 'Marisa',
          lastName: 'Segovia',
          role: 'Sales Representative',
          linkedIn: 'https://www.linkedin.com/in/sharagonzalez/',
          quote: 'Oscar is responsible and a professional in everything he does. He always showed respect for his colleagues and a cooperative attitude toward teamwork. During his time working with us, he demonstrated deep knowledge. He is also eager to learn and willing to keep progressing.'
        }
      ]
    }
  }
}

export default site
