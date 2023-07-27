// import pkg from 'react-icons/fa6/index.esm.js';
// const { FaGithub, FaLinkedin, FaTwitter, FaLink } = pkg;

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <div className='mt-8 flex flex-col items-center justify-center bg-slate-200 p-4 text-gray-700'>
      <div className='flex flex-col items-center justify-center'>
        <div className='m-2 flex items-center justify-center gap-x-2 p-1 text-xl min-[250px]:gap-x-6'>
          <a
            className='hover:text-gray-500'
            href='https://github.com/dwivedyaakash'
            target='_blank'
          >
            {/* <FaGithub /> */}
          </a>
          <a
            className='hover:text-gray-500'
            href='https://www.linkedin.com/in/dwivedyaakash'
            target='_blank'
          >
            {/* <FaLinkedin /> */}
          </a>
          <a
            className='hover:text-gray-500'
            href='https://twitter.com/dwivedyaakash'
            target='_blank'
          >
            {/* <FaTwitter /> */}
          </a>
          <a
            className='hover:text-gray-500'
            href='https://linktr.ee/dwivedyaakash'
            target='_blank'
          >
            {/* <FaLink /> */}
          </a>
        </div>
        <h6 className='p-3 text-center text-sm'>
          Copyright © {year} | Aakash Dwivedy
        </h6>
      </div>
    </div>
  );
};

export default Footer;
