/**
 * Configuration Service
 * Handles loading of portfolio data from JSON config file
 * Provides fallback values and error handling
 */

export interface PortfolioConfig {
  profile: {
    name: string;
    title: string;
    version: string;
    company: string;
    location: string;
    education: {
      institution: string;
      degree: string;
      specialization: string;
    };
    experience: {
      companies: string;
      role: string;
      specialties: string[];
    };
    research_focus: string[];
    current_role: string;
  };
  system: {
    battery: {
      level: number;
      status: string;
      power_source: string;
      estimated_runtime: string;
    };
    hardware: {
      memory: string;
      cpu: string;
      gpu: string;
    };
    network: {
      connection: string;
      latency: string;
      bandwidth: string;
    };
    security: {
      firewall: string;
      vpn: string;
      updates: string;
    };
    performance: {
      cpu_usage: number;
      memory_usage: number;
      disk_usage: number;
      network_load: number;
    };
    temperature: {
      cpu: number;
      gpu: number;
      system: number;
    };
  };
  skills: {
    programming_languages: Array<{
      name: string;
      percentage: number;
      icon: string;
    }>;
    ai_ml_technologies: Array<{
      name: string;
      percentage: number;
      icon: string;
    }>;
    cloud_devops: Array<{
      name: string;
      percentage: number;
      icon: string;
    }>;
    frameworks_tools: Array<{
      name: string;
      percentage: number;
      icon: string;
    }>;
  };
  projects: {
    ai_ml: Array<{
      name: string;
      description: string;
      tech: string[];
    }>;
    web_applications: Array<{
      name: string;
      description: string;
      tech: string[];
    }>;
    data_science: Array<{
      name: string;
      description: string;
      tech: string[];
    }>;
    github_url: string;
  };
  achievements: {
    awards_recognition: Array<{
      title: string;
      platform: string;
      year: number;
    }>;
    github_stats: {
      repositories: number;
      stars: number;
      forks: number;
      contributions: number;
    };
    project_metrics: {
      projects_completed: number;
      clients_served: number;
      revenue_generated: string;
      team_size_led: number;
    };
    certifications: string[];
    publications: {
      research_papers: number;
      technical_blogs: number;
      conference_talks: number;
      open_source_contributions: number;
    };
  };
  faang_prep: {
    study_materials: Array<{
      name: string;
      description: string;
      type: string;
    }>;
    focus_areas: string[];
    progress_tracking: {
      easy_problems: {
        solved: number;
        total: number;
      };
      medium_problems: {
        solved: number;
        total: number;
      };
      hard_problems: {
        solved: number;
        total: number;
      };
      system_design_scenarios: number;
    };
    interview_experience: Array<{
      company: string;
      stage: string;
      status: string;
    }>;
    tips: string[];
  };
  contact: {
    email: string;
    resume: string;
    professional_links: {
      linkedin: string;
      github: string;
      twitter?: string;
    };
    blog_writing: {
      medium: string;
      personal_blog: string;
    };
    content_creation: {
      youtube: string;
      twitch: string;
    };
    social_media: {
      instagram: string;
      discord?: string;
    };
    business: string;
    leetcode: string;
  };
  terminal: {
    prompt: string;
    welcome_message: string;
    help_text: string;
    system_status: string;
    error_message: string;
    commands: Record<string, {
      description: string;
      category: string;
    }>;
  };
}

