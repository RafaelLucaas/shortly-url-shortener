import Image from "next/image";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter
} from "react-icons/bs";

export function Footer() {
  return (
    <footer className="bg-neutralverydarkviolet">
      <div className="flex flex-col items-center py-16 lg:flex-row lg:justify-around bg-neutralverydarkviolet lg:items-start">
        <div className="flex items-center h-8 mb-12">
          <Link href="#">
            <Image
              priority={true}
              src="logo-white.svg"
              width="140"
              height="36"
              alt="Shortly logo"
              className="w-auto h-auto"
            />
          </Link>
        </div>
        <div className="text-lg text-center flex gap-10 flex-col lg:flex-row lg:gap-16 lg:text-start text-white font-[500]">
          <div>
            <span>Features</span>
            <ul className="flex flex-col gap-2 mt-5 text-neutralgray">
              <Link href="#">
                <li>Link Shortening</li>
              </Link>
              <Link href="#">
                <li>Branded Links</li>
              </Link>
              <Link href="#">
                <li>Analytics</li>
              </Link>
            </ul>
          </div>
          <div>
            <span>Resources</span>
            <ul className="flex flex-col gap-2 mt-5 text-neutralgray">
              <Link href="#">
                <li>Blog</li>
              </Link>
              <Link href="#">
                <li>Developers</li>
              </Link>
              <Link href="#">
                <li>Support</li>
              </Link>
            </ul>
          </div>
          <div>
            <span>Company</span>
            <ul className="flex flex-col gap-2 mt-5 text-neutralgray">
              <Link href="#">
                <li>About</li>
              </Link>
              <Link href="#">
                <li>Our Team</li>
              </Link>
              <Link href="#">
                <li>Careers</li>
              </Link>
              <Link href="#">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12 text-white lg:mt-0">
          <ul className="flex gap-7">
            <Link href="#">
              <li>
                {" "}<BsFacebook className="w-8 h-8" />{" "}
              </li>
            </Link>
            <Link href="#">
              <li>
                {" "}<BsTwitter className="w-8 h-8" />{" "}
              </li>
            </Link>
            <Link href="#">
              <li>
                {" "}<BsPinterest className="w-8 h-8" />{" "}
              </li>
            </Link>
            <Link href="#">
              <li>
                {" "}<BsInstagram className="w-8 h-8" />{" "}
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-full px-16 pb-6 text-center text-white">
        <p>
          This page is a challenge made by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"
            target="_blank"
            className="transition-all duration-150 text-primarycyan hover:brightness-75"
          >
            Front-End Mentor
          </a>
        </p>
      </div>
    </footer>
  );
}
