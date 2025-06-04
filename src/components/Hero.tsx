
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="py-16">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">👋</span>
            <h1 className="text-3xl font-medium text-gray-900">
              Olá, me chamo Lucas!
            </h1>
          </div>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Estudante em Desenvolvimento de Software.
            </p>
          </div>
          
          <div className="flex gap-4 mt-8">
            <a 
              href="#" 
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="lg:w-80">
          <img 
            src="" 
            alt="Foto Lucas" 
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
