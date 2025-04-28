import { Button } from "./button";
import { AnimatedTitle } from "./animated-title";
import { Link } from "react-router-dom"

interface ImageClipBoxProps {
  src: string;
  alt: string;
  clipClass?: string;
}

const ImageClipBox = ({ src, alt, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] w-screen bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#0a192f] bg-blend-overlay text-blue-50 flex flex-col items-center px-16">
      <div className="w-full text-center mt-10">
        <AnimatedTitle containerClass="text-6xl">
          {"Meet our Team"}
        </AnimatedTitle>
      </div>

      <div className="w-full flex justify-between items-center mt-8">
        <div className="w-1/2 flex flex-col items-start -mt-5">
          <p className="text-lg pb-5 text-violet-50 max-w-md text-justify" style={{ lineHeight: '2.2' }}>
            We are a group of passionate and creative students who came together to design and develop this website for our college. Each of us brought unique skills—from coding and design to content writing and project management—to make this project a success. This website is a reflection of our teamwork, dedication, and love for our college community.
          </p>
          <Link to="/members"><Button containerClass="bg-red-500 flex-center gap-1">Members</Button></Link>
        </div>
        <div className="w-1/2 flex justify-end relative">
          <div className="relative w-[400px] h-[300px]">
            <ImageClipBox
              src="/img/team.png"
              alt="Teams"
              clipClass="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

    </section>
  );
};
