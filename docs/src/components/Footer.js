import * as React from 'react';
import Link from 'next/link';

const links = {
  resources: [{ href: '/overview', title: 'Docs' }],
  community: [
    {
      href: 'https://github.com/Brisklemonade/svelteui/discussions',
      title: 'Discussions',
    },
    { href: 'https://discord.gg/2J2xmzCS79', title: 'SvelteUI Discord' },
    {
      href: 'https://github.com/Brisklemonade/svelteui/releases',
      title: 'Releases',
    },
  ],
};

export const Footer = (props) => {
  return (
    <div className='bg-gray-50 border-t border-gray-200'>
      <div className='container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h4 className='text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase'>
                  Resources
                </h4>
                <ul className='mt-4 space-y-4'>
                  {links.resources.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <a className='text-base leading-6 text-gray-500 hover:text-gray-900'>
                          {link.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h4 className='text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase'>
                  Community
                </h4>
                <ul className='mt-4 space-y-4'>
                  {links.community.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className='text-base leading-6 text-gray-500 hover:text-gray-900'
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                  <li className='mt-4'>
                    <a
                      className='github-button'
                      href='https://github.com/Brisklemonade/svelteui'
                      data-color-scheme='no-preference: light; light: light; dark: dark;'
                      data-icon='octicon-star'
                      data-size='large'
                      data-show-count='true'
                      aria-label='Star Brisklemonade/svelteui on GitHub'
                    >
                      <img
                        src='https://img.shields.io/github/stars/Brisklemonade/svelteui?style=social'
                        alt=''
                      />
                      Stars
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between'>
          <p className='mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1'>
            &copy; {new Date().getFullYear()} built by{' '}
            <a
              style={{ textDecoration: 'underline' }}
              href='https://github.com/Brisklemonade'
            >
              Kamell Perry
            </a>
            , and These{' '}
            <a
              style={{ textDecoration: 'underline' }}
              href='https://github.com/Brisklemonade/svelteui/graphs/contributors'
            >
              Awesome Contributors
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
Footer.displayName = 'Footer';
