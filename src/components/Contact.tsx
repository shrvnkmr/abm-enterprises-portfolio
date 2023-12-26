import Image from "next/image";
import SocialMediaLink from "~/components/SocialLink";
import {
  BsFillEnvelopeFill,
  BsFillTelephoneOutboundFill,
  BsPersonFill,
} from "react-icons/bs";
import contactVector from "../../public/contact-us.svg";
import { textContent } from "~/content/textContent";
import Link from "next/link";

const Contact = () => {
  const { contact, footer } = textContent;
  const { title, description, tel, alternateTel, email } = contact;
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-gray-700 bg-opacity-25 px-8"
    >
      <h3 className="pt-8 text-xl font-semibold">{title}</h3>
      <div className="flex flex-col gap-0 lg:flex-row lg:gap-16">
        <Image
          src={contactVector}
          className="mx-auto"
          alt="Business illustrations by Storyset"
          width={400}
        />
        <span className="flex flex-col justify-center gap-8 pb-8">
          <p className="text-md py-2 font-extralight">{description}</p>
          <div className="text-md mt-4 flex flex-col gap-2 font-extralight">
            <span className="flex items-center gap-3">
              <BsPersonFill />
              <p className="">A C Ashok</p>
            </span>
            <span className="flex items-center gap-3">
              <BsFillTelephoneOutboundFill />
              <p>
                <Link
                  href={footer.tel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tel}
                </Link>
              </p>
              {", "}
              <p>
                <Link
                  href={footer.alternateTel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {alternateTel}
                </Link>
              </p>
            </span>
            <span className="flex items-center gap-3">
              <BsFillEnvelopeFill />
              <p>
                <Link
                  href={footer.gmailURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {email}
                </Link>
              </p>
            </span>
          </div>
        </span>
      </div>
    </section>
  );
};

export default Contact;
