
export const Projects = () => {
  const projects = [
    {
      title: "NutriMe",
      description: "Gerenciamento de alimentação e nutrição, permite que os usuários registrem refeições, monitorem metas nutricionais e tenham acompanhamento nutricional.",
      tags: ["React",
        "Typescript",
        "Node.js",
        "Axios",
        "PostgreSQL",
        "TailwindCSS"],
      url: "https://github.com/crewTech-ABP/NutriMe",
      image: "/nutrime.png"
    },
    {
      title: "Qli-mate",
      description: "Plataforma para monitoramento climático e prevenção de riscos associados a eventos de vento extremo.",
      tags: ["Next.js", "React", "TailwindCSS", "MongoDB", "Shadcn"],
      url: "https://github.com/storm-access-abp/qli-mate",
      image: "/qli-mate.jpg"
    },
    {
      title: "Golden Hive Solutions",
      description: "Sistema web didático para apresentar a metodologia ágil Scrum.",
      tags: ["Javascript", "HTML5", "CSS3", "PostgreSQL"],
      url: "https://github.com/lucasroqe/golden-hive",
      image: "/golden-hive.jpg"
    },
    {
      title: "Spendo",
      description: "Permite o acompanhamento de despesas, categorização e visualização de hábitos financeiros por meio de gráficos intuitivos.",
      tags: ["Next.js",
        "Typescript",
        "SQLite",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "BetterAuth"],
      url: "https://github.com/lucasroqe/taiz",
      image: "/spendo.jpg"
    },
    {
      title: "Taiz",
      description: "Payroll and HR Management built for Indonesia Startup.",
      tags: ["Next.js",
        "React",
        "Typescript",
        "SQLite",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "BetterAuth",],
      url: "https://github.com/lucasroqe/taiz",
      image: "/taiz.png"
    },
    {
      title: "Auth Form",
      description: "Formulário de autenticação com login/registro pronto para utilizar.",
      tags: ["Next.js",
        "Typescript",
        "SQLite",
        "Prisma",
        "Auth.js",
        "Zod",
        "Shadcn UI"],
      url: "https://github.com/lucasroqe/auth-form",
      image: "/auth-form.jpg"
    },
  ];

  return (
    <section id="projects" className="py-16 border-t border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-medium text-gray-900">Projetos</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <h3 className="font-medium text-gray-900 mb-2">
              <a
                href={project.url}
                className="hover:text-blue-600 transition-colors hover:underline"
              >
                {project.title}
              </a>
            </h3>
            <div>
              <img src={project.image} alt="" />
            </div>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
