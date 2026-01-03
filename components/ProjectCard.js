import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  const { title, description, image, url } = project;
  const isClickable = url && url !== '#';

  return (
    <div className="group border-b border-gray-100 dark:border-gray-800 pb-8 last:border-0">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Screenshot */}
        <div className="flex-shrink-0 w-full md:w-64 lg:w-72">
          <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:shadow-md transition-shadow duration-300">
            {image ? (
              <Image
                src={image}
                alt={`${title} screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Title Row - with View Project or Coming Soon on the right */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
            <h2 className="text-2xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {isClickable ? (
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>

            {/* View Project link or Coming Soon badge */}
            {isClickable ? (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline font-medium text-sm whitespace-nowrap"
              >
                View Project
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            ) : (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 whitespace-nowrap">
                Coming Soon
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 flex-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
