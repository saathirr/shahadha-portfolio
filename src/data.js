/**
 * Central data file for the portfolio.
 * Edit this single file to update the personal / CV content shown across the site.
 */

export const personalInfo = {
  name: 'Thowfeek Shahadha',
  title: 'Quantity Surveying Student',
  subtitle: 'Quantity Surveying Student | Aspiring Quantity Surveyor',
  location: 'Sri Lanka',
  email: 'thowfeekshahadha@gmail.com',
  phone: '+94 71 480 6643',
  phoneHref: '+94714806643',
  linkedin: 'https://www.linkedin.com/in/mohammed-saathir-linkedin',
  linkedinLabel: 'mohammed-saathir-linkedin',
  profilePhoto: '/Profile.jpg',
}

export const hero = {
  tagline:
    'Building precise cost solutions for tomorrow\u2019s construction — detail-driven, eager to learn, and ready to contribute.',
  primaryCta: {
    label: 'View Portfolio',
    href: 'https://www.behance.net/mohammedsaathir',
  },
  secondaryCta: {
    label: 'Contact Me',
    href: '#contact',
  },
}

export const about = {
  heading: 'About Me',
  summary:
    'Motivated and detail-oriented Quantity Surveying student currently pursuing a Higher Diploma in Quantity Surveying – NVQ Level 5 at the International Institute of Business & Technology (IIBT). Strong interest in construction cost management, quantity take-off, estimating, measurement, and project documentation. Eager to apply academic knowledge in a professional construction environment — responsible, hardworking, and a fast learner with good communication and teamwork skills.',
  highlightCards: [
    {
      icon: 'ruler',
      label: 'Field of Focus',
      value: 'Cost Management & QS',
    },
    {
      icon: 'map',
      label: 'Based In',
      value: 'Sri Lanka',
    },
    {
      icon: 'graduation',
      label: 'Current Study',
      value: 'NVQ Level 5 — IIBT',
    },
  ],
}

export const education = [
  {
    id: 1,
    title: 'Higher Diploma in Quantity Surveying – NVQ Level 5',
    status: 'Reading',
    institution: 'International Institute of Business & Technology (IIBT)',
    period: 'Present',
    current: true,
  },
  {
    id: 2,
    title: 'G.C.E. Ordinary Level Examination — All Passes',
    status: 'Completed',
    institution: 'AK/Munawwara Junior College',
    period: '2022',
    current: false,
  },
]

export const skills = [
  'Quantity Take-Off & Measurement',
  'Preparation of Bills of Quantities (BOQ)',
  'Construction Cost Estimation',
  'Basic Cost Planning',
  'Construction Material Knowledge',
  'Tender Documentation',
  'Procurement Processes',
  'Basic Contract Administration',
  'Reading and Understanding Drawings',
  'Building Construction Knowledge',
  'Microsoft Word / Excel / PowerPoint',
  'AutoCAD',
]

export const academicKnowledge = [
  'Measurement of construction works',
  'Preparation and interpretation of BOQs',
  'Construction cost estimation',
  'Building construction methods',
  'Procurement and tendering procedures',
  'Roles and responsibilities of project stakeholders',
  'Construction contracts',
  'Cost control and project budgeting',
  'Construction materials and specifications',
  'Quantity surveying documentation',
]

export const strengths = [
  'Highly motivated to build a career in Quantity Surveying',
  'Strong interest in the construction industry',
  'Willing to learn from experienced professionals',
  'Responsible and punctual',
  'Detail-oriented approach to work',
  'Positive attitude toward new challenges',
  'Comfortable working independently and as part of a team',
]

export const languages = [
  { name: 'English', level: 'Fluent', percent: 95 },
  { name: 'Tamil', level: 'Fluent', percent: 95 },
  { name: 'Sinhala', level: 'Intermediate', percent: 65 },
  { name: 'Arabic', level: 'Intermediate', percent: 75 },
]

export const portfolio = {
  heading: 'Portfolio',
  tagline:
    'Selected works from my journey so far — see real projects on my Behance profile.',
  behanceUrl: 'https://www.behance.net/mohammedsaathir',
  cards: [
    {
      id: 1,
      title: 'Quantity Take-Off Case Study',
      subtitle: 'Measurement & Estimating',
      status: 'Coming soon',
    },
    {
      id: 2,
      title: 'BOQ Preparation Sample',
      subtitle: 'Bills of Quantities',
      status: 'Coming soon',
    },
    {
      id: 3,
      title: 'Construction Cost Estimation',
      subtitle: 'Cost Planning',
      status: 'Coming soon',
    },
  ],
}

export const contact = {
  heading: 'Get In Touch',
  tagline:
    'Have a question, an opportunity, or a project in mind? I\u2019d love to hear from you.',
  items: [
    {
      icon: 'mail',
      label: 'Email',
      value: 'thowfeekshahadha@gmail.com',
      href: 'mailto:thowfeekshahadha@gmail.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+94 71 480 6643',
      href: 'tel:+94714806643',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'mohammed-saathir-linkedin',
      href: 'https://www.linkedin.com/in/mohammed-saathir-linkedin',
    },
    {
      icon: 'behance',
      label: 'Behance',
      value: 'behance.net/mohammedsaathir',
      href: 'https://www.behance.net/mohammedsaathir',
    },
  ],
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'knowledge', label: 'Knowledge' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]
