"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "FullStack",
    id: "FullStack",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Cloud Engineer",
    id: "Cloud Engineer",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Cloud Solution Architect",
    id: "Cloud Solution Architect",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("FullStack");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with React, Angular, Node.js, Express, PostgreSQL, Javascript,
            Typescript. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("FullStack")}
              active={tab === "FullStack"}
            >
              {" "}
              FullStack{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Cloud Engineer")}
              active={tab === "Cloud Engineer"}
            >
              {" "}
              Cloud Engineer{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Cloud Solution Architect")}
              active={tab === "Cloud Solution Architect"}
            >
              {" "}
              Cloud Solution Architect{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
