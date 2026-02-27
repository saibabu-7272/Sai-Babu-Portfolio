/**
 * Central data file for Sai Babu Gadida's portfolio website
 * All portfolio content is stored here for easy updates and maintenance
 */

import localConnectProjectImage from '../assets/local-connect-project.png'; 
import emojiGameImage from '../assets/emoji-game-project.png';
import bookFinderImage from '../assets/book-finder-project.png';
import appStoreImage from '../assets/app-store-project.png';
import projectsShowImage from '../assets/projects-show-project.png';

export const personalInfo = {
  name: 'Sai Babu Gadida',
  title: 'Full Stack Developer',
  location: 'Hyderabad, Telangana',
  email: 'saibabu61242@gmail.com',
  phone: '9010415625',
  profileImage: '/profile-image.jpg', // This should be replaced with actual image path
  socialLinks: {
    github: 'https://github.com/saibabu-7272',
    linkedin: 'https://www.linkedin.com/in/g-sai-babu-222066268/'
  },
  bio: 'Driven developer with practical experience in JavaScript, React JS, Node JS, and MongoDB, eager to work on end-to-end web applications. Passionate about building efficient, scalable solutions and enhancing user experiences while continuously expanding my skills across the technology stack.'
};

export const stats = {
  experience: 609, // Days of coding experience
  projects: 15,    // Number of projects completed
  openToWork: true,
  resumeUrl: 'https://drive.google.com/file/d/1mwaMgFMfw8-KtFqubUXHlvvA7OvZnoII/view?usp=sharing' // Anchor link to resume section
};

export const weatherData = {
  city: 'Hyderabad',
  currentDay: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
  currentDate: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
};

export const learningTrackerData = [
  {
    id: 'react',
    subject: 'React JS',
    iconKey: 'react',
    hours: 215,
    progress: 85
  },
  {
    id: 'node',
    subject: 'Node/Express',
    iconKey: 'node',
    hours: 145,
    progress: 70
  },
  {
    id: 'mongodb',
    subject: 'MongoDB',
    iconKey: 'mongodb',
    hours: 105,
    progress: 65
  },
  {
    id: 'job',
    subject: 'Job Applications',
    iconKey: 'jobApplications',
    hours: 45,
    progress: 40
  }
];

export const skillDistributionData = [
  { 
    skill: 'Full Stack', 
    percentage: 55, 
    color: '#4dabf7',
    topics: ['MERN Stack', 'RESTful APIs', 'Authentication', 'State Management', 'Full Stack Deployment']
  },
  { 
    skill: 'Frontend', 
    percentage: 35, 
    color: '#82c91e',
    topics: ['React.js', 'HTML5', 'CSS3', 'JavaScript ES6+', 'UI/UX Design', 'Responsive Design']
  },
  { 
    skill: 'Backend', 
    percentage: 10, 
    color: '#15aabf',
    topics: ['Node.js', 'Express', 'MongoDB', 'API Development', 'JWT Authentication']
  }
];

export const tasksTimelineData = [
  {
    id: 'monday',
    day: 'Mon',
    tasks: [
      { id: 'mon1', time: '10:00', title: 'React Learning', type: 'learning' },
      { id: 'mon2', time: '14:00', title: 'Project Work', type: 'project' }
    ]
  },
  {
    id: 'tuesday',
    day: 'Tue',
    tasks: [
      { id: 'tue1', time: '9:30', title: 'Node.js Practice', type: 'learning' },
      { id: 'tue2', time: '15:00', title: 'API Testing', type: 'project' }
    ]
  },
  {
    id: 'wednesday',
    day: 'Wed',
    tasks: [
      { id: 'wed1', time: '10:00', title: 'Team Sync', type: 'meeting' },
      { id: 'wed2', time: '13:00', title: 'MongoDB Tutorial', type: 'learning' }
    ]
  },
  {
    id: 'thursday',
    day: 'Thu',
    tasks: [
      { id: 'thu1', time: '11:00', title: 'Project Planning', type: 'planning' },
      { id: 'thu2', time: '16:00', title: 'Debugging Session', type: 'project' }
    ]
  },
  {
    id: 'friday',
    day: 'Fri',
    tasks: [
      { id: 'fri1', time: '9:00', title: 'Code Review', type: 'review' },
      { id: 'fri2', time: '14:30', title: 'New Feature Work', type: 'project' }
    ]
  },
  {
    id: 'saturday',
    day: 'Sat',
    tasks: [
      { id: 'sat1', time: '11:00', title: 'Portfolio Update', type: 'project' },
      { id: 'sat2', time: '15:00', title: 'Open Source Contribution', type: 'project' }
    ]
  },
  {
    id: 'sunday',
    day: 'Sun',
    tasks: [
      { id: 'sun1', time: '10:30', title: 'Learning New Tech', type: 'learning' },
      { id: 'sun2', time: '16:00', title: 'Project Planning', type: 'planning' }
    ]
  }
];

