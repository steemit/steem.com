import Image from "next/image";
import Link from "next/link";

interface ResourceItem {
  title: string;
  description: string;
  href: string;
  alt: string;
  iconSrc?: string;
}

interface ResourcesSectionProps {
  title: string;
  subtitle: string;
  resources: ResourceItem[];
  className?: string;
}

export default function ResourcesSection({ 
  title, 
  subtitle, 
  resources, 
  className = "" 
}: ResourcesSectionProps) {
  return (
    <section className={`py-12 lg:py-14 xl:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 place-items-center mb-8">
          <div className="col-span-12 md:col-span-6 xl:col-span-4 xl:col-start-5 text-center">
            <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
              {title}
            </h2>
            <p className="text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="text-center flex flex-col justify-between">
              <div>
                <figure className="figure-circle">
                  <Image
                    className="img-fluid img-icon"
                    src={resource.iconSrc || "/images/Steem_File.png"}
                    alt={resource.alt}
                    width={0}
                    height={60}
                    style={{ width: 'auto' }}
                  />
                </figure>
                <h3 className="text-blue text-xl font-bold mb-3">
                  {resource.title}
                </h3>
                <p className="px-4 md:px-3 lg:px-4 xl:px-0 text-grey">
                  {resource.description}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href={resource.href}
                  className="btn btn-blue"
                  download
                >
                  Download PDF
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
