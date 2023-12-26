import Link from "next/link";
import { ElementType } from "react";

interface SocialLinkProps {
  url: string;
  icon: ElementType;
}

const SocialMediaLink = ({ url, icon: Icon }: SocialLinkProps) => {
  return (
    <Link href={url} rel="noopener" target="_blank">
      <Icon className="hover:text-primary-medium cursor-pointer" />
    </Link>
  );
};

export default SocialMediaLink;