export const toolsUsedData = [
  { id: 'vscode', name: 'VS Code', proficiency: 90, iconKey: 'vscode' },
  { id: 'figma', name: 'Figma', proficiency: 75, iconKey: 'figma' },
  { id: 'devtools', name: 'Chrome DevTools', proficiency: 85, iconKey: 'devtools' },
  { id: 'github', name: 'GitHub', proficiency: 80, iconKey: 'github' },
  { id: 'chatgpt', name: 'ChatGPT', proficiency: 85, iconKey: 'chatgpt' },
  { id: 'windsurf', name: 'Windsurf', proficiency: 70, iconKey: 'windsurf' }
];

export const projectsData = [
  {
    id: 'localconnect',
    title: 'Local Connect',
    description: 'A Full-stack web application that connects local service providers (electricians, plumbers) with nearby customers.',
    techStack: ['React JS', 'Node JS', 'Express JS', 'MongoDB', 'JWT'],
    image: localConnectProjectImage, // Replace with actual image path
    liveLink: 'https://local-connect-5mxf.onrender.com',
    githubLink: 'https://github.com/saibabu-7272/local-connect-app',
    features: [
      'Designed pages for Login, Home with services list',
      'Service providers rendered with user location',
      'Secured user data with JWT tokens',
      'Protected routes and persisted login state'
    ]
  },
  {
    id: 'emojigame',
    title: 'Emoji Game',
    description: 'An engaging, emoji-based memory challenge for players. Test your memory with this fun, interactive game.',
    techStack: ['React JS', 'CSS', 'JavaScript'],
    image: emojiGameImage, // Replace with actual image path
    liveLink: 'http://sai7272emojig.ccbp.tech',
    githubLink: 'https://github.com/saibabu-7272/emoji-game',
    features: [
      'Implemented React components',
      'Used event listeners and conditional rendering',
      'Enhanced UX with CSS styling'
    ]
  },
  {
    id: 'bookfinder',
    title: 'Book Finder',
    description: 'Previous version of my portfolio website showcasing my skills and projects.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: bookFinderImage, // Replace with actual image path
    liveLink: 'https://book-finder-topaz.vercel.app/',
    githubLink: 'https://github.com/saibabu-7272/Book-Finder',
    features: [
      'Responsive design',
      'Project showcase',
      'Skills and education section'
    ]
  },
{
    id: 'appstore',
    title: 'App Store',
    description: 'Previous version of my portfolio website showcasing my skills and projects.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: appStoreImage, // Replace with actual image path
    liveLink: 'https://saibabuappstore.ccbp.tech/',
    githubLink: 'https://saibabuappstore.ccbp.tech/',
    features: [
      'Responsive design',
      'Project showcase',
      'Skills and education section'
    ]
  },
{
    id: 'projectsshow',
    title: 'My Projects Show',
    description: 'Previous version of my portfolio website showcasing my skills and projects.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    image: projectsShowImage, 
    liveLink: 'https://saiwebprojects.ccbp.tech/',
    githubLink: 'https://saiwebprojects.ccbp.tech/',
    features: [
      'Responsive design',
      'Project showcase',
      'Skills and education section'
    ]
  }
];

