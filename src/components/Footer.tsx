import SocialMediaLink from "~/components/SocialLink";
import {
  BsWhatsapp,
  BsFillTelephoneOutboundFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import Link from "next/link";
import { textContent } from "~/content/textContent";
const Footer = () => {
  const { designedByText, devName, copyrightText, tel, whatsappURL, gmailURL } =
    textContent.footer;
  return (
    <footer className="border-primary-medium flex w-full flex-col items-center justify-between gap-4 border-t p-8 text-sm font-extralight lg:flex-row">
      <span className="flex gap-8 text-xl md:order-2">
        <SocialMediaLink url={tel} icon={BsFillTelephoneOutboundFill} />
        <SocialMediaLink url={whatsappURL} icon={BsWhatsapp} />
        <SocialMediaLink url={gmailURL} icon={BsFillEnvelopeFill} />
      </span>
      <h4 className="text-sm md:order-1">
        {designedByText}{" "}
        <Link
          href={"https://shrvnkmr.vercel.app/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {devName}
        </Link>
      </h4>
      <h4 className="md:order-3">{copyrightText}</h4>
    </footer>
  );
};

export default Footer;
