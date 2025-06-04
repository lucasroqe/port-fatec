
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { RecentPosts } from "@/components/RecentPosts";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Skills } from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        <Hero />
        <About />
        <Projects />
        {/* <Skills/> */}
        {/* <RecentPosts /> */}
        <Contact />
      </div>
    </div>
  );
};

export default Index;
