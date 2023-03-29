import { Link } from "react-router-dom";

import gymLogo from "../media/gym-logo.png";
import tfLogo from "../media/tensorflow.png";
import jupyterLogo from "../media/jupyter.png";
import box2dLogo from "../media/box2d.png";
import f1Car from "../media/f1_car.png";

import educationGIF from "../media/educate.gif";
import researchGIF from "../media/research.gif";
import entertainmentGIF from "../media/entertainment.gif";
import deliveryGIF from "../media/delivery.gif";

const Paragraph = ({ point, text }) => (
  <p className="text-xl my-4 text-black">
    <b className="text-red-600">{point}</b> {text}
  </p>
);

const Card = ({ name, logo }) => (
  <div className="max-w-sm rounded overflow-hidden border border-red-300 shadow-red-500 shadow-lg mx-6">
    <div className="h-3/4 flex flex-col justify-center">
      <img src={logo} alt={name} className="w-48 p-8" />
    </div>
    <div className="px-6 py-4 text-center">
      <div className="font-bold text-xl mb-2">{name}</div>
    </div>
  </div>
);

const Tab = ({ gifBackground, title }) => (
  <div className="flex flex-col justify-center relative h-96 rounded-2xl">
    <img
      src={gifBackground}
      alt="Background GIF"
      className="absolute object-cover h-full w-full z-0 flex"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <h2 className="text-6xl font-bold text-white">{title}</h2>
    </div>
  </div>
);

export default function Home() {
  return (
    <div
      className="bg-gray-100 text-center"
      style={{ fontFamily: "Titillium Web" }}
    >
      {/* NAVBAR SECTION */}
      <nav className="w-full flex items-stretch justify-between flex-wrap bg-white p-6">
        <div className="flex items-center mr-6">
          <h1 className="text-2xl text-red-500 italic font-bold">DS23-TEAM5</h1>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <a
            href="#goal"
            className="block mx-8 px-2 py-2 text-gray-800 hover:text-white hover:bg-red-700 rounded"
          >
            Goal
          </a>
          <a
            href="#tech"
            className="block mx-8 px-2 py-2 text-gray-800 hover:text-white hover:bg-red-700 rounded"
          >
            Technology
          </a>
          <a
            href="#proposed"
            className="block mx-8 px-2 py-2 text-gray-800 hover:text-white hover:bg-red-700 rounded"
          >
            Proposed Solution
          </a>
          <a
            href="#application"
            className="block mx-8 px-2 py-2 text-gray-800 hover:text-white hover:bg-gray-700 rounded"
          >
            Application
          </a>
        </div>
        <Link
          to="/results"
          className="block px-4 py-2 text-white bg-black rounded"
        >
          Results
        </Link>
      </nav>

      {/* LANDING PAGE SECTION */}

      <div className="mx-auto pt-8 bg-gradient-to-b from-red-600 to-red-900 text-white">
        <h1 className="text-6xl mt-12 font-bold">
          Teaching toy car to self-drive in a game environment using RL
        </h1>
        <h2 className="text-2xl font-medium mt-8">
          Created by <u>Purna Jain, Saud Hashmi and Saumya Tiwari</u>
        </h2>
        <br />
        <br />

        <div className="flex justify-center">
          <img className="" src={f1Car} alt="f1 car" />
        </div>
      </div>

      {/* GOAL SECTION */}

      <div id="goal" className="mx-16 mt-16 text-left">
        <h1 className="text-6xl mb-12 font-bold underline underline-offset-8">
          Goal
        </h1>
        <h3 className="text-3xl mb-12 font-semibold text-red-800">
          When teaching a toy car to self-drive, some common goals that
          researchers may have are:
        </h3>

        <Paragraph
          point="Develop programming skills:"
          text="One of the main goals of teaching a toy
          car to self-drive is to develop programming skills. By designing and
          implementing algorithms to control the car's movement and response to
          sensor data, individuals can improve their coding abilities and gain
          experience in software development."
        />

        <Paragraph
          point="Understand machine learning:"
          text="Another goal may be to gain a better
          understanding of machine learning and artificial intelligence. By
          programming the toy car to learn from its environment and make
          decisions based on that data, individuals can gain insight into the
          principles of machine learning and how it can be applied to real-world
          problems."
        />

        <Paragraph
          point="Improve problem-solving abilities:"
          text="Teaching a toy car to self-drive
          can also help improve problem-solving abilities. It requires
          individuals to think critically about how to navigate obstacles,
          optimize performance, and ensure safety. By working through these
          challenges, individuals can improve their problem-solving abilities,
          which can be applied to a wide range of situations."
        />

        <Paragraph
          point="Learn about autonomous vehicles:"
          text="Another goal may be to gain a better understanding of autonomous vehicles and how they work. By working with a toy car, individuals can learn about the various sensors and technologies that are used in self-driving cars and gain insight into the challenges involved in developing safe and reliable autonomous vehicles."
        />

        <Paragraph text="Overall, the goals of teaching a toy car to self-drive can vary depending on the individual's interests and objectives. However, some common themes include developing programming skills, understanding machine learning, improving problem-solving abilities, and learning about autonomous vehicles." />
      </div>

      {/* TECHNOLOGY SECTION */}

      <div id="tech" className="mx-16 mt-16 text-left">
        <h1 className="text-6xl mb-12 font-bold underline underline-offset-8">
          Our technology
        </h1>

        <div className="mx-4 flex flex-row justify-center">
          <Card name="Jupyter" logo={jupyterLogo} />
          <Card name="TensorFlow" logo={tfLogo} />
          <Card name="OpenAI Gym" logo={gymLogo} />
          <Card name="Box2D" logo={box2dLogo} />
        </div>
      </div>

      {/* PROPOSED SOLUTION SECTION */}

      <div id="proposed" className="mx-16 mt-32 text-left">
        <h1 className="text-6xl mb-12 font-bold underline underline-offset-8">
          Proposed Solution
        </h1>

        <p className="text-justify mx-12 text-2xl ">
          The proposed solution involves designing a game environment, defining
          the reward function, choosing the appropriate RL algorithm, training
          the algorithm, evaluating the performance, and tuning the
          hyperparameters to improve the performance. This solution can be
          applied to teach other autonomous systems, such as robots, to perform
          complex tasks.
        </p>
      </div>

      <div id="application" className="mx-16 mt-32 text-left">
        <h1 className="text-6xl mb-12 font-bold underline underline-offset-8">
          Applications
        </h1>
        <div className="w-full">
            <Tab title="Education" gifBackground={educationGIF} />
            <Tab title="R&D" gifBackground={researchGIF} />
            <Tab title="Entertainment" gifBackground={entertainmentGIF} />
            <Tab title="Autonomous Delivery" gifBackground={deliveryGIF} />
        </div>
      </div>
    </div>
  );
}