export const educationData = [
  {
    id: 'edu1',
    institution: 'Nxtwave Disruptive Technologies',
    degree: 'Full-Stack Development (MERN)',
    period: 'Jan 2024 - 2025'
  },
  {
    id: 'edu2',
    institution: 'CSTS Government College, Jangareddigudem',
    degree: 'BSc (Bachelor of Science)_Mathematics, Physics, Computers (MPCS)',
    period: '2020 - 2024'
  },
  {
    id: 'edu3',
    institution: 'Government Junior College, Kukunoor',
    degree: 'Intermediate MPC',
    period: '2018 - 2020'
  },
  {
    id: 'edu4',
    institution: 'ZPHS High School, Kukunoor',
    degree: 'Secondary School Of Certificate',
    period: '2017 - 2018'
  }
];

export const techStackData = {
  frontend: [
    { name: 'HTML', iconKey: 'html', proficiency: 90, topics: ['HTML5', 'Semantic Markup', 'Accessibility', 'Forms', 'Canvas'] },
    { name: 'CSS', iconKey: 'css', proficiency: 85, topics: ['CSS3', 'Flexbox', 'Grid', 'Animations', 'Media Queries', 'SASS/SCSS'] },
    { name: 'JavaScript', iconKey: 'javascript', proficiency: 80, topics: ['ES6+', 'DOM Manipulation', 'Async/Await', 'Fetch API', 'Event Handling'] },
    { name: 'React.js', iconKey: 'react', proficiency: 80, topics: ['Hooks', 'Context API', 'Redux', 'React Router', 'Component Lifecycle'] },
    { name: 'Bootstrap', iconKey: 'bootstrap', proficiency: 75, topics: ['Grid System', 'Components', 'Utilities', 'Customization', 'Responsive Design'] },
    { name: 'Flexbox', iconKey: 'flexbox', proficiency: 85, topics: ['Container Properties', 'Item Properties', 'Alignment', 'Ordering', 'Responsive Layouts'] }
  ],
  backend: [
    { name: 'Node.js', iconKey: 'node', proficiency: 70, topics: ['Express Integration', 'npm', 'File System', 'Event Loop', 'Streams'] },
    { name: 'Python', iconKey: 'python', proficiency: 60, topics: ['Fast API', 'Pydantic Models', 'pip']},  
    { name: 'Express.js', iconKey: 'expressjs', proficiency: 65, topics: ['Routing', 'Middleware', 'Error Handling', 'Template Engines', 'REST API Design'] },
    { name: 'REST APIs', iconKey: 'restapis', proficiency: 75, topics: ['HTTP Methods', 'Status Codes', 'Authentication', 'JSON', 'API Versioning'] }
  ],
  database: [
    { name: 'MongoDB', iconKey: 'mongodb', proficiency: 60, topics: ['CRUD Operations', 'Aggregation', 'Indexing', 'Schema Design', 'Mongoose ODM'] },
    { name: 'SQLite', iconKey: 'database', proficiency: 65, topics: ['SQL Queries', 'Database Design', 'Joins', 'Transactions', 'Indexing'] }
  ],
  other: [
    { name: 'Git', iconKey: 'git', proficiency: 75, topics: ['Version Control', 'Branching', 'Merging', 'Pull Requests', 'GitHub Workflow'] },
    { name: 'Python', iconKey: 'python', proficiency: 60, topics: ['Basic Syntax', 'Data Structures', 'File I/O', 'Libraries', 'Automation'] },
    { name: 'JWT', iconKey: 'jwt', proficiency: 70, topics: ['Authentication', 'Token Structure', 'Verification', 'Security Practices', 'Implementation'] },
    { name: 'UI Design', iconKey: 'uiDesign', proficiency: 75, topics: ['Color Theory', 'Typography', 'User Experience', 'Responsive Design', 'Design Systems'] },
    { name: 'Windsurf', iconKey: 'windsurf', proficiency: 70, topics: ['Agentic Development', 'Tool Integration', 'UI Frameworks', 'Code Generation', 'AI-assisted Programming'] }
  ]
};

