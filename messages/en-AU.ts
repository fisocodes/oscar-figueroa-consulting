import { Site } from './interfaces/Site'

const site: Site = {
  pages: {
    home: {
      metadata: {
        title: 'Fiso Codes - Software Engineer',
        description: 'Software engineer especialized in web technologies.Get professional IT advice and services for your business.',
        author: 'Oscar Figueroa, software engineer and consultant'
      },
      sections: {
        hero: {
          title: 'Hero',
          items: [
            {
              headline: 'Software Engineer',
              subheadline: 'Building robust, scalable, and future-proof websites and applications since 2023'
            },
            {
              headline: 'Web Development',
              subheadline: 'Crafting responsive, user-friendly websites with modern design and seamless functionality'
            },
            {
              headline: 'SEO',
              subheadline: 'Boosting search visibility and organic traffic with strategic, data-driven optimization'
            },
            {
              headline: 'Professional Emails',
              subheadline: 'Creating impactful emails that convert — whether it\'s outreach, marketing, or internal communication'
            },
            {
              headline: 'Multilingual Support',
              subheadline: 'Expanding your digital reach across cultures and languages with scalable, globally-ready solutions'
            },
            {
              headline: 'Consultancy',
              subheadline: 'Guiding businesses with tailored advice, technical insights, and strategic planning'
            }
          ]
        },
        collaborations: {
          title: 'Collaborations',
          items: [
            {
              alt: 'Advancio logo',
              imageSrc: '/assets/advancio.svg',
              motto: 'Microsoft experts, global innovators',
              description: 'Advancio is a global technology powerhouse, specializing in Microsoft-driven solutions, AI innovation, and scalable IT talent. As a Microsoft Gold Partner, they empower mid-to-enterprise businesses with cutting-edge software development, cloud engineering, and AI-powered automation.',
              url: 'https://www.advancio.com/'
            },
            {
              alt: 'Enologia Integral logo',
              imageSrc: '/assets/enologia-integral.svg',
              motto: 'Professionals making wine',
              description: 'Enología Integral is an independent company founded in 2007, bringing together professionals with over 20 years of experience in the wine industry. Initially, they specialized in personalized consulting services with a special focus on production processes and quality control in winemaking. They gradually diversified and expanded their service offering.',
              url: 'https://enologiaintegral.com.mx/'
            },
            {
              alt: 'MT3 logo',
              imageSrc: '/assets/mt3.svg',
              motto: 'Experience within reach',
              description: 'MT3 is a consultancy firm specializing in connecting experienced Mexican engineers to Swedish companies. What sets them apart? Personalized recruitment of highly skilled individuals with vast knowledge in their separate fields, eager to boost and support the technology development in Sweden.',
              url: 'https://mt3.se/'
            }
          ]
        },
        testimonials: {
          title: 'Testimonials',
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
              quote: 'Oscar is responsible and a professional in everything he does. He always shows respect for his colleagues and a cooperative attitude toward teamwork. During his time working with us, he demonstrated deep knowledge. He is also eager to learn and willing to keep progressing.'
            }
          ]
        }
      }
    }
  },
  components: {
    VisitWebsite: {
      label: 'Visit website'
    },
    ViewLinkedIn: {
      label: 'View LinkedIn profile'
    }
  }
}

export default site
