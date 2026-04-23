type Props = {
  title: string;
  description: string;
};

export default function AboutIntro({ title, description }: Props) {
  return (
    <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6
                     bg-gradient-to-r from-gray-900 to-gray-600
                     dark:from-white dark:to-gray-300
                     bg-clip-text text-transparent">
        {title}
      </h2>

      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