// Activity heatmap data - defines activity levels for each day/time slot
// Activity levels: 0 = none, 1 = low, 2 = medium, 3 = high
export const activityHeatmapData = {
  'Sun': {
    '9am': 0, '10am': 1, '11am': 2, '12pm': 1, '1pm': 0, '2pm': 0, '3pm': 1,
    '4pm': 2, '5pm': 3, '6pm': 2, '7pm': 1, '8pm': 0, '9pm': 0, '10pm': 0, '11pm': 0
  },
  'Mon': {
    '9am': 1, '10am': 2, '11am': 3, '12pm': 2, '1pm': 1, '2pm': 2, '3pm': 3,
    '4pm': 2, '5pm': 1, '6pm': 1, '7pm': 0, '8pm': 0, '9pm': 0, '10pm': 0, '11pm': 0
  },
  'Tue': {
    '9am': 2, '10am': 3, '11am': 2, '12pm': 1, '1pm': 1, '2pm': 2, '3pm': 3,
    '4pm': 3, '5pm': 2, '6pm': 1, '7pm': 0, '8pm': 0, '9pm': 0, '10pm': 0, '11pm': 0
  },
  'Wed': {
    '9am': 1, '10am': 2, '11am': 3, '12pm': 3, '1pm': 2, '2pm': 3, '3pm': 3,
    '4pm': 2, '5pm': 2, '6pm': 1, '7pm': 1, '8pm': 0, '9pm': 0, '10pm': 0, '11pm': 0
  },
  'Thu': {
    '9am': 1, '10am': 2, '11am': 3, '12pm': 2, '1pm': 1, '2pm': 2, '3pm': 3,
    '4pm': 3, '5pm': 2, '6pm': 1, '7pm': 0, '8pm': 0, '9pm': 0, '10pm': 0, '11pm': 0
  },
  'Fri': {
    '9am': 2, '10am': 3, '11am': 3, '12pm': 2, '1pm': 1, '2pm': 1, '3pm': 2,
    '4pm': 2, '5pm': 1, '6pm': 0, '7pm': 0, '8pm': 0, '9pm': 0, '10pm': 0, '11pm': 0
  },
  'Sat': {
    '9am': 0, '10am': 0, '11am': 1, '12pm': 2, '1pm': 2, '2pm': 1, '3pm': 0,
    '4pm': 0, '5pm': 1, '6pm': 1, '7pm': 0, '8pm': 0, '9pm': 0, '10pm': 0, '11pm': 0
  }
};

// Social links for contact section
export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/saibabu-7272',
    iconKey: 'github'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/g-sai-babu-222066268/',
    iconKey: 'linkedin'
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:saibabu61242@gmail.com',
    iconKey: 'email'
  },
  {
    id: 'phone',
    name: 'Phone',
    url: 'tel:+919010415625',
    iconKey: 'phone'
  },
];

export const timelineData = [
  {
    id: 'project1',
    title: 'Local Connect Project',
    organization: 'Nxtwave Project',
    period: 'Jan 2025',
    description: 'Built a full-stack application connecting local service providers with customers. Implemented authentication, location-based search, and service booking.',
    type: 'project',
    skills: ['React.js', 'Node.js', 'MongoDB', 'JWT']
  },
  {
    id: 'training',
    title: 'Full-Stack Development Training',
    organization: 'Nxtwave Disruptive Technologies',
    period: 'Jan 2024 - 2025',
    description: 'Learning MERN Stack development. Completed several projects including Local Connect, Emoji Game, and Portfolio Website.',
    type: 'training',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: 'education3',
    title: 'Bachelor of Science (MPCS)',
    organization: 'CSTS Government College, Jangareddigudem',
    period: '2020 - 2024',
    description: 'Studied Mathematics, Physics, and Computer Science. Focused on programming fundamentals and mathematical problem solving.',
    type: 'education',
    skills: ['Python', 'Data Structures', 'Algorithms']
  },
  {
    id: 'education2',
    title: 'Intermediate MPC',
    organization: 'Government Junior College, Kukunoor',
    period: '2018 - 2020',
    description: 'Studied Mathematics, Physics, and Chemistry. Developed analytical thinking and problem-solving skills.',
    type: 'education',
    skills: []
  },
  {
    id: 'education1',
    title: 'Secondary School Of Certificate',
    organization: 'ZPHS High School, Kukunoor',
    period: '2017 - 2018',
    description: 'Completed secondary education with focus on science and mathematics.',
    type: 'education',
    skills: []
  }
];
