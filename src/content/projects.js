// Project content. Edit this file to add or update projects without touching component code.

export const projects = {
	label: 'Projects',
	heading: 'Selected projects',
	current: {
		heading: 'Current projects — React',
		period: '2025 – present',
		items: [
		{
			number: "01",
			title: 'React Search App',
			description: 'A search and discovery app for movies and shows, powered by the TMDB API.',
			stack: ['React', 'JavaScript', 'Sass', 'TMDB API'],
			links: [
			{ label: 'Live demo', href: 'https://github.com/cinbrefe/react-search-app' },
			{ label: 'Code', href: 'https://github.com/cinbrefe/react-search-app' },
			],
		},
		{
			number: "02",
			title: 'React Project Manager',
			description: 'Create, organize and track projects, each with its own task list.',
			stack: ['React 19', 'Custom Hooks', 'Tailwind CSS'],
			links: [
			{ label: 'Live demo', href: 'https://github.com/cinbrefe/react-project-manager' },
			{ label: 'Code', href: 'https://github.com/cinbrefe/react-project-manager' },
			],
		},
		{
			number: "03",
			title: 'This portfolio',
			description: 'Token-driven dark palette tuned for WCAG contrast, deployed to Vercel on a custom domain.',
			stack: ['React', 'Sass', 'Vercel'],
			links: [
			{ label: 'Code', href: 'https://github.com/cinbrefe/personal-portfolio' },
			],
		},
		],
	},
	agency: {
		heading: 'Agency projects',
		items: [
		{
			client: 'Target',
			agency: 'POP',
			period: '2012 – 2021',
			description: 'Corporate redesign and three years with the Roundel team on landing pages and banners.',
			image: { src: '/images/projects/target-cover.webp', alt: 'Target landing page built at POP' },
			slug: 'target',
		},
		{
			client: 'F5 Labs',
			agency: 'POP',
			period: '2017 – 2021',
			description: 'AEM site redesign with a distributed Agile team across the USA, Poland and Costa Rica.',
			image: { src: '/images/projects/f5-cover.webp', alt: 'F5 Labs website redesign' },
			slug: 'f5-labs',
		},
		{
			client: 'American Express',
			agency: 'DCG ONE',
			period: '2018 – 2025',
			description: 'Brand-strict email templates, growing into landing pages and app prototypes.',
			image: { src: '/images/projects/amex-cover.webp', alt: 'American Express email template' },
			slug: 'american-express',
		},
		{
			client: 'Gap Corporate',
			agency: 'POP',
			period: '2017 – 2021',
			description: 'Websites, microsites and campaigns on Kentico with performance-tuned Grunt/Gulp builds.',
			image: { src: '/images/projects/gap-cover.webp', alt: 'Gap Corporate website' },
			slug: 'gap-corporate',
		},
		],
		otherClients: {
			label: 'Also delivered for',
			names: ['Microsoft', 'eBay', 'Nintendo', 'Starbucks', 'Costco Travel', 'The Home Depot', 'AMEX Travel', 'Seabourn'],
		},
	},
};
