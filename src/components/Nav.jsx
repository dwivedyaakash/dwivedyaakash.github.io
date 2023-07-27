import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from '../util/useMediaQuery';

// Framer motion
const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const Nav = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <nav className='relative mx-4 mb-6 flex items-center justify-between pb-6 pt-6 font-medium min-[250px]:mx-8 min-[250px]:pt-12 min-[500px]:mb-12 md:mx-16 lg:mx-32'>
      {/* Title */}
      <div className='flex items-center justify-between gap-4'>
        <h1 className='text-lg font-bold'>
          <a className='text-2xl text-gray-700 hover:text-gray-500' href='/'>
            Aakash
          </a>
        </h1>
      </div>

      {/* Desktop nav */}
      {matches && (
        <div className='flex gap-12'>
          <a className='text-lg text-gray-700 hover:text-gray-500' href='/'>
            Home
          </a>
          <a
            className='text-lg text-gray-700 hover:text-gray-500'
            href='/#about'
          >
            About
          </a>
          <a
            className='text-lg text-gray-700 hover:text-gray-500'
            href='/#skills'
          >
            Skills
          </a>
          <a
            className='text-lg text-gray-700 hover:text-gray-500'
            href='/#projects'
          >
            Projects
          </a>
          <a
            className='text-lg text-gray-700 hover:text-gray-500'
            href='/#contact'
          >
            Contact
          </a>
        </div>
      )}

      {/* Hamburger menu */}
      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className='z-50 cursor-pointer space-y-1.5'
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className='block h-0.5 w-8 bg-black'
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className='block h-0.5 w-6 bg-black'
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className='block h-0.5 w-4 bg-black'
          ></motion.span>
        </div>
      )}

      {/* Hamburger menu nav */}
      {toggled && !matches && (
        <div className='fixed bottom-0 left-0 flex h-screen w-full items-center justify-center bg-[#f0f0f0]'>
          <motion.div
            variants={navMotion}
            animate='visible'
            initial='hidden'
            className='flex flex-col items-center gap-24 text-lg'
          >
            <motion.a
              variants={itemMotion}
              className='text-lg text-gray-700 hover:text-gray-500'
              href='/'
              onClick={() => setToggled((prevToggle) => !prevToggle)}
            >
              Home
            </motion.a>
            <motion.a
              variants={itemMotion}
              className='text-lg text-gray-700 hover:text-gray-500'
              href='/#about'
              onClick={() => setToggled((prevToggle) => !prevToggle)}
            >
              About
            </motion.a>
            <motion.a
              variants={itemMotion}
              className='text-lg text-gray-700 hover:text-gray-500'
              href='/#skills'
              onClick={() => setToggled((prevToggle) => !prevToggle)}
            >
              Skills
            </motion.a>
            <motion.a
              variants={itemMotion}
              className='text-lg text-gray-700 hover:text-gray-500'
              href='/#projects'
              onClick={() => setToggled((prevToggle) => !prevToggle)}
            >
              Projects
            </motion.a>
            <motion.a
              variants={itemMotion}
              className='text-lg text-gray-700 hover:text-gray-500'
              href='/#contact'
              onClick={() => setToggled((prevToggle) => !prevToggle)}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
