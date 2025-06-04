
export const Projects = () => {
  const projects = [
    {
      title: "Devaradise.com",
      description: "A blog that sharing web development and many tutorial.",
      tags: ["Blog"],
      url: "#"
    },
    {
      title: "Sellercraft App",
      description: "An Ecommerce omnichannel platform built in Southeast Asia.",
      tags: ["ECommerce", "Saas"],
      url: "#"
    },
    {
      title: "Gaji.id App",
      description: "Payroll and HR Management built for Indonesia Startup.",
      tags: ["HRIS", "Saas"],
      url: "#"
    },
    {
      title: "Gaji.id App",
      description: "Payroll and HR Management built for Indonesia Startup.",
      tags: ["HRIS", "Saas"],
      url: "#"
    },
    {
      title: "Gaji.id App",
      description: "Payroll and HR Management built for Indonesia Startup.",
      tags: ["HRIS", "Saas"],
      url: "#"
    },
    {
      title: "Gaji.id App",
      description: "Payroll and HR Management built for Indonesia Startup.",
      tags: ["HRIS", "Saas"],
      url: "#"
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
