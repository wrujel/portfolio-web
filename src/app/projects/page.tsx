"use client";

import Projects from "@/components/Projects/Projects";
import Transition from "@/components/Transition/Transition";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Transition />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
