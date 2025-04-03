document.addEventListener("DOMContentLoaded", function () {
  // Atharva Shukla's projects based on his resume
  const projects = [
    {
      title: "Explainable AI for Multi-Cancer Detection",
      description:
        "Research project on Quantum Neural Networks for multi-cancer classification and segregation with explainable AI models.",
      technologies: [
        "Python",
        "TensorFlow",
        "Quantum Neural Networks",
        "Explainable AI",
      ],
      image: "Images/image.png",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Image Processing for Polymetallic Nodule Detection",
      description:
        "AI-powered underwater object detection system using YOLOv7/YOLOv8 with 40% improved accuracy in low-visibility environments.",
      technologies: [
        "Python",
        "YOLOv7/YOLOv8",
        "OpenCV",
        "TensorFlow",
        "Image Processing",
      ],
      image: "Images/Nodules.jpg",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Enterprise Video Processor",
      description:
        "MP4 to HLS conversion system with adaptive streaming capabilities, increasing playback efficiency by 35%.",
      technologies: ["Node.js", "FFmpeg", "React.js", "Video.js", "HLS"],
      image: "Images/HLS.png",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Real-time Web Applications",
      description:
        "Scalable web applications with real-time communication features using Socket.io and React.js.",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      image: "Images/Web.jpeg",
      liveLink: "https://github.com/atharvashukla13/Talk---A---Tive",
      codeLink: "https://github.com/atharvashukla13/Talk---A---Tive",
    },
  ];

  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card glass";

    projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.technologies
                      .map((tech) => `<span class="project-tag">${tech}</span>`)
                      .join("")}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" class="btn btn-primary">
                        <i class="fas fa-link"></i> View Project
                    </a>
                    <a href="${project.codeLink}" class="btn btn-outline">
                        <i class="fab fa-github"></i> Code
                    </a>
                </div>
            </div>
        `;

    projectsContainer.appendChild(projectCard);
  });
});
