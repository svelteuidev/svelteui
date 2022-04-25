import * as React from 'react';
import Link from 'next/link';
import logoSrc from '../images/logo.png';
import DiscordLogoIcon from '../images/logos/discord.svg';
import { siteConfig } from 'siteConfig';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Badge } from '@mantine/core';
// import { Search } from './Search';

export const Nav = () => (
	<div className="bg-white border-b border-gray-200">
		<div className="container mx-auto">
			<div className="flex flex-wrap items-center">
				<div className="w-60 flex items-center h-16 pt-4 md:pt-0">
					<Link href="/" as="/">
						<a className="flex gap-2 items-center">
							<span className="sr-only">Home</span>
							<p className="text-3xl font-semibold hidden sm:inline-block">
								Svelte<span className="text-primary-600">UI</span>
							</p>
							<img className="w-10" src={logoSrc} alt="SvelteUI Logo" />
							<Badge variant="outline">Beta</Badge>
						</a>
					</Link>
				</div>
				{/* 
        <div className='flex-grow hidden lg:block ml-8'>
          <Search />
        </div>
        */}
				<div className="flex flex-grow items-center justify-between w-3/4 md:w-auto md:justify-end space-x-4 md:space-x-8 h-16">
					<div className="flex space-x-4 md:space-x-8 text-sm md:text-base">
						<div>
							<Link href="/introduction">
								<a className="leading-6 font-medium">Documentation</a>
							</Link>
						</div>
					</div>
					<div className="flex gap-5">
						<a
							href={siteConfig.repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="border py-2 px-2.5 border-gray-300 rounded-md hover:bg-gray-100"
						>
							<span className="sr-only">GitHub</span>
							<GitHubLogoIcon width={30} height={30} />
						</a>
						<a
							href="https://discord.gg/2J2xmzCS79"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-indigo-500 py-2 px-2.5 border border-transparent rounded-md hover:bg-indigo-600"
						>
							<span className="sr-only">Discord</span>
							<img className="w-7" src={DiscordLogoIcon} alt="Discord Logo" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);
