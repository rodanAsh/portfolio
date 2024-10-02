import React, { useState } from "react";
import { navLinks } from "../constants";
import menu from "../../public/assets/menu.svg";
import close from "../../public/assets/close.svg";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <nav aria-label="Main Navigation">
        <ul className="flex flex-col justify-between text-slate-800 rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
          <div className="flex items-center justify-between">
            <span className="text-xl font-extrabold tracking-tighter text-slate-900">
              Aakash <span className="text-green-600 opacity-75">.</span>
            </span>
            <button
              aria-label="Open menu"
              className="block p-2 text-2xl bg-slate-800 rounded-md md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <img src={menu} alt="menu" className="w-6 h-6" />
            </button>
          </div>

          {isOpen && (
            <div
              className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 px-4 pt-14 transition-transform duration-300 ease-in-out md:hidden ${
                isOpen ? "translate-x-0" : "translate-x-[100%"
              }`}
            >
              <button
                aria-label="Close menu"
                className="fixed right-4 top-3 block p-2 text-2xl bg-slate-800 rounded-md md:hidden"
                onClick={() => setIsOpen(false)}
              >
                <img src={close} alt="close" className="w-6 h-6" />
              </button>

              <div className="mt-8">
                {navLinks.map(({ id, name, href }, index) => (
                  <React.Fragment key={id}>
                    <li className="mb-4">
                      <a
                        className="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900"
                        href={href}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="absolute inset-0 z-[-1] h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-6" />
                        <span className="relative z-50">{name}</span>
                      </a>
                    </li>
                    {index < navLinks.length - 1 && (
                      <span className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
                <li>
                  <button className="ml-3">
                    <a
                      href="#contact"
                      className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105"
                    >
                      <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
                      <span className="relative flex items-center justify-center gap-2">
                        Contact <MdArrowOutward className="inline-block" />
                      </span>
                    </a>
                  </button>
                </li>
              </div>
            </div>
          )}

          <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
            {navLinks.map(({ id, name, href }, index) => (
              <React.Fragment key={index}>
                <li>
                  <a
                    href={href}
                    className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
                  >
                    <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-6" />
                    <span className="relative">{name}</span>
                  </a>
                </li>
                {index < navLinks.length - 1 && (
                  <span className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline">
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
            <li>
              <button className="ml-3">
                <a
                  href="#contact"
                  className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105"
                >
                  <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
                  <span className="relative flex items-center justify-center gap-2">
                    Contact <MdArrowOutward className="inline-block" />
                  </span>
                </a>
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