// Fallback configuration in case JSON loading fails
const fallbackConfig: PortfolioConfig = {
  profile: {
    name: "Amarsh Pedapati",
    title: "Senior Data Scientist & AI Consultant",
    version: "3.9.0",
    company: "Blend360",
    location: "Hyderabad, India",
    education: {
      institution: "IIT Hyderabad",
      degree: "Artificial Intelligence & Machine Learning"
    },
    experience: {
      companies: "Fortune 500 Companies",
      role: "Senior Data Scientist",
      specialties: [
        "Agentic AI & RAG Architecture Specialist",
        "Full-Stack Data Scientist"
      ]
    },
    research_focus: [
      "Large Language Models & Generative AI",
      "Autonomous AI Agents & Multi-Agent Systems",
      "Retrieval-Augmented Generation (RAG)",
      "Computer Vision & Deep Learning"
    ],
    current_role: "Building next-generation AI systems that can reason, learn, and interact with humans naturally."
  },
  system: {
    battery: {
      level: 87,
      status: "Charging",
      power_source: "AC Adapter",
      estimated_runtime: "6h 30m"
    },
    hardware: {
      memory: "16GB RAM",
      cpu: "Intel i7-12700K",
      gpu: "RTX 4080"
    },
    network: {
      connection: "Stable",
      latency: "12ms",
      bandwidth: "1Gbps"
    },
    security: {
      firewall: "Active",
      vpn: "Connected",
      updates: "Current"
    },
    performance: {
      cpu_usage: 23,
      memory_usage: 67,
      disk_usage: 45,
      network_load: 12
    },
    temperature: {
      cpu: 45,
      gpu: 52,
      system: 38
    }
  },
  skills: {
    programming_languages: [
      { name: "Python", percentage: 95, icon: "🐍" },
      { name: "JavaScript/TS", percentage: 90, icon: "⚡" },
      { name: "SQL", percentage: 88, icon: "🗄️" },
      { name: "Java", percentage: 85, icon: "☕" },
      { name: "C++", percentage: 80, icon: "⚙️" }
    ],
    ai_ml_technologies: [
      { name: "TensorFlow", percentage: 95, icon: "🤖" },
      { name: "PyTorch", percentage: 92, icon: "🔥" },
      { name: "LangChain", percentage: 90, icon: "🔗" },
      { name: "OpenAI API", percentage: 88, icon: "🧠" },
      { name: "Hugging Face", percentage: 85, icon: "🤗" }
    ],
    cloud_devops: [
      { name: "AWS", percentage: 90, icon: "☁️" },
      { name: "Docker", percentage: 88, icon: "🐳" },
      { name: "Kubernetes", percentage: 85, icon: "⚓" },
      { name: "CI/CD", percentage: 82, icon: "🔄" }
    ],
    frameworks_tools: [
      { name: "React/Next.js", percentage: 88, icon: "⚛️" },
      { name: "FastAPI", percentage: 90, icon: "🚀" },
      { name: "PostgreSQL", percentage: 85, icon: "🐘" },
      { name: "Redis", percentage: 80, icon: "🔴" }
    ]
  },
  projects: {
    ai_ml: [
      {
        name: "Autonomous AI Agent Framework",
        description: "Multi-agent system for autonomous decision making",
        tech: ["Python", "LangChain", "OpenAI"]
      },
      {
        name: "Multi-Modal RAG System",
        description: "Retrieval-augmented generation with multiple data types",
        tech: ["Python", "Transformers", "Vector DB"]
      }
    ],
    web_applications: [
      {
        name: "Real-time Analytics Dashboard",
        description: "Live data visualization and monitoring",
        tech: ["React", "D3.js", "WebSocket"]
      },
      {
        name: "Portfolio Website",
        description: "This interactive portfolio site",
        tech: ["React", "TypeScript", "xterm.js"]
      }
    ],
    data_science: [
      {
        name: "Predictive Analytics Models",
        description: "Time series forecasting and prediction",
        tech: ["Python", "Prophet", "Pandas"]
      }
    ],
    github_url: "https://github.com/amarshp",
  },
  achievements: {
    awards_recognition: [
      { title: "Top 1% Data Scientist", platform: "Kaggle", year: 2023 },
      { title: "Best Paper Award", conference: "ICML 2023", year: 2023 }
    ],
    github_stats: {
      repositories: 45,
      stars: 2500,
      forks: 800,
      contributions: 1200
    },
    project_metrics: {
      projects_completed: 50,
      clients_served: 25,
      revenue_generated: "$500K+",
      team_size_led: 15
    },
    certifications: [
      "AWS Solutions Architect",
      "Google Cloud Professional",
      "Microsoft Azure AI Engineer",
      "TensorFlow Developer"
    ],
    publications: {
      research_papers: 8,
      technical_blogs: 50,
      conference_talks: 20,
      open_source_contributions: 100
    }
  },
  faang_prep: {
    study_materials: [
      { name: "LeetCode Premium", description: "500+ problems solved", type: "Coding Practice" },
      { name: "System Design Primer", description: "Scalable architectures", type: "System Design" }
    ],
    focus_areas: [
      "Data Structures & Algorithms",
      "System Design & Architecture",
      "Machine Learning & AI",
      "Behavioral & Leadership"
    ],
    progress_tracking: {
      easy_problems: { solved: 150, total: 150 },
      medium_problems: { solved: 280, total: 350 },
      hard_problems: { solved: 70, total: 100 },
      system_design_scenarios: 25
    },
    interview_experience: [
      { company: "Google", stage: "Phone Screen", status: "Passed" },
      { company: "Meta", stage: "Onsite", status: "In Progress" }
    ],
    tips: [
      "Practice daily",
      "Focus on fundamentals",
      "Build real-world projects to stand out"
    ]
  },
  contact: {
    email: "amarsh.pedapati@gmail.com",
    resume: "/data/CV.pdf",
    professional_links: {
      linkedin: "https://www.linkedin.com/in/amarshp/",
      github: "https://github.com/amarshp",
      twitter: ""
    },
    blog_writing: {
      medium: "https://medium.com/@amarsh.pedapati",
      personal_blog: "https://alephzeroinvictus.blogspot.com"
    },
    content_creation: {
      youtube: "AI & ML Tutorials",
      twitch: "Live Coding Sessions"
    },
    social_media: {
      instagram: "https://www.instagram.com/amarshpedapati/",
      discord: ""
    },
    business: "Available for consulting, speaking, and collaboration.",
    leetcode: "https://leetcode.com/u/user3260SU/"
  },
  terminal: {
    prompt: "amarsh@agi-portfolio:~$",
    welcome_message: "AGI Terminal v3.9.0 - Amarsh Pedapati Portfolio System",
    help_text: "Type 'help' for available commands",
    system_status: "ONLINE",
    error_message: "Command not recognized. Type 'help' for available commands.",
    commands: {
      help: { description: "Show this help message", category: "navigation" },
      about: { description: "Display personal bio and background", category: "portfolio" },
      projects: { description: "List portfolio projects", category: "portfolio" },
      skills: { description: "Display technical skills and proficiency", category: "portfolio" },
      leetcode: { description: "Show LeetCode stats and rank", category: "resources" },
      achievements: { description: "Show professional achievements and metrics", category: "portfolio" },
      clear: { description: "Clear terminal screen", category: "system" },
      reboot: { description: "Reboot the entire UI and terminal system", category: "system" },
      diagnostics: { description: "Run system diagnostics", category: "system" }
    }
  }
};

