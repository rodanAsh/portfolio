import React from "react";
import { useRef, useEffect } from "react";
import Shapes from "../components/Shapes";
import { lazy, Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";

// const HeroAnimation = lazy(() => import('../components/HeroAnimation'))

const Hero = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
          transformOrigin: "left top",
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      tl.fromTo(
        ".job-title",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scale: 1,
          ease: "elastic.out(1,0.3)",
        }
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const renderLetters = (name, key) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  {
    /*px-4 py-10 md:px-6 md:py-14 lg:py-16*/
  }
  return (
    <section
      ref={componentRef}
      id="home"
      className="px-4 py-10 md:px-6 md:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
          <Shapes />
          <div className="col-start-1 md:row-start-1">
            <h1
              className="mb-8 text-[clamp(3rem,18vmin,20rem)] font-extrabold leading-none tracking-tighter"
              aria-label="Hi, Iam Aakash"
            >
              <span className="block text-slate-300">
                <span>{renderLetters("Hi,", "first")}</span>{" "}
                <span>{renderLetters("Iam", "first")}</span>
              </span>
              <span className="-mt-[.2em] block text-slate-500">
                {renderLetters("Aakash", "last")}
              </span>
              <span className="job-title  block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
                Web Developer
              </span>
            </h1>
            <button className="ml-3">
              <a
                href="#contact"
                className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105"
              >
                <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
                <span className="relative flex items-center text-slate-800 justify-center gap-2">
                  Resume <MdArrowOutward className="inline-block" />
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
