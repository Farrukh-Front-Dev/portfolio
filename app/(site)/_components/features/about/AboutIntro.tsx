type Props = {
  title: string;
  description: string;
};

export default function AboutIntro({ title, description }: Props) {
  return (
    <div className="mb-20 max-w-3xl">
      <h2 className="text-4xl font-bold mb-6
                     bg-linear-to-r from-gray-900 to-gray-600
                     dark:from-white dark:to-gray-300
                     bg-clip-text text-transparent">
        {title}
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