class ConfigService {
  private config: PortfolioConfig | null = null;
  private isLoading = false;
  private loadPromise: Promise<PortfolioConfig> | null = null;

  /**
   * Load configuration from JSON file
   * @returns Promise<PortfolioConfig>
   */
  async loadConfig(): Promise<PortfolioConfig> {
    // Return cached config if already loaded
    if (this.config) {
      return this.config;
    }

    // Return existing promise if loading
    if (this.loadPromise) {
      return this.loadPromise;
    }

    // Start loading
    this.isLoading = true;
    this.loadPromise = this.fetchConfig();

    try {
      this.config = await this.loadPromise;
      // console.log('✅ Portfolio configuration loaded successfully'); // Removed for production cleanliness
      return this.config;
    } catch (error) {
      // console.error('❌ Failed to load portfolio configuration:', error); // Removed for production cleanliness
      // console.log('🔄 Using fallback configuration'); // Removed for production cleanliness
      this.config = fallbackConfig;
      return this.config;
    } finally {
      this.isLoading = false;
      this.loadPromise = null;
    }
  }

  /**
   * Fetch configuration from JSON file
   * @returns Promise<PortfolioConfig>
   */
  private async fetchConfig(): Promise<PortfolioConfig> {
    try {
      const response = await fetch('/src/data/config.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const config = await response.json();
      
      // Validate config structure
      if (!this.validateConfig(config)) {
        throw new Error('Invalid configuration structure');
      }
      
      return config as PortfolioConfig;
    } catch (error) {
      throw new Error(`Failed to fetch configuration: ${error}`);
    }
  }

  /**
   * Validate configuration structure
   * @param config - Configuration object to validate
   * @returns boolean
   */
  private validateConfig(config: unknown): config is PortfolioConfig {
    // Basic validation - check for required top-level keys
    const requiredKeys = ['profile', 'system', 'skills', 'projects', 'achievements', 'faang_prep', 'contact', 'terminal'];
    if (typeof config !== 'object' || config === null) return false;
    for (const key of requiredKeys) {
      if (!(key in (config as Record<string, unknown>))) {
        // console.warn(`Missing required config key: ${key}`); // Removed for production cleanliness
        return false;
      }
    }
    return true;
  }

  /**
   * Get current configuration
   * @returns PortfolioConfig | null
   */
  getConfig(): PortfolioConfig | null {
    return this.config;
  }

  /**
   * Check if configuration is loading
   * @returns boolean
   */
  isLoadingConfig(): boolean {
    return this.isLoading;
  }

  /**
   * Get profile information
   * @returns Profile config or fallback
   */
  getProfile() {
    return this.config?.profile || fallbackConfig.profile;
  }

  /**
   * Get system information
   * @returns System config or fallback
   */
  getSystem() {
    return this.config?.system || fallbackConfig.system;
  }

  /**
   * Get skills information
   * @returns Skills config or fallback
   */
  getSkills() {
    return this.config?.skills || fallbackConfig.skills;
  }

  /**
   * Get projects information
   * @returns Projects config or fallback
   */
  getProjects() {
    return this.config?.projects || fallbackConfig.projects;
  }

  /**
   * Get achievements information
   * @returns Achievements config or fallback
   */
  getAchievements() {
    return this.config?.achievements || fallbackConfig.achievements;
  }

  /**
   * Get FAANG prep information
   * @returns FAANG prep config or fallback
   */
  getFaangPrep() {
    return this.config?.faang_prep || fallbackConfig.faang_prep;
  }

  /**
   * Get contact information
   * @returns Contact config or fallback
   */
  getContact() {
    return this.config?.contact || fallbackConfig.contact;
  }

  /**
   * Get terminal configuration
   * @returns Terminal config or fallback
   */
  getTerminal() {
    return this.config?.terminal || fallbackConfig.terminal;
  }
}

// Export singleton instance
export const configService = new ConfigService();
export default configService; 