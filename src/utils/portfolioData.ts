/**
 * Portfolio Data Utility
 * Demonstrates how to use the config service to populate site data
 * This can be used in other components to access portfolio information
 */

import configService, { PortfolioConfig } from '../services/configService';
import { useState, useEffect } from 'react';

/**
 * Get profile information for display
 * @returns Promise with profile data
 */
export const getProfileData = async () => {
  const config = await configService.loadConfig();
  return {
    name: config.profile.name,
    title: config.profile.title,
    version: config.profile.version,
    company: config.profile.company,
    location: config.profile.location,
    education: config.profile.education,
    experience: config.profile.experience,
    research_focus: config.profile.research_focus,
    current_role: config.profile.current_role
  };
};

/**
 * Get skills data for display
 * @returns Promise with skills data
 */
export const getSkillsData = async () => {
  const config = await configService.loadConfig();
  return {
    programming_languages: config.skills.programming_languages,
    ai_ml_technologies: config.skills.ai_ml_technologies,
    cloud_devops: config.skills.cloud_devops,
    frameworks_tools: config.skills.frameworks_tools
  };
};

/**
 * Get projects data for display
 * @returns Promise with projects data
 */
export const getProjectsData = async () => {
  const config = await configService.loadConfig();
  return {
    ai_ml: config.projects.ai_ml,
    web_applications: config.projects.web_applications,
    data_science: config.projects.data_science,
    github_url: 'https://github.com/amarshp'
  };
};

/**
 * Get achievements data for display
 * @returns Promise with achievements data
 */
export const getAchievementsData = async () => {
  const config = await configService.loadConfig();
  return {
    awards_recognition: config.achievements.awards_recognition,
    github_stats: config.achievements.github_stats,
    project_metrics: config.achievements.project_metrics,
    certifications: config.achievements.certifications,
    publications: config.achievements.publications
  };
};

/**
 * Get contact information for display
 * @returns Promise with contact data
 */
export const getContactData = async () => {
  const config = await configService.loadConfig();
  return {
    email: 'amarsh.pedapati@gmail.com',
    professional_links: config.contact.professional_links,
    blog_writing: config.contact.blog_writing,
    content_creation: config.contact.content_creation,
    social_media: config.contact.social_media,
    business: config.contact.business
  };
};

/**
 * Get FAANG prep data for display
 * @returns Promise with FAANG prep data
 */
export const getFaangPrepData = async () => {
  const config = await configService.loadConfig();
  return {
    study_materials: config.faang_prep.study_materials,
    focus_areas: config.faang_prep.focus_areas,
    progress_tracking: config.faang_prep.progress_tracking,
    interview_experience: config.faang_prep.interview_experience,
    tips: config.faang_prep.tips
  };
};

/**
 * Get system information for display
 * @returns Promise with system data
 */
export const getSystemData = async () => {
  const config = await configService.loadConfig();
  return {
    battery: config.system.battery,
    hardware: config.system.hardware,
    network: config.system.network,
    security: config.system.security,
    performance: config.system.performance,
    temperature: config.system.temperature
  };
};

/**
 * Example: Populate a profile component
 * This shows how to use the config in a React component
 */
export const populateProfileComponent = async () => {
  try {
    const profile = await getProfileData();
    
    // Example of how to use the data in a component
    return {
      name: profile.name,
      title: profile.title,
      company: profile.company,
      location: profile.location,
      education: `${profile.education.institution} - ${profile.education.degree}`,
      specialization: profile.education.specialization,
      experience: `${profile.experience.companies} - ${profile.experience.role}`,
      specialties: profile.experience.specialties,
      research_focus: profile.research_focus,
      current_role: profile.current_role
    };
  } catch (error) {
    // Return fallback data
    return {
      name: 'Amarsh Pedapati',
      title: 'Senior Data Scientist & AI Consultant',
      company: 'Blend360',
      location: 'Hyderabad, India',
      education: 'IIT Hyderabad - Artificial Intelligence & Machine Learning',
      specialization: '',
      experience: 'Fortune 500 Companies - Senior Data Scientist',
      specialties: ['Agentic AI & RAG Architecture Specialist', 'Full-Stack Data Scientist'],
      research_focus: ['Large Language Models & Generative AI', 'Autonomous AI Agents & Multi-Agent Systems', 'Retrieval-Augmented Generation (RAG)', 'Computer Vision & Deep Learning'],
      current_role: 'Building next-generation AI systems that can reason, learn, and interact with humans naturally.'
    };
  }
};

/**
 * Example: Populate a skills component
 */
export const populateSkillsComponent = async () => {
  try {
    const skills = await getSkillsData();
    
    return {
      programming_languages: skills.programming_languages.map(skill => ({
        name: skill.name,
        percentage: skill.percentage,
        icon: skill.icon,
        progress_bar: '█'.repeat(Math.floor(skill.percentage / 5))
      })),
      ai_ml_technologies: skills.ai_ml_technologies.map(skill => ({
        name: skill.name,
        percentage: skill.percentage,
        icon: skill.icon,
        progress_bar: '█'.repeat(Math.floor(skill.percentage / 5))
      })),
      cloud_devops: skills.cloud_devops.map(skill => ({
        name: skill.name,
        percentage: skill.percentage,
        icon: skill.icon,
        progress_bar: '█'.repeat(Math.floor(skill.percentage / 5))
      })),
      frameworks_tools: skills.frameworks_tools.map(skill => ({
        name: skill.name,
        percentage: skill.percentage,
        icon: skill.icon,
        progress_bar: '█'.repeat(Math.floor(skill.percentage / 5))
      }))
    };
  } catch (error) {
    // Return fallback data
    return {
      programming_languages: [],
      ai_ml_technologies: [],
      cloud_devops: [],
      frameworks_tools: []
    };
  }
};

