// Hidden portfolio sections that can be triggered by terminal commands

const PortfolioSections = () => {
  return (
    <>
      {/* About Section */}
      <div id="about-content" className="hidden p-6 bg-card border border-neon-cyan/30 rounded-lg">
        <h2 className="font-mono text-xl font-bold mb-4 text-neon-cyan">About</h2>
        <div className="space-y-4 font-mono text-sm">
          <p>
            🎓 <strong>Education:</strong> B.Tech in Artificial Intelligence from IIT Hyderabad (2019)
            <br />
            Specialized in Machine Learning, Deep Learning, and Natural Language Processing
          </p>
          <p>
            🏢 <strong>Professional Experience:</strong> Senior Data Scientist with Fortune 500 consulting experience
            <br />
            Led end-to-end ML pipeline implementations and agentic AI solutions
          </p>
          <p>
            🤖 <strong>Expertise:</strong> Passionate about building intelligent systems with focus on:
            <br />
            • Retrieval-Augmented Generation (RAG) architectures
            <br />
            • Large Language Model optimization
            <br />
            • Multi-agent AI systems
            <br />
            • Production-ready ML deployment
          </p>
        </div>
      </div>

      {/* Projects Showcase */}
      <div id="projects-content" className="hidden p-6 bg-card border border-neon-cyan/30 rounded-lg">
        <h2 className="font-mono text-xl font-bold mb-4 text-neon-cyan">Projects Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/20 rounded-lg border border-neon-cyan/20">
            <h3 className="font-mono font-bold text-neon-magenta">Enterprise RAG System</h3>
            <p className="text-sm mt-2">Multi-modal RAG architecture for Fortune 500 client</p>
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">Python</span>
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">LangChain</span>
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">Pinecone</span>
            </div>
          </div>
          <div className="p-4 bg-muted/20 rounded-lg border border-neon-cyan/20">
            <h3 className="font-mono font-bold text-neon-magenta">NLP Pipeline Orchestrator</h3>
            <p className="text-sm mt-2">Automated text processing with Apache Airflow</p>
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">Airflow</span>
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">Docker</span>
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">Kubernetes</span>
            </div>
          </div>
          <div className="p-4 bg-muted/20 rounded-lg border border-neon-cyan/20">
            <h3 className="font-mono font-bold text-neon-magenta">Computer Vision MLOps</h3>
            <p className="text-sm mt-2">Real-time object detection deployment on AWS</p>
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">PyTorch</span>
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">AWS</span>
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">MLflow</span>
            </div>
          </div>
          <div className="p-4 bg-muted/20 rounded-lg border border-neon-cyan/20">
            <h3 className="font-mono font-bold text-neon-magenta">Multi-Agent Research Tool</h3>
            <p className="text-sm mt-2">Collaborative AI agents for data analysis</p>
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">CrewAI</span>
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">OpenAI</span>
              <span className="px-2 py-1 bg-neon-cyan/20 rounded text-xs">Streamlit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Tech Stack */}
      <div id="skills-content" className="hidden p-6 bg-card border border-neon-cyan/30 rounded-lg">
        <h2 className="font-mono text-xl font-bold mb-4 text-neon-cyan">Skills & Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">Languages</h3>
            <ul className="space-y-1 text-sm">
              <li>• Python (Expert)</li>
              <li>• Scala (Advanced)</li>
              <li>• Java (Intermediate)</li>
              <li>• SQL (Expert)</li>
              <li>• R (Intermediate)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">ML/AI Frameworks</h3>
            <ul className="space-y-1 text-sm">
              <li>• TensorFlow / Keras</li>
              <li>• PyTorch</li>
              <li>• scikit-learn</li>
              <li>• Hugging Face</li>
              <li>• LangChain</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">Cloud & DevOps</h3>
            <ul className="space-y-1 text-sm">
              <li>• AWS (SageMaker, Lambda)</li>
              <li>• Google Cloud Platform</li>
              <li>• Docker & Kubernetes</li>
              <li>• Apache Airflow</li>
              <li>• MLflow</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">Big Data</h3>
            <ul className="space-y-1 text-sm">
              <li>• Apache Spark</li>
              <li>• Kafka</li>
              <li>• Elasticsearch</li>
              <li>• Redis</li>
              <li>• Apache Beam</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">Databases</h3>
            <ul className="space-y-1 text-sm">
              <li>• PostgreSQL</li>
              <li>• MongoDB</li>
              <li>• BigQuery</li>
              <li>• Snowflake</li>
              <li>• Vector DBs (Pinecone)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">Specialized</h3>
            <ul className="space-y-1 text-sm">
              <li>• RAG Architectures</li>
              <li>• Prompt Engineering</li>
              <li>• Multi-agent Systems</li>
              <li>• A/B Testing</li>
              <li>• Model Monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAANG Interview Preparation */}
      <div id="faang-prep-content" className="hidden p-6 bg-card border border-neon-cyan/30 rounded-lg">
        <h2 className="font-mono text-xl font-bold mb-4 text-neon-cyan">FAANG Interview Preparation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">System Design Examples</h3>
            <ul className="space-y-1 text-sm">
              <li>• Design a recommendation system for Netflix</li>
              <li>• Build a scalable ML training infrastructure</li>
              <li>• Design real-time fraud detection system</li>
              <li>• Architecture for document search engine</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">Model Evaluation Strategies</h3>
            <ul className="space-y-1 text-sm">
              <li>• Cross-validation techniques</li>
              <li>• A/B testing for ML models</li>
              <li>• Online learning evaluation</li>
              <li>• Bias detection and mitigation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">Competitive Programming</h3>
            <ul className="space-y-1 text-sm">
              <li>• Codeforces Rating: 1847 (Expert)</li>
              <li>• LeetCode: 2000+ problems solved</li>
              <li>• Google Code Jam participant</li>
              <li>• Specialized in graph algorithms</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications & Publications */}
      <div id="certifications-content" className="hidden p-6 bg-card border border-neon-cyan/30 rounded-lg">
        <h2 className="font-mono text-xl font-bold mb-4 text-neon-cyan">Certifications & Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">Certifications (12)</h3>
            <ul className="space-y-1 text-sm">
              <li>🏆 AWS Certified ML Engineer</li>
              <li>🏆 Google Cloud Professional ML Engineer</li>
              <li>🏆 TensorFlow Developer Certificate</li>
              <li>🏆 Databricks Certified Developer</li>
              <li>🏆 Kubernetes Administrator (CKA)</li>
              <li>🏆 And 7 more...</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">Publications (5)</h3>
            <ul className="space-y-2 text-sm">
              <li>📄 "Efficient RAG for Enterprise Knowledge Bases" - ICLR 2024</li>
              <li>📄 "Multi-Agent Collaborative Learning" - NeurIPS 2023</li>
              <li>📄 "Optimizing LLM Inference at Scale" - MLSys 2023</li>
              <li>📄 "Real-time Anomaly Detection" - KDD 2022</li>
              <li>📄 "Graph Neural Networks for Recommendation" - SIGIR 2022</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-mono font-bold text-neon-magenta mb-2">Blog & Medium</h3>
          <p className="text-sm">Regular contributor to ML and AI communities with 50+ technical articles</p>
        </div>
      </div>

      {/* Personal Projects & Blog */}
      <div id="personal-projects-content" className="hidden p-6 bg-card border border-neon-cyan/30 rounded-lg">
        <h2 className="font-mono text-xl font-bold mb-4 text-neon-cyan">Personal Projects & Blog</h2>
        <div className="space-y-4">
          <div className="p-4 bg-muted/20 rounded-lg">
            <h3 className="font-mono font-bold text-neon-magenta">GitHub Repositories</h3>
            <p className="text-sm mt-2">2,400+ stars across 34+ repositories</p>
            <ul className="space-y-1 text-sm mt-2">
              <li>🌟 awesome-rag-architectures (1.2k stars)</li>
              <li>🌟 ml-deployment-patterns (800 stars)</li>
              <li>🌟 competitive-programming-solutions (400 stars)</li>
            </ul>
          </div>
          <div className="p-4 bg-muted/20 rounded-lg">
            <h3 className="font-mono font-bold text-neon-magenta">Technical Blog</h3>
            <p className="text-sm mt-2">arjunreddy.blogspot.com - 50+ technical articles</p>
            <ul className="space-y-1 text-sm mt-2">
              <li>📝 "Building Production RAG Systems"</li>
              <li>📝 "LLM Fine-tuning Best Practices"</li>
              <li>📝 "MLOps with Apache Airflow"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Personal Interests */}
      <div id="interests-content" className="hidden p-6 bg-card border border-neon-cyan/30 rounded-lg">
        <h2 className="font-mono text-xl font-bold mb-4 text-neon-cyan">Personal Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">🏃‍♂️ Marathon Running</h3>
            <ul className="space-y-1 text-sm">
              <li>• 6 marathons completed</li>
              <li>• Best time: 3:42:15</li>
              <li>• Boston Marathon qualifier</li>
              <li>• Running streak: 365 days</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">🧩 Speedcubing</h3>
            <ul className="space-y-1 text-sm">
              <li>• 3x3 PB: 12.47 seconds</li>
              <li>• 4x4 PB: 58.32 seconds</li>
              <li>• WCA competitor</li>
              <li>• Algorithm optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-neon-magenta mb-2">📚 Reading</h3>
            <ul className="space-y-1 text-sm">
              <li>• 50+ books per year</li>
              <li>• Sci-fi enthusiast</li>
              <li>• Technical literature</li>
              <li>• Philosophy & AI ethics</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSections;