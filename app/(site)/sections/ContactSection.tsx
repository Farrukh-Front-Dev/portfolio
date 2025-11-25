export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 max-w-5xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-8 tracking-tight">
        Contact
      </h2>

      <p className="text-gray-400 mb-6">
        You can reach me through the links below:
      </p>

      <div className="flex flex-col gap-2 text-sm">
        <a
          href="mailto:farrukh@example.com"
          className="underline"
        >
          Email
        </a>

        <a
          href="https://t.me/Farrukh_Djumayev"
          target="_blank"
          className="underline"
        >
          Telegram
        </a>

        <a
          href="https://www.linkedin.com/in/farrukhdjumayev"
          target="_blank"
          className="underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
