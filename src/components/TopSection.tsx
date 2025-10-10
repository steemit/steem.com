import Link from "next/link";
import Icon from "./Icon";

interface AppItem {
  title: string;
  description: string;
  href: string;
  rank: number;
}

interface TopAppsSectionProps {
  title: string;
  subtitle: string;
  apps: AppItem[];
  statsLink: string;
  statsLinkText: string;
  className?: string;
}

export default function TopAppsSection({
  title,
  subtitle,
  apps,
  statsLink,
  statsLinkText,
  className = ""
}: TopAppsSectionProps) {
  return (
    <section className={`bg-offwhite py-12 lg:py-16 xl:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="py-8">
              <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                {title}
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                {subtitle}
              </p>
              <Link 
                href={statsLink} 
                className="btn btn-blue hidden md:inline-block"
                target="_blank"
              >
                {statsLinkText}
              </Link>
            </div>
          </div>
          <div>
            <div className="space-y-0">
              {apps.map((app, index) => (
                <Link 
                  key={index}
                  href={app.href} 
                  className="flex items-center justify-between py-3 border-b border-gray-200 hover:translate-x-2 transition-transform"
                  target="_blank"
                >
                  <div>
                    <h3 className="text-blue text-xl font-normal mb-0">
                      {app.rank}. {app.title}
                    </h3>
                    <p className="text-gray-600 mb-0">{app.description}</p>
                  </div>
                  <Icon name="angle-right" className="text-lightblue" />
                </Link>
              ))}
            </div>
            <Link 
              href={statsLink} 
              className="btn btn-blue mt-4 md:hidden"
              target="_blank"
            >
              {statsLinkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
