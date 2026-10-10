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
	// Fixed text on every project page (/projects/<slug>)
	page: {
		back: 'Back to projects',
		stackLabel: 'Stack:',
		nextLabel: 'Next project',
		navLabel: 'Project navigation',
		notFound: 'Project not found',
		titleSuffix: 'Cindy Brenes', // browser tab: "Target | Cindy Brenes"
		galleryLabel: 'Screenshots',
	},
	agency: {
		heading: 'Agency projects',
		// Each item is a card on the home page and its own page at /projects/<slug>.
		// `description` is the short card text; `intro`, `contributions`, `stack` and `gallery` are for the project page.
		items: [
		{
			client: 'Target',
			slug: 'target',
			agency: 'POP',
			period: '2012 – 2021',
			description: 'Corporate redesign and three years with the Roundel team on landing pages and banners.',
			image: { src: '/images/projects/target-cover.webp', alt: 'Target landing page built at POP' },
			intro: '[2–3 sentences about the Target engagement: what the brand needed, the scope of the work, and the result.]',
			contributions: [
				'[What you built on the corporate redesign and how you contributed]',
				'[Your work with the Roundel team on landing pages and banners]',
				'[A detail about accessibility, performance or collaboration]',
			],
			stack: ['HTML', 'CSS', '[more tech]'],
			gallery: [
				{ src: '/images/projects/target/target-slide-1-bullseye-view.webp', alt: '[Describe what this screenshot shows]', title: 'Bullseye View' },
				{ src: '/images/projects/target/target-slide-2-careers.webp', alt: '[Describe what this screenshot shows]', title: 'Careers' },
				{ src: '/images/projects/target/target-slide-3-diversity.webp', alt: '[Describe what this screenshot shows]', title: 'Diversity' },
				{ src: '/images/projects/target/target-slide-4-responsive.webp', alt: '[Describe what this screenshot shows]', title: 'Responsive' },
				{ src: '/images/projects/target/target-slide-5-targetrun.webp', alt: '[Describe what this screenshot shows]', title: 'Target Run' },
				{ src: '/images/projects/target/target-slide-6-mms-takeover.webp', alt: '[Describe what this screenshot shows]', title: 'MMS Takeover' },
				{ src: '/images/projects/target/target-slide-7-redcard-email.webp', alt: '[Describe what this screenshot shows]', title: 'REDcard Email' },
				{ src: '/images/projects/target/target-slide-8-gift-cards.webp', alt: '[Describe what this screenshot shows]', title: 'Gift Cards' },
			],
		},
		{
			client: 'F5 Labs',
			slug: 'f5-labs',
			agency: 'POP',
			period: '2017 – 2021',
			description: 'AEM site redesign with a distributed Agile team across the USA, Poland and Costa Rica.',
			image: { src: '/images/projects/f5-cover.webp', alt: 'F5 Labs website redesign' },
			intro: '[2–3 sentences about the F5 Labs redesign: the goal, the team setup, and the outcome.]',
			contributions: [
				'[What you built on the AEM redesign]',
				'[How you worked with the distributed team in the USA, Poland and Costa Rica]',
				'[Another contribution or result]',
			],
			stack: ['AEM', 'Agile', '[more tech]'],
			gallery: [
				{ src: '/images/projects/f5/f5-slide-1-home.webp', alt: '[Describe what this screenshot shows]', title: 'Home' },
				{ src: '/images/projects/f5/f5-slide-2-content-library.webp', alt: '[Describe what this screenshot shows]', title: 'Content Library' },
				{ src: '/images/projects/f5/f5-slide-3-threat-reports.webp', alt: '[Describe what this screenshot shows]', title: 'Threat Reports' },
				{ src: '/images/projects/f5/f5-slide-4-vulnerability-trends.webp', alt: '[Describe what this screenshot shows]', title: 'Vulnerability Trends' },
				{ src: '/images/projects/f5/f5-slide-5-mobile.webp', alt: '[Describe what this screenshot shows]', title: 'Mobile' },
			],
		},
		{
			client: 'American Express',
			slug: 'american-express',
			agency: 'DCG ONE',
			period: '2018 – 2025',
			description: 'Brand-strict email templates, growing into landing pages and app prototypes.',
			image: { src: '/images/projects/amex-cover.webp', alt: 'American Express email template' },
			intro: '[2–3 sentences about the American Express work: email templates first, then landing pages and app prototypes.]',
			contributions: [
				'[How you built brand-strict email templates that render across email clients]',
				'[Your work on landing pages and app prototypes]',
				'[A detail about accessibility or quality]',
			],
			stack: ['HTML Email', '[more tech]'],
			gallery: [
				{ src: '/images/projects/amex/amex-slide-1-gold.webp', alt: '[Describe what this screenshot shows]', title: 'Gold Card' },
				{ src: '/images/projects/amex/amex-slide-2-platinum.webp', alt: '[Describe what this screenshot shows]', title: 'Platinum Card' },
				{ src: '/images/projects/amex/amex-slide-3-delta-reserve.webp', alt: '[Describe what this screenshot shows]', title: 'Delta Reserve' },
				{ src: '/images/projects/amex/amex-slide-4-hilton-business.webp', alt: '[Describe what this screenshot shows]', title: 'Hilton Business' },
				{ src: '/images/projects/amex/amex-slide-5-airline-program.webp', alt: '[Describe what this screenshot shows]', title: 'Airline Program' },
				{ src: '/images/projects/amex/amex-slide-6-pay-it-plan-it.webp', alt: '[Describe what this screenshot shows]', title: 'Pay It Plan It' },
				{ src: '/images/projects/amex/amex-slide-7-emails.webp', alt: '[Describe what this screenshot shows]', title: 'Emails' },
			],
		},
		{
			client: 'Gap Corporate',
			slug: 'gap-corporate',
			agency: 'POP',
			period: '2017 – 2021',
			description: 'Websites, microsites and campaigns on Kentico with performance-tuned Grunt/Gulp builds.',
			image: { src: '/images/projects/gap-cover.webp', alt: 'Gap Corporate website' },
			intro: '[2–3 sentences about the Gap Corporate work: the sites and campaigns, and the performance focus.]',
			contributions: [
				'[What you built on Kentico: websites, microsites and campaigns]',
				'[How you improved performance with Grunt/Gulp builds]',
				'[Another contribution or result]',
			],
			stack: ['Kentico CMS', 'Grunt', 'Gulp', '[more tech]'],
			gallery: [
				{ src: '/images/projects/gap/gap-slide-1-careers-home.webp', alt: '[Describe what this screenshot shows]', title: 'Careers Home' },
				{ src: '/images/projects/gap/gap-slide-2-brand-templates.webp', alt: '[Describe what this screenshot shows]', title: 'Brand Templates' },
				{ src: '/images/projects/gap/gap-slide-3-brand-mobile.webp', alt: '[Describe what this screenshot shows]', title: 'Brand Mobile' },
				{ src: '/images/projects/gap/gap-slide-4-perks-benefits.webp', alt: '[Describe what this screenshot shows]', title: 'Perks & Benefits' },
				{ src: '/images/projects/gap/gap-slide-5-job-posting.webp', alt: '[Describe what this screenshot shows]', title: 'Job Posting' },
				{ src: '/images/projects/gap/gap-slide-6-newsroom.webp', alt: '[Describe what this screenshot shows]', title: 'Newsroom' },
				{ src: '/images/projects/gap/gap-slide-7-newsroom-article.webp', alt: '[Describe what this screenshot shows]', title: 'Newsroom Article' },
				{ src: '/images/projects/gap/gap-slide-8-job-alerts-email.webp', alt: '[Describe what this screenshot shows]', title: 'Job Alerts Email' },
			],
		},
		],
		otherClients: {
			label: 'Also delivered for',
			names: ['Microsoft', 'eBay', 'Nintendo', 'Starbucks', 'Costco Travel', 'The Home Depot', 'AMEX Travel', 'Seabourn'],
		},
	},
};
