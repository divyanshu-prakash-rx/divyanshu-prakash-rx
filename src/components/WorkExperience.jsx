import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronDown, Building } from 'lucide-react';

const WorkExperience = ({ mode }) => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading a team of developers in building scalable web applications",
      achievements: [
        "Implemented microservices architecture reducing system load by 40%",
        "Led a team of 5 developers across 3 major projects",
        "Introduced automated testing improving code coverage to 90%",
        "Mentored junior developers and conducted technical interviews"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
      companyLogo: "/api/placeholder/100/100"
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      duration: "2020 - 2022",
      location: "New York, NY",
      description: "Developed and maintained enterprise-level web applications",
      achievements: [
        "Built RESTful APIs serving 1M+ requests daily",
        "Reduced page load time by 60% through optimization",
        "Implemented real-time analytics dashboard",
        "Collaborated with UX team to improve user experience"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "GCP"],
      companyLogo: "/api/placeholder/100/100"
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "StartUp Hub",
      duration: "2019 - 2020",
      location: "Austin, TX",
      description: "Contributed to various client projects and internal tools",
      achievements: [
        "Developed responsive web applications using React",
        "Implemented payment gateway integration",
        "Created automated deployment pipeline",
        "Participated in daily scrum meetings and sprint planning"
      ],
      technologies: ["React", "JavaScript", "CSS", "Git", "Jenkins"],
      companyLogo: "/api/placeholder/100/100"
    }
  ];

  return (
    <div className={`min-h-screen p-8 `}>
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className={`text-4xl font-bold mb-4 ${mode === 'light' ? 'text-gray-800' : 'text-white'}`}>
          Work Experience
        </h1>
        <p className={`text-lg ${mode === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
          My professional journey and achievements
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`mb-8 transform transition-all duration-300 hover:scale-102 ${
              expandedId === exp.id ? 'scale-102' : ''
            }`}
          >
            <div 
              className={`relative p-6 rounded-lg shadow-lg cursor-pointer ${
                mode === 'light' ? 'bg-white' : 'bg-gray-800'
              }`}
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className={`absolute left-1/2 bottom-0 w-1 h-8 ${
                  mode === 'light' ? 'bg-gray-200' : 'bg-gray-700'
                } transform translate-y-full`} />
              )}

              {/* Experience Card Content */}
              <div className="flex items-start gap-6">
                {/* Company Logo */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full overflow-hidden ${
                  mode === 'light' ? 'bg-gray-100' : 'bg-gray-700'
                }`}>
                  <img 
                    src={exp.companyLogo} 
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Main Content */}
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${
                        mode === 'light' ? 'text-gray-800' : 'text-white'
                      }`}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4" />
                        <span className={mode === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className={mode === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className={mode === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={`mt-3 ${mode === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                    {exp.description}
                  </p>

                  {/* Expanded Content */}
                  <div className={`mt-4 transition-all duration-300 overflow-hidden ${
                    expandedId === exp.id ? 'max-h-96' : 'max-h-0'
                  }`}>
                    <div className="space-y-4">
                      <div>
                        <h4 className={`font-semibold mb-2 ${
                          mode === 'light' ? 'text-gray-700' : 'text-gray-200'
                        }`}>
                          Key Achievements
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className={mode === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-2 ${
                          mode === 'light' ? 'text-gray-700' : 'text-gray-200'
                        }`}>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className={`px-3 py-1 rounded-full text-sm ${
                                mode === 'light' 
                                  ? 'bg-gray-100 text-gray-700' 
                                  : 'bg-gray-700 text-gray-200'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button 
                    className={`mt-4 flex items-center gap-2 text-sm ${
                      mode === 'light' ? 'text-gray-600' : 'text-gray-300'
                    }`}
                  >
                    <ChevronDown 
                      className={`w-4 h-4 transform transition-transform ${
                        expandedId === exp.id ? 'rotate-180' : ''
                      }`}
                    />
                    {expandedId === exp.id ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;