import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaFileAlt, 
  FaHome, 
  FaFolder, 
  FaTools, 
  FaCalendarAlt, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaMobileAlt, 
  FaPaperPlane, 
  FaPlay, 
  FaCode, 
  FaLaptopCode, 
  FaPalette, 
  FaSearch, 
  FaRobot
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiGit, 
  SiPython, 
  SiWindows, 
  SiFigma
} from 'react-icons/si';
import { TbBrandCss3 } from 'react-icons/tb';
import { GiWaterRecycling } from 'react-icons/gi';
import { MdWork } from 'react-icons/md';

// Icon size constants
export const ICON_SIZES = {
  xs: '12px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '32px'
};

// Icon color constants (using existing color scheme from the portfolio)
export const ICON_COLORS = {
  primary: '#4dabf7',  // Blue from skillDistributionData
  secondary: '#82c91e', // Green from skillDistributionData
  tertiary: '#15aabf',  // Teal from skillDistributionData
  dark: '#343a40',
  light: '#f8f9fa',
  gray: '#adb5bd'
};

// Default icon props
export const DEFAULT_ICON_PROPS = {
  size: ICON_SIZES.md,
  color: ICON_COLORS.primary,
  className: 'portfolio-icon'
};

// Icon mapping for consistent usage throughout the app
export const PORTFOLIO_ICONS = {
  // Learning tracker
  react: <FaReact {...DEFAULT_ICON_PROPS} />,
  node: <FaNodeJs {...DEFAULT_ICON_PROPS} color={ICON_COLORS.secondary} />,
  mongodb: <SiMongodb {...DEFAULT_ICON_PROPS} color={ICON_COLORS.tertiary} />,
  jobApplications: <FaFileAlt {...DEFAULT_ICON_PROPS} color={ICON_COLORS.gray} />,
  
  // Navigation/Sidebar
  home: <FaHome {...DEFAULT_ICON_PROPS} />,
  projects: <FaFolder {...DEFAULT_ICON_PROPS} />,
  skills: <FaTools {...DEFAULT_ICON_PROPS} />,
  timeline: <FaCalendarAlt {...DEFAULT_ICON_PROPS} />,
  resume: <FaFileAlt {...DEFAULT_ICON_PROPS} />,
  contact: <FaEnvelope {...DEFAULT_ICON_PROPS} />,
  github: <FaGithub {...DEFAULT_ICON_PROPS} />,
  linkedin: <FaLinkedin {...DEFAULT_ICON_PROPS} />,
  
  // Social links
  twitter: <FaTwitter {...DEFAULT_ICON_PROPS} />,
  email: <FaEnvelope {...DEFAULT_ICON_PROPS} />,
  phone: <FaMobileAlt {...DEFAULT_ICON_PROPS} />,
  
  // Tools used
  vscode: <FaCode {...DEFAULT_ICON_PROPS} />,
  figma: <SiFigma {...DEFAULT_ICON_PROPS} />,
  devtools: <FaSearch {...DEFAULT_ICON_PROPS} />,
  chatgpt: <FaRobot {...DEFAULT_ICON_PROPS} />,
  windsurf: <GiWaterRecycling {...DEFAULT_ICON_PROPS} />,
  
  // Tech stack
  html: <SiHtml5 {...DEFAULT_ICON_PROPS} />,
  css: <SiCss3 {...DEFAULT_ICON_PROPS} />,
  javascript: <SiJavascript {...DEFAULT_ICON_PROPS} />,
  bootstrap: <SiBootstrap {...DEFAULT_ICON_PROPS} />,
  flexbox: <TbBrandCss3 {...DEFAULT_ICON_PROPS} />,
  expressjs: <FaNodeJs {...DEFAULT_ICON_PROPS} />,
  restapis: <FaLaptopCode {...DEFAULT_ICON_PROPS} />,
  git: <SiGit {...DEFAULT_ICON_PROPS} />,
  python: <SiPython {...DEFAULT_ICON_PROPS} />,
  jwt: <FaFileAlt {...DEFAULT_ICON_PROPS} />,
  uiDesign: <FaPalette {...DEFAULT_ICON_PROPS} />,
  
  // Actions
  play: <FaPlay {...DEFAULT_ICON_PROPS} />,
  sendMessage: <FaPaperPlane {...DEFAULT_ICON_PROPS} />,
  work: <MdWork {...DEFAULT_ICON_PROPS} />
};

// Helper function to get an icon with custom props
export const getIcon = (iconKey, customProps = {}) => {
  const IconComponent = PORTFOLIO_ICONS[iconKey];
  
  if (!IconComponent) {
    console.warn(`Icon "${iconKey}" not found in PORTFOLIO_ICONS`);
    return null;
  }
  
  return React.cloneElement(IconComponent, { ...customProps });
};

export default PORTFOLIO_ICONS;
