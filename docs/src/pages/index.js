import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import TypeScriptLogo from '../images/logos/typescript.svg';
import { Seo } from 'components/Seo';
import { Banner } from 'components/Banner';
import { Sticky } from 'components/Sticky';
import { Nav } from 'components/Nav';
import { siteConfig } from 'siteConfig';
import { Footer } from 'components/Footer';
import { StitchesLogoIcon, AccessibilityIcon } from '@radix-ui/react-icons';
import { ThemeIcon } from '@mantine/core';

const Home = ({ sponsors }) => {
  return (
    <>
      <Seo
        title='SvelteUI'
        description='A Svelte library with a variety of components, actions, transition and utility functions!'
      />
      <Head>
        <title>
          SvelteUI - A variety of components, actions, transition and utility
          functions!
        </title>
      </Head>
      <div className='bg-gray-50 h-full min-h-full'>
        <Link href={'/introduction'}>
          <a>
            <Banner message='The SvelteUI Docs got a new look 🎉' />
          </a>
        </Link>
        <Sticky>
          <Nav />
        </Sticky>
        <div className='relative bg-white overflow-hidden'>
          <div className='py-6 mx-auto container px-4 sm:mt-12  relative'>
            <img
              src={require('images/emblem-light.svg')}
              className='absolute transform right-0 top-1/2 h-0 lg:h-full scale-150 translate-x-1/2 xl:translate-x-1/5 -translate-y-1/2'
              alt='SvelteUI Emblem'
            />
            <div className='grid grid-cols-12 lg:gap-8'>
              <div className='col-span-12 lg:col-span-6 '>
                <div className='text-center lg:text-left md:max-w-2xl md:mx-auto '>
                  <h1 className='text-4xl tracking-tighter leading-10 font-black text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl'>
                    Create fully functional and accessible web applications in
                    less time than ever before.
                    <br className='inline' />
                    <span className='gradient-animation'>
                      Regardless of design experience
                    </span>
                  </h1>
                  <p className='mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-semibold'>
                    A Svelte library with a variety of components, actions,
                    transition and utility functions!
                  </p>

                  <div className='mt-5  mx-auto sm:flex sm:justify-center lg:justify-start lg:mx-0 md:mt-8'>
                    <div className='rounded-md shadow hover:shadow-lg'>
                      <Link href='/introduction'>
                        <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-600 focus:outline-none focus:border-primary-600 focus:shadow-outline-primary-600 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'>
                          Get Started
                        </a>
                      </Link>
                    </div>
                    <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 hover:shadow-md'>
                      <a
                        href={siteConfig.repoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-600 bg-white hover:text-primary-600 focus:outline-none focus:border-primary-600 focus:shadow-outline-primary-600 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-lg border-t border-gray-200 bg-gray-50 '>
          <div className='py-24  '>
            <div className='mx-auto container'>
              <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
                <div>
                  <div>
                    <h3 className='text-xl leading-6 xl:text-2xl font-bold text-gray-900 flex gap-4 items-center'>
                      <ThemeIcon size={'xl'} variant='gradient'>
                        <img
                          className='w-6'
                          src={TypeScriptLogo}
                          alt='Typescript Logo'
                        />
                      </ThemeIcon>
                      Typescript Based
                    </h3>
                    <p className='mt-2 lg:mt-4 text-base xl:text-lg lg:leading-normal leading-6 text-gray-600'>
                      Build type safe applications. All SvelteUI packages are
                      built with TypeScript and support it by default. All
                      components and functions export types, are documented, and
                      give developers autocomplete features!
                    </p>
                  </div>
                </div>
                <div className='mt-10 lg:mt-0'>
                  <div>
                    <h3 className='text-xl leading-6 xl:text-2xl font-bold text-gray-900 flex gap-4 items-center'>
                      <ThemeIcon size={'xl'} variant='gradient'>
                        <StitchesLogoIcon width={30} height={30} />
                      </ThemeIcon>
                      Built with stitches
                    </h3>
                    <p className='mt-2  lg:mt-4 text-base xl:text-lg lg:leading-normal leading-6 text-gray-600'>
                      CSS-in-JS with near-zero runtime, SSR, multi-variant
                      support, and a best-in-class developer experience. Colors,
                      fonts, shadows and many other parts are customizable to
                      fit your design needs.
                    </p>
                  </div>
                </div>
                <div className='mt-10 lg:mt-0'>
                  <div>
                    <h3 className='text-xl leading-6 xl:text-2xl font-bold text-gray-900 flex gap-4 items-center'>
                      <ThemeIcon size={'xl'} variant='gradient'>
                        <AccessibilityIcon width={30} height={30} />
                      </ThemeIcon>
                      Accessibility and usability
                    </h3>
                    <p className='mt-2  lg:mt-4 text-base xl:text-lg lg:leading-normal leading-6 text-gray-600'>
                      All components are accessible according to WAI-ARIA
                      standards. On top of that, no annoying focus ring. It will
                      appear only when user navigates with keyboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div className='py-6'>
            <div className='uppercase tracking-wider text-sm font-semibold text-center text-gray-400 mb-3'>
              Trusted in Production by
            </div>

            <ClientsMarquee />
          </div>
            */}
        </div>

        <div className='bg-gray-100 relative py-24 border-t border-gray-200 '>
          <div className='px-4 sm:px-6 lg:px-8  mx-auto container max-w-3xl sm:text-center'>
            <h3 className='text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 lg:leading-none mt-2'>
              Less Code. Elegant Solutions.
            </h3>
            <p className='my-4 text-xl leading-7  text-gray-600'>
              Instead of remaking the same components, recreating custom
              actions, transitions, utilities, etc. You could simplify your
              workflow by using things already made and ready to go.
              Accessibility, attractive styles, and more is handled for you, so
              you can start making projects quickly. Don't like what you see?
              Customize every component anyway you like!
            </p>
          </div>
          <div
            style={{
              height: 224,
            }}
          />
        </div>

        <section className='bg-gray-900 body-font'>
          <div className='container max-w-7xl px-4  mx-auto -mt-72 relative'>
            <iframe
              src='https://codesandbox.io/embed/charming-moon-fb226s?fontsize=14&hidenavigation=1&module=%2FApp.svelte&theme=dark'
              title='SvelteStack/svelte-query: basic'
              sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
              className='shadow-2xl'
              style={{
                width: '100%',
                height: '80vh',
                border: '0',
                borderRadius: 8,
                overflow: 'hidden',
                position: 'static',
                zIndex: 0,
              }}
            ></iframe>
          </div>
          <div className='py-24 px-4 sm:px-6 lg:px-8  mx-auto container'>
            <div className=' sm:text-center pb-16'>
              <h3 className='text-3xl mx-auto leading-tight font-extrabold tracking-tight text-white sm:text-4xl  lg:leading-none mt-2'>
                One Dependency, All the Features.
              </h3>
              <p className='mt-4 text-xl max-w-3xl mx-auto leading-7 text-gray-300'>
                With Stitches as the only dependency, SvelteUI is extremely
                lean, and will be packed with features you'll almost certainly
                need in most projects.
              </p>
            </div>
            <div>
              <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 text-white max-w-screen-lg mx-auto text-lg'>
                {[
                  'SvelteKit & SSR compatible',
                  'Typescript by default',
                  'Accessibility',
                  'Dark themes by default',
                  'Minimal dependency usage',
                  'Zero configuration needed',
                  '100% Customizable',
                  'No annoying focus ring',
                  'Packages work independently',
                  'Pre-made transitions',
                  'Fully documented',
                  'Wonderful community',
                ].map((feature) => (
                  <span className='mb-2' key={feature}>
                    <span className='bg-primary-600 text-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                      <Check />
                    </span>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className='bg-gray-200 border-b border-gray-300'>
          <div className='container mx-auto py-12 text-center'>
            <h3 className='text-2xl md:text-5xl mx-auto leading-tight font-extrabold tracking-tight text-gray-800  lg:leading-none mt-2'>
              Feeling Chatty?
            </h3>
            <a
              href='https://discord.gg/2J2xmzCS79'
              target='_blank'
              className='inline-block bg-gray-800 p-5 text-2xl mx-auto leading-tight font-extrabold tracking-tight text-white mt-12 rounded-full'
            >
              Join the SvelteUI Discord!
            </a>
          </div>
        </div>
        <div className='bg-gray-50 border-b border-gray-100'>
          <div className='container mx-auto py-24 px-4 flex flex-wrap md:flex-no-wrap items-center justify-between md:space-x-8'>
            <h2 className='text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
              Wow, you've come a long way!
            </h2>
            <div className='mt-8 flex lg:flex-shrink-0 md:mt-0'>
              <div className='inline-flex rounded-md shadow hover:shadow-lg'>
                <Link href='/introduction'>
                  <a className='inline-flex items-center justify-center text-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'>
                    Okay, let's get started!
                  </a>
                </Link>
              </div>
              <div className='ml-3 inline-flex rounded-md shadow hover:shadow-md'>
                <a
                  href={siteConfig.repoUrl}
                  className='inline-flex items-center justify-center text-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-600 bg-white hover:text-primary-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
                >
                  Take me to the GitHub repo.
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <style jsx global>{`
          .gradient {
            -webkit-mask-image: linear-gradient(
              180deg,
              transparent 0,
              #000 30px,
              #000 calc(100% - 200px),
              transparent calc(100% - 100px)
            );
          }

          .gradient-animation {
            color: #228be6;
            background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-animation: hue 20s infinite linear;
          }

          @-webkit-keyframes hue {
            from {
              -webkit-filter: hue-rotate(0deg);
            }
            to {
              -webkit-filter: hue-rotate(-360deg);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;
Home.displayName = 'Home';
const Check = React.memo(() => (
  <svg
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='3'
    className='w-3 h-3'
    viewBox='0 0 24 24'
    aria-hidden='true'
  >
    <path d='M20 6L9 17l-5-5'></path>
  </svg>
));