/**
 * Example: Populate a projects component
 */
export const populateProjectsComponent = async () => {
  try {
    const projects = await getProjectsData();
    
    return {
      ai_ml: projects.ai_ml.map(project => ({
        name: project.name,
        description: project.description,
        tech: project.tech.join(', ')
      })),
      web_applications: projects.web_applications.map(project => ({
        name: project.name,
        description: project.description,
        tech: project.tech.join(', ')
      })),
      data_science: projects.data_science.map(project => ({
        name: project.name,
        description: project.description,
        tech: project.tech.join(', ')
      })),
      github_url: projects.github_url
    };
  } catch (error) {
    // Return fallback data
    return {
      ai_ml: [],
      web_applications: [],
      data_science: [],
      github_url: 'github.com/arjunreddy/projects'
    };
  }
};

/**
 * Example: Populate an achievements component
 */
export const populateAchievementsComponent = async () => {
  try {
    const achievements = await getAchievementsData();
    
    return {
      awards: achievements.awards_recognition.map(award => ({
        title: award.title,
        platform: award.platform || award.conference,
        year: award.year
      })),
      github_stats: {
        repositories: achievements.github_stats.repositories,
        stars: achievements.github_stats.stars.toLocaleString(),
        forks: achievements.github_stats.forks.toLocaleString(),
        contributions: achievements.github_stats.contributions.toLocaleString()
      },
      project_metrics: achievements.project_metrics,
      certifications: achievements.certifications,
      publications: achievements.publications
    };
  } catch (error) {
    // Return fallback data
    return {
      awards: [],
      github_stats: { repositories: 0, stars: '0', forks: '0', contributions: '0' },
      project_metrics: { projects_completed: 0, clients_served: 0, revenue_generated: '$0', team_size_led: 0 },
      certifications: [],
      publications: { research_papers: 0, technical_blogs: 0, conference_talks: 0, open_source_contributions: 0 }
    };
  }
};

/**
 * Example: Populate a contact component
 */
export const populateContactComponent = async () => {
  try {
    const contact = await getContactData();
    
    return {
      email: contact.email,
      professional_links: contact.professional_links,
      blog_writing: contact.blog_writing,
      content_creation: contact.content_creation,
      social_media: contact.social_media,
      business: contact.business
    };
  } catch (error) {
    // Return fallback data
    return {
      email: 'arjun.reddy@email.com',
      professional_links: { linkedin: '', github: '', twitter: '' },
      blog_writing: { medium: '', personal_blog: '' },
      content_creation: { youtube: '', twitch: '' },
      social_media: { instagram: '', discord: '' },
      business: 'Available for consulting, speaking, and collaboration.'
    };
  }
};

/**
 * Example: Populate a FAANG prep component
 */
export const populateFaangPrepComponent = async () => {
  try {
    const faangPrep = await getFaangPrepData();
    
    return {
      study_materials: faangPrep.study_materials,
      focus_areas: faangPrep.focus_areas,
      progress_tracking: faangPrep.progress_tracking,
      interview_experience: faangPrep.interview_experience,
      tips: faangPrep.tips
    };
  } catch (error) {
    // Return fallback data
    return {
      study_materials: [],
      focus_areas: [],
      progress_tracking: { easy_problems: { solved: 0, total: 0 }, medium_problems: { solved: 0, total: 0 }, hard_problems: { solved: 0, total: 0 }, system_design_scenarios: 0 },
      interview_experience: [],
      tips: []
    };
  }
};

/**
 * Example: Populate a system status component
 */
export const populateSystemComponent = async () => {
  try {
    const system = await getSystemData();
    
    return {
      battery: system.battery,
      hardware: system.hardware,
      network: system.network,
      security: system.security,
      performance: system.performance,
      temperature: system.temperature
    };
  } catch (error) {
    // Return fallback data
    return {
      battery: { level: 0, status: 'Unknown', power_source: 'Unknown', estimated_runtime: '0h' },
      hardware: { memory: 'Unknown', cpu: 'Unknown', gpu: 'Unknown' },
      network: { connection: 'Unknown', latency: '0ms', bandwidth: '0Mbps' },
      security: { firewall: 'Unknown', vpn: 'Unknown', updates: 'Unknown' },
      performance: { cpu_usage: 0, memory_usage: 0, disk_usage: 0, network_load: 0 },
      temperature: { cpu: 0, gpu: 0, system: 0 }
    };
  }
};

/**
 * Example: Get all portfolio data at once
 * Useful for components that need multiple data sources
 */
export const getAllPortfolioData = async () => {
  try {
    const [
      profile,
      skills,
      projects,
      achievements,
      contact,
      faangPrep,
      system
    ] = await Promise.all([
      getProfileData(),
      getSkillsData(),
      getProjectsData(),
      getAchievementsData(),
      getContactData(),
      getFaangPrepData(),
      getSystemData()
    ]);

    return {
      profile,
      skills,
      projects,
      achievements,
      contact,
      faangPrep,
      system
    };
  } catch (error) {
    // Return fallback data
    return null;
  }
};

/**
 * Example: React hook for using portfolio data
 * This can be used in React components
 */
export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const config = await configService.loadConfig();
        setData(config);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load portfolio data');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
}; 