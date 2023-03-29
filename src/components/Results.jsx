import { Link } from "react-router-dom";
import racingGIF from "../media/car_racing.gif";

import dqn2000 from "../media/dqn_2000.gif";
import dqn5000 from "../media/dqn_5000.gif";
import dqn10000 from "../media/dqn_10000.gif";

import ppo2000 from "../media/ppo2000.gif";
import ppo5000 from "../media/ppo5000.gif";
import ppo10000 from "../media/ppo10000.gif";

import a2c_16 from "../media/a2c_16.gif";
import a2c_32 from "../media/a2c_32.gif";

const handleClick = () => {
  document.getElementById("tab").style.display = "none";
  document.getElementById("main").style.display = "block";
};

const Tab = ({ gifBackground, title }) => (
  <div
    id="tab"
    className="flex relative flex-col justify-center h-96 rounded-2xl"
  >
    <img
      src={gifBackground}
      alt="Background GIF"
      className="absolute object-cover w-full z-0 flex"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <br />
      <br />
      <p className="mt-4 bg-black text-white text-2xl p-5 bg-opacity-60">
        Our results show that PPO outperformed both DQN and A2C in terms of both
        the average reward obtained during training and the optimized lap time
        of the toy car in the game environment.
      </p>
      <button
        className="p-4 bg-black text-white mt-6 rounded-md hover:bg-gray-900"
        onClick={handleClick}
      >
        Learn More
      </button>
    </div>
  </div>
);

export default function Results() {
  return (
    <>
      <Tab title="Results" gifBackground={racingGIF} />
    <div id="main" style={{ display: 'none', fontFamily: "Titillium Web" }}>
      <nav className="w-full flex items-stretch justify-between flex-wrap bg-red-700 p-6">
        <div className="flex-grow flex items-center justify-between">
          <h1 className="text-2xl text-white italic font-bold">DS23-TEAM5</h1>
          <Link
          to="/"
          className="block px-4 py-2 text-white bg-black rounded"
        >
          Home
        </Link>
        </div>
      </nav>
      <div className="w-full text-center">
        <h1 className="text-6xl font-bold mt-16 text-black underline">Results</h1>
        <p className="mx-20 mt-16 text-2xl">
          During training, we found that <b>PPO</b> was able to achieve higher average
          rewards than both <b>DQN and A2C</b>. Specifically, PPO achieved an average
          reward of <b>544.7</b>, while DQN and A2C achieved average rewards of <b>128.05</b> and <b>-404.78</b>, respectively. We also observed that PPO was able to
          achieve this <u>higher reward with fewer training steps</u> compared to DQN
          and A2C.
        </p>
      </div>
    
    {/* DQN SECTION */}
    <div className="text-center">
    <h1 className="text-3xl mt-16 font-semibold">Deep-Q Network</h1>
      <div className="flex justify-center mt-10">
        <img className="w-96" src={dqn2000} alt="" />
      </div>
        <span>Training through DQN with 2000 steps</span>
      <div className="flex justify-center mt-10">
        <img className="w-96" src={dqn5000} alt="" />
      </div>
        <span>Training through DQN with 5000 steps</span>
      <div className="flex justify-center mt-10">
        <img className="w-96" src={dqn10000} alt="" />
      </div>
        <span>Training through DQN with 10000 steps</span>
    </div>

    {/* PPO SECTION */}
    <div className="text-center">
    <h1 className="text-3xl mt-16 font-semibold">Proximal Policy Optimization</h1>
      <div className="flex justify-center mt-10">
        <img className="w-96" src={ppo2000} alt="" />
      </div>
        <span>Training through PPO with 2000 steps</span>
      <div className="flex justify-center mt-10">
        <img className="w-96" src={ppo5000} alt="" />
      </div>
        <span>Training through PPO with 5000 steps</span>
      <div className="flex justify-center mt-10">
        <img className="w-96" src={ppo10000} alt="" />
      </div>
        <span>Training through PPO with 10000 steps</span>
    </div>

    {/* DQN SECTION */}
    <div className="text-center mb-16">
    <h1 className="text-3xl mt-16 font-semibold">Advantage Actor-to-Critic</h1>
      <div className="flex justify-center mt-10">
        <img className="w-96" src={a2c_16} alt="" />
      </div>
        <span>Training through A2C with 16 timesteps</span>
      <div className="flex justify-center mt-10">
        <img className="w-96" src={a2c_32} alt="" />
      </div>
        <span>Training through A2C with 32 timesteps</span>
    </div>

    </div>
    </>
    
  );
}
