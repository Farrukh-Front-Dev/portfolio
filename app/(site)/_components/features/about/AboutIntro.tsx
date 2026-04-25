type Props = {
  title: string;
  description: string;
};

export default function AboutIntro({ title, description }: Props) {
  return (
    <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6
                     text-gray-900
                     dark:bg-gradient-to-r dark:from-white dark:to-gray-300
                     dark:bg-clip-text dark:text-transparent
                     animate-fadeInUp">
        {title}
      </h2>

      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fadeInUp animation-delay-100">
        {description}
      </p>
    </div>
  );
}
