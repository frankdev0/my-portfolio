import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div>
        <p className="text-xl ">
        My name is Nnaemeka Ogunewe, and I am a frontend developer based in Lagos, Nigeria. With extensive experience in developing a wide range of frontend applications, I have successfully created diverse projects, including an Admin dashboard that incorporates CRUD functionalities. Additionally, I possess expertise in webflows and have worked on both No code and Low code projects. My passion lies in crafting cutting-edge, pixel-perfect interfaces and seamlessly implementing intuitive user experiences.
        </p>
        <br />
        <p className="text-xl ">
          Here are some of my most relevant qualifications and accomplishments:
        </p>
          <ul className="pl-4 mt-10  list-disc text-xl">
            <li>Three years of experience as a Frontend Developer </li>
            <li>In my previous company, I developed and Implemented two user admin dashboards for monitoring sales and transactions on the "Buyers hub platform" and the "Market place platform". This helped to boost the company’s revenue to about 30%. I also created an instant messaging platform for interacting with buyers, this helped in resolving disputes and attending to buyer's order in a timely and efficient manner.</li>
            <li>
            I have leveraged my skills in Webflows, No code, and Low code software development, along with expertise in REACT JS, JAVASCRIPT, TYPESCRIPT, HTML5, SCSS, CSS3, and CSS Libraries such as Tailwind, Bootstrap, and Ant Design to create a wide range of website features.
            </li>
            <li>
              Developed and Implemented project scope and timelines based on the
              design-develop-deploy process.
            </li>
            <li>
              Collaborated with UX designers and Back End Developers and ensured
              coherence between all parties.
            </li>
            <li>Tested feature prototypes for bugs and user experience.</li>
          </ul>

        </div>
      
      </div>
    </div>
  );
};

export default About;
