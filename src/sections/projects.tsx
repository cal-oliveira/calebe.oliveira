import { ExternalLink, Github, Eye } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ATS Formatter",
      description:
        "Formatador de curriculo que usa IA para transformar curriculos em ATS Friendly.",
      image:
        "https://github.com/cal-oliveira/ats-formatter/blob/main/screenshots/img.png?raw=true",
      technologies: [
        "NextJS",
        "TypeScript",
        "ShadCn",
        "Tailwind CSS",
        "Gemini API",
      ],
      liveUrl: "https://ats-formatter.vercel.app/",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Landing Page",
      description:
        "LP para FilmMaker profissional mostrando seus principais trabalhos.",
      image: "",
      video: "/videos/demo-lp.mp4",
      technologies: ["Vite", "TypeScript", "Tailwind CSS", "ShadCn"],
      liveUrl: "https://lp-lucas-oliver.vercel.app/",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Jogo da memória",
      description:
        "Jogo desenvolido com intuito de praticar minhas habilidades com React Native.",
      image:
        "https://github.com/cal-oliveira/Jogo-da-memoria-React-Native/raw/main/screenshots/screen2.png?raw=true",
      video: "/videos/demo-lp.mp4",
      technologies: ["React Native", "TypeScript", "TailwindCSS"],
      liveUrl: "",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Airbnb",
      description:
        "Projeto Front End com o intuito de copiar as principais características do site Airbnb.",
      image:
        "https://github.com/cal-oliveira/Front-End-AIRBNB/raw/main/screenshots/Airb%20-%20Google%20Chrome%2025_02_2025%2013_57_44.png?raw=true",
      technologies: ["Angular", "TailWindCSS", "TS"],
      liveUrl: "",
      githubUrl: "https://github.com/cal-oliveira/Front-End-AIRBNB",
      featured: false,
    },
    {
      id: 5,
      title: "PokeNext",
      description: "Poke agenda com mais de 400 pokemons catalogados.",
      image:
        "https://github.com/cal-oliveira/my-portfolio/blob/main/screenshots/pokedexDemo.gif?raw=true",
      technologies: ["Next.js", "API", "Tailwind CSS"],
      liveUrl: "https://pokenext-gold.vercel.app/",
      githubUrl: "https://github.com/cal-oliveira/pokenext",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Meus Projetos
              </span>
            </h2>
            <p className="text-xl text-[#6C7A89] max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              Projetos em Destaque
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-300/30"
                >
                  <div className="relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <video muted autoPlay loop src={project.video}></video>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center space-x-2 px-4 py-2 bg-[#6C7A89]/80 backdrop-blur-sm rounded-full text-[#F5F5F5] hover:bg-[#6C7A89] transition-colors"
                        >
                          <Eye size={16} />
                          <span>Ver site</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[#6C7A89] mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#6C7A89]/20 text-black rounded-full text-sm font-medium border border-[#6C7A89]/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              Outros Projetos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#6C7A89]/30"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#6C7A89] text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-900/80 text-[#F5F5F5] rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-gray-900/50 text-[#F5F5F5] rounded text-xs font-medium">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-3">
                      {project.liveUrl === "" ? (
                        <span className="text-sm text-gray-300">
                          no preview
                        </span>
                      ) : (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center space-x-1 text-[#6C7A89] hover:text-gray-950 transition-colors text-sm"
                        >
                          <ExternalLink size={14} />
                          <span>Preview</span>
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center space-x-1 text-[#6C7A89] hover:text-gray-950 transition-colors text-sm"
                      >
                        <Github size={14} />
                        <span>Código</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
