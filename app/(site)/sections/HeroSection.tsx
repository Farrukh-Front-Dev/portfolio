export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start max-w-5xl mx-auto px-4">
      <h1 className="text-5xl font-bold mb-6">
        I build clean, scalable web applications.
      </h1>

      <p className="text-lg text-gray-400 mb-8 max-w-xl">
        Full-stack developer focused on delivering high-quality frontend and backend solutions.
      </p>

      <a
        href="#projects"
        className="px-6 py-3 bg-white text-black font-medium rounded-md"
      >
        View Projects
      </a>
    </section>
  );
}
