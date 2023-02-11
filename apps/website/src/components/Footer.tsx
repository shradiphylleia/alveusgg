import React from "react";
import Link from "next/link";
import Socials from "./content/Socials"

export const Footer: React.FC = () => {
  return (
    <>
      <Socials />

      <footer className="bg-gray-800 py-4 md:py-2 px-2 md:px-0 text-gray-500">
        <div className="container mx-auto">
          <ul className="flex flex-wrap items-center justify-between">
            <li className="basis-full md:basis-1/3 p-2">
              <p>
                Built by the Alveus.gg team and community,
                <br/>
                supported by the Alveus team.
              </p>
            </li>
            <li className="basis-full md:basis-1/3 p-2 md:text-center">
              <Link
                className="underline decoration-gray-400 hover:text-gray-300 transition-colors"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="basis-full md:basis-1/3 p-2 md:text-right">
              <Link
                className="underline decoration-gray-400 hover:text-gray-300 transition-colors"
                href="https://www.alveussanctuary.org"
                target="_blank"
                rel="noreferrer"
              >
                alveussanctuary.org
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
