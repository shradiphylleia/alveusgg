import { type NextPage } from "next";
import React from "react";

import Section from "@/components/content/Section";
import Heading from "@/components/content/Heading";
import People from "@/components/content/People";
import Meta from "@/components/content/Meta";
import { Lightbox, Preview } from "@/components/content/YouTube";

import connorObrienImage from "@/assets/people/connor-obrien.jpg";
import kaylaJacksonImage from "@/assets/people/kayla-jackson.jpg";
import ellaRocksImage from "@/assets/people/ella-rocks.jpg";

const staff = {
  connor: {
    image: connorObrienImage,
    name: "Connor O'Brien",
    title: "Operations Manager",
    description: (
      <>
        <p>
          Connor has volunteered and worked for many wildlife organizations,
          most notably the American Eagle Foundation and the Alaska Wildlife
          Conservation Center. He has taken his love of conservation and
          technology, combined it, and started helping many conservation
          organizations around the country develop and scale large conservation
          projects.
        </p>
        <p className="mt-4">
          There is no better place to utilize technology for conservation than
          Alveus. Connor believes Alveus will set the standard for online
          education and drive significant impact and reach for conservation
          education online.
        </p>
      </>
    ),
  },
  kayla: {
    image: kaylaJacksonImage,
    name: "Kayla Jackson",
    title: "Animal Care & Training Manager",
    description: (
      <>
        <p>
          Kayla graduated from college with a degree in biology and a desire to
          see the world. Her travels eventually found her in Alaska where she
          realized that animal care and conservation was a cause worth staying
          for. Since Alaska she has traveled to Nepal where she developed an
          unparalleled love and respect for vultures. That interest in birds of
          prey took her to Tennessee and the American Eagle Foundation where
          training became her primary interest and passion. While she
          specializes in caring for and training birds of prey, Kayla is
          dedicated to and eager to learn about any species she can. She
          believes training is an integral part of animal welfare and is excited
          to build relationships with the Alveus ambassadors to showcase their
          personalities and inspire dedication to their wild counterparts across
          an ever growing online audience.
        </p>
      </>
    ),
  },
  ella: {
    image: ellaRocksImage,
    name: "Ella Rocks",
    title: "Animal Care Coordinator",
    description: (
      <>
        <p>
          Ella started volunteering at a local wildlife rehabilitation center
          during high school. After a year of volunteering she began working at
          the center as a wildlife care coordinator. As part of her job, Ella
          communicated with the public when they found potentially injured, ill
          or orphaned wildlife. She came to realize how important the education
          part of her job was so that people would know what they can do for
          their local wildlife and when to leave them alone. Ella and Maya met
          at the wildlife rehabilitation center and started an ambassador
          training program after the center received two imprinted non
          releasable American crows. Working with the ambassadors sparked in her
          an interest in animal behavior and training. That interest carries on
          into her work at Alveus where she looks forward to seeing the
          ambassadors assist in educating audiences on what they can do for
          their wild counterparts.
        </p>
      </>
    ),
  },
};

const AboutStaffPage: NextPage = () => {
  return (
    <>
      <Meta
        title="Alveus Staff"
        description="Watch the video to meet some of the team and discover what they do at Alveus in their jobs, or read on to learn more about each of them."
      />

      {/* Nav background */}
      <div className="-mt-40 hidden h-40 bg-alveus-green-900 lg:block" />

      <Section
        dark
        className="py-8"
        containerClassName="flex flex-wrap items-center justify-between"
      >
        <div className="flex w-full flex-col gap-4 pb-16 pt-4 md:w-2/5 md:py-24">
          <Heading className="my-0">Alveus Staff</Heading>
          <p className="text-lg">
            The staff at Alveus all work at our facility in Texas, providing
            care to our animal ambassadors on a daily basis, cleaning enclosures
            and maintaining the property, and ensuring we can provide the best
            online education experience for livestream viewers.
          </p>
          <p className="text-lg">
            Watch the video to meet some of the team and discover what they do
            at Alveus in their jobs, or read on to learn more about each of
            them.
          </p>
        </div>

        <div className="w-full max-w-2xl p-4 pt-8 md:mx-0 md:w-3/5 md:pt-4">
          <Lightbox>
            {({ Trigger }) => (
              <Trigger videoId="7DvtjAqmWl8">
                <Preview videoId="7DvtjAqmWl8" />
                <Heading level={2} className="text-center">
                  Meet the team
                </Heading>
              </Trigger>
            )}
          </Lightbox>
        </div>
      </Section>

      {/* Grow the last section to cover the page */}
      <Section className="flex-grow">
        <People people={staff} columns={2} />
      </Section>
    </>
  );
};

export default AboutStaffPage;
