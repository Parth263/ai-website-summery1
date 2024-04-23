import { logo } from '../assets'
import video from "../assets/video.mp4";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className=' text-3xl  text-blue-800 font-mono'>webrizer.ai</div>

        <button
          type="button"
          onClick={() => window.open("")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className=" mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Summarize any <br />
        <span className="typing-animation text-purple-700">
          Website with AI
        </span>
      </h1>
      <h2 className="desc">
        With Webrizer.ai, you can simply input an article, and the system will provide
        you the the main points. Webrizer.ai can help you save time and quickly grasp
        the key ideas and insights.
      </h2>
      <div className="w-full max-w-screen-md pt-16 shadow-lg">
      </div>
    </header>
  );
}

export default Hero
