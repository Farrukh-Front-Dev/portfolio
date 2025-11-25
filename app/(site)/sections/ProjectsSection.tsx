import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-32 max-w-5xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-12 tracking-tight">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Project Item */}
        <div className="space-y-4">
          <Image
            src="/vercel.svg"
            alt="Project 1"
            width={600}
            height={400}
            className="rounded-lg border border-white/10"
          />
          <h3 className="text-xl font-semibold">Project Title</h3>
          <p className="text-gray-400 text-sm">
            Short description of the project. Explain tech stack and purpose.
          </p>
        </div>

      </div>
    </section>
  );
}
