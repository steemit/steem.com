import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAngleRight, 
  faChevronRight, 
  faEnvelope,
  faArrowRight,
  faArrowLeft,
  faDownload,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

interface IconProps {
  name: 'angle-right' | 'chevron-right' | 'envelope' | 'arrow-right' | 'arrow-left' | 'download' | 'external-link';
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
}

const iconMap = {
  'angle-right': faAngleRight,
  'chevron-right': faChevronRight,
  'envelope': faEnvelope,
  'arrow-right': faArrowRight,
  'arrow-left': faArrowLeft,
  'download': faDownload,
  'external-link': faExternalLinkAlt,
};

export default function Icon({ name, className = '', size = 'sm' }: IconProps) {
  const icon = iconMap[name];
  
  if (!icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <FontAwesomeIcon 
      icon={icon} 
      className={className}
      size={size}
    />
  );
}
