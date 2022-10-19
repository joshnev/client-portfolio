/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
// images
import Image from 'next/image';
import guru from '../public/images/main/guru-dev-no-bg1.svg';
import mac from '../public/images/main/design11.png';
import dev from '../public/images/main/dev-yellow.svg';
import portfolio1 from '../public/images/main/portfolio-web1.png';
import portfolio2 from '../public/images/main/portfolio-web2.png';
import portfolio3 from '../public/images/main/portfolio-web3.png';
import portfolio4 from '../public/images/main/portfolio-web4.png';
import changeColour from '../public/images/main/color-change.svg';
// state
import { useState } from 'react';
// modal pdf
import Modal from '../components/Modal';

export default function Home() {
  const [darkMode, setDarkMode] = useState();
  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <Head>
          <title>Client Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="px-10 md:px-20 lg:px-40 dark:bg-blue-500 bg-slate-600">
          <section className="min-h-screen">
            {/* nav menu */}
            <nav className="py-10 mb-10 flex justify-between">
              <h1 className="text-2xl font-[poppins] bg-gray-700 rounded-lg text-white py-[8px] px-[8px] mb-[10px]">
                Dev <span className="text-yellow-500">Guru</span>
              </h1>
              <ul className="flex items-center">
                <li className="">
                  <Image
                    src={changeColour}
                    width={30}
                    height={30}
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-l bg-gray-700 text-white px-4 py-2 rounded-md ml-2"
                    href="#"
                  >
                    🍔 Menu
                  </a>
                </li>
              </ul>
            </nav>
            {/* clinet basic info */}
            <div className="text-center p-10">
              <h2 className="text-white text-5xl py-2 font-medium font-[poppins] md:text-6xl">
                Joshua Nevard
              </h2>
              <h3 className="text-2xl md:text-3xl text-slate-600 italic font-[rubik] drop-shadow-2xl flex justify-center gap-1">
                <span className="bg-yellow-500 rounded-lg py-[5px] px-[5px]">
                  Designer
                </span>{' '}
                <span className="bg-yellow-500 rounded-lg py-[5px] px-[5px]">
                  Developer
                </span>
              </h3>

              <p className="font-[rubik] text-lg py-5 leading-8 md:text-xl text-yellow-100 max-w-[300px] mx-auto">
                Hi there, I code{' '}
                <span className="text-yellow-500 font-semibold">beautiful</span>{' '}
                websites for clients with an idea or a dream!
              </p>
              <button className="font-bold font-[poppins] text-yellow-400">
                👉 Contact me here 👈
              </button>
            </div>
            <div className="mx-auto relative bg-yellow-500 rounded-[30px] mt-5 sm:max-w-[300px] md:max-w-[300px] lg:max-w-[400px] drop-shadow-2xl h-80">
              <Image src={guru} layout="fill" />
            </div>
          </section>
          {/* services */}
          <section>
            <div className="font-[poppins]">
              <h3 className="text-[#fff] text-3xl pt-[50px] py-1">
                My superpower services:
              </h3>
              <ul className=" text-md py-2 leading-8 text-[#fff]">
                <li className="gap-[5px] leading-10">
                  ➜ Crisp single page applications 📃
                </li>
                <li className="gap-[5px] leading-10">
                  ➜ Fast multi page web applications 📃📃
                </li>
                <li className="gap-[5px] leading-6 flex">
                  ➜
                  <div>
                    Interactive, fully-stacked web applications with beautifull
                    front-end and back-end&apos;s.
                    <span className="text-[20px]">🤯</span>
                  </div>
                </li>
                <li className="gap-[5px] leading-10">
                  ➜ Revamping old clunky websites.
                  <span className="text-[20px]">🥱</span>
                </li>
              </ul>
            </div>
            {/* cards */}
            <div className="lg:flex justify-center gap-10 text-white">
              <div className="bg-yellow-500 text-center shadow-2xl p-10 rounded-[40px] my-10">
                <Image src={mac} width={120} height={120} />
                <h3 className="font-medium pt-4 pb-2 text-lg">
                  Crisp beautiful designs
                </h3>
                <p className="py-2">
                  Bespoke designs ready to reach the audience you want.
                </p>
                <h4 className="py-4 text-white">My design tech stack:</h4>
                <p className="text-white">Photoshop</p>
                <p className="text-white">Illustrator</p>
                <p className="text-white">Figma</p>
                <p className="text-white">Blender</p>
              </div>
              {/* second card */}
              <div className="bg-yellow-500 text-center shadow-xl p-10 rounded-[40px] my-10">
                <Image src={dev} />
                <h3 className="font-medium pt-8 pb-2 text-lg lg:min-w-[400px]">
                  Sharp efficent code
                </h3>
                <p className="py-2">Bespoke code ready to deploy on the web.</p>
                <h4 className="py-4 text-white">My coding tech stack:</h4>
                <p className="text-white">React.JS/Next.JS</p>
                <p className="text-white">Visual Studio Code</p>
                <p className="text-white">Tailwind CSS</p>
                <p className="text-white">Mongo DB</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 text-white">Portfolio:</h3>

              <p className=" text-white text-lg py-5 leading-8">
                Below is a collection of my work TEST. For quick reference click
                here for client portfolio work, here for e-commerce work and
                finally here for other.
              </p>
            </div>
            <div className="flex flex-col gap-[40px] py-[40px] lg:flex-row lg:flex-wrap justify-center">
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  src={portfolio1}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  src={portfolio2}
                  layout="responsive"
                />
                <p className="invisible absolute lg:visible flex justify-center text-white text-md mt-10">
                  Hey, I am here to fill the awkward empty space 😉.
                </p>
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  src={portfolio3}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  src={portfolio4}
                  layout="responsive"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <Modal />
    </>
  );
}
