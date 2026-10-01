// Site copy. Edit this file to change text without touching component logic.

export const nav = [
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Education', href: '#education' },
	{ label: 'Contact', href: '#contact' },
	{ label: 'Resume (PDF)', href: '/cindy-brenes-resume.pdf' },
];

export const brand = {
	name: 'cindybrenes',
	suffix: '.dev',
};

export const hero = {
	availability: 'Open to remote frontend roles',
	greeting: "Hi, I'm",
	name: 'Cindy Brenes',
	role: 'Frontend Developer',
	location: 'St. Paul, MN',
	body: 'I build accessible frontend experiences for enterprise brands, bringing 15+ years in web production and a growing React practice.',
	primaryCta: { label: 'View my projects', href: '#projects' },
	secondaryCta: { label: 'Download resume', href: '/cindy-brenes-resume.pdf' },
};

export const about = {
	label: 'About',
	heading: 'The details are the design',
	lead: "I'm a frontend and UI developer with 15+ years of experience building accessible digital experiences for enterprise brands, including Target, Gap, Starbucks, Microsoft, and eBay.",
	body: [
		'I turn detailed designs into responsive, cross-browser HTML and CSS. I build with semantic markup and accessibility practices in mind, and bring JavaScript experience while expanding my React and JSX skills through hands-on projects.',
		"My work spans Kentico, AEM, and WordPress, from email campaigns and microsites to enterprise websites and landing pages. I've also collaborated with distributed teams across the US, Poland, and Costa Rica.",
		"I completed Meta's React Basics and Advanced React certifications, along with Anthropic's Claude Code in Action certification.",
	],
	currently: {
		heading: 'Currently',
		items: [
			{ term: 'Building', value: 'A search app, a project manager & this portfolio — in React' },
			{ term: 'Learning', value: '[what you’re learning]' },
			{ term: 'Based in', value: 'St. Paul, MN' },
			{ term: 'Open to', value: 'Remote, mid-level frontend roles' },
		],
	},
};

export const skills = {
	label: 'Skills',
	heading: 'Toolkit',
	groups: [
		{
		name: 'Frontend Development',
		items: ['HTML5', 'CSS3', 'CSS Grid', 'Flexbox', 'Sass/SCSS', 'Responsive Design', 'Semantic HTML', 'Cross-Browser Compatibility', 'Design-to-Code Implementation', 'ARIA & Accessibility (WCAG 2.1)'],
		},
		{
		name: 'React & JavaScript',
		items: ['React', 'React Hooks', 'JavaScript', 'Tailwind CSS'],
		},
		{
		name: 'CMS & Platforms',
		items: ['Kentico CMS', 'Adobe Experience Manager (AEM)', 'WordPress', 'Email Campaign Development'],
		},
		{
		name: 'Build & Version Control',
		items: ['Git/GitHub', 'Bitbucket', 'Grunt', 'Gulp', 'npm', 'ESLint', 'Prettier', 'Stylelint'],
		},
		{
		name: 'Design & Creative Tools',
		items: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Graphic Design Fundamentals'],
		},
	],
};

export const projects = {
	label: 'Work',
	heading: 'Selected work',
	current: {
		heading: 'Current work — React',
		period: '2025 – present',
		items: [
		{
			title: 'React Search App',
			description: 'Search and explore movies and TV shows using data from the TMDB API.',
			stack: ['React', 'JavaScript', 'Sass', 'TMDB API'],
			links: [
			{ label: 'Live demo', href: '[live demo url]' },
			{ label: 'Code', href: 'https://github.com/cinbrefe/react-search-app' },
			],
		},
		{
			title: 'React Project Manager',
			description: 'Create, organize and track projects, each with its own task list.',
			stack: ['React 19', 'Custom Hooks', 'Tailwind CSS'],
			links: [
			{ label: 'Live demo', href: '[live demo url]' },
			{ label: 'Code', href: 'https://github.com/cinbrefe/react-project-manager' },
			],
		},
		{
			title: 'This portfolio',
			description: 'Token-driven dark palette tuned for WCAG contrast, deployed to Vercel on a custom domain.',
			stack: ['React', 'Sass', 'Vercel'],
			links: [
			{ label: 'Code', href: '[portfolio repo url]' },
			],
		},
		],
	},
	agency: {
		heading: 'Agency work',
		items: [
		{
			client: 'Target',
			agency: 'POP',
			period: '2012 – 2021',
			description: 'Corporate redesign and three years with the Roundel team on landing pages and banners.',
			image: { src: '/images/work/target.png', alt: 'Target landing page built at POP' },
		},
		{
			client: 'F5 Labs',
			agency: 'POP',
			period: '2017 – 2021',
			description: 'AEM site redesign with a distributed Agile team across the USA, Poland and Costa Rica.',
			image: { src: '/images/work/f5-labs.png', alt: 'F5 Labs website redesign' },
		},
		{
			client: 'American Express',
			agency: 'DCG ONE',
			period: '2018 – 2025',
			description: 'Brand-strict email templates, growing into landing pages and app prototypes.',
			image: { src: '/images/work/american-express.png', alt: 'American Express email template' },
		},
		{
			client: 'Gap Corporate',
			agency: 'POP',
			period: '2017 – 2021',
			description: 'Websites, microsites and campaigns on Kentico with performance-tuned Grunt/Gulp builds.',
			image: { src: '/images/work/gap-corporate.png', alt: 'Gap Corporate website' },
		},
		],
		alsoDeliveredFor: ['Microsoft', 'eBay', 'Nintendo', 'Starbucks', 'Costco Travel', 'The Home Depot', 'AMEX Travel', 'Seabourn'],
	},
};

export const experience = {
	label: 'Experience',
	heading: "Where I've worked",
	companies: [
		{
		name: 'Independent',
		note: 'Self-directed learning',
		period: '2025 – Present',
		roles: [
			{
			title: 'Skill Development',
			period: 'Feb 2025 – Present',
			bullets: [
				'A focused period of self-directed learning to modernize my frontend skills, centered on structured React coursework and hands-on portfolio projects applying component-based development patterns.',
				"Completed Meta's React Basics and Advanced React certifications, plus Anthropic's Claude Code in Action certification.",
			],
			tags: ['React', 'JSX', 'Hooks', 'Tailwind CSS'],
			},
		],
		},
		{
		name: 'DCG ONE',
		note: 'Contract',
		period: '2018 – 2025',
		roles: [
			{
			title: 'Frontend Developer',
			period: 'Apr 2018 – Jan 2025',
			bullets: [
				'Built email templates for American Express following strict brand guidelines, ensuring pixel-perfect rendering across all major email clients.',
				'Expanded project scope from email to landing pages, app prototypes and microsite maintenance.',
				'Applied accessibility best practices (WCAG, ARIA, semantic HTML) across all projects as a standard part of development.',
				'Delivered frontend work for additional clients including AMEX Travel, Seabourn and Vivacity Care Clinics.',
			],
			tags: ['HTML Email', 'Landing Pages', 'Prototypes', 'WCAG / ARIA'],
			},
		],
		},
		{
		name: 'POP',
		note: '2 roles · Promoted 2017',
		period: '2012 – 2021',
		roles: [
			{
			title: 'Senior Frontend Developer',
			period: 'Jul 2017 – Jul 2021',
			bullets: [
				'Built websites, microsites, landing pages, email campaigns, and banners for Gap Corporate, Target, Costco Travel, Microsoft, eBay, Nintendo, and Starbucks.',
				'Used Kentico and Grunt/Gulp build workflows, including file minification and image optimization to improve page performance.',
				'Collaborated directly with F5 Networks on the F5 Labs site redesign using AEM and Agile methodology, working across a distributed team in the USA, Poland and Costa Rica.',
				'Incorporated WCAG and ARIA accessibility standards into all projects, with particular attention to high-compliance enterprise clients like Target and Microsoft.',
			],
			tags: ['Kentico CMS', 'AEM', 'Grunt / Gulp', 'Agile', 'WCAG / ARIA'],
			},
			{
			title: 'Frontend Developer',
			period: 'Jan 2012 – Jul 2017',
			bullets: [
				'Joined POP as a Web Developer focused on HTML email development, progressing to full frontend production across major enterprise brands, including Home Depot.',
				'Worked as part of the Target Roundel team for 3 years, building production landing pages and banners using HTML and CSS.',
				'Promoted to Senior Frontend Developer in Jul 2017 in recognition of technical execution, reliability and attention to detail.',
			],
			tags: ['HTML', 'CSS', 'HTML Email'],
			},
		],
		},
	],
};

export const education = {
	label: 'Education',
	heading: 'Education & certifications',
	groups: [
		{
		heading: 'Degrees',
		items: [
			{
			title: "Bachelor's Degree, Graphic Design",
			institution: 'Universidad Americana, Costa Rica',
			period: '2006 – 2011',
			},
			{
			title: "Bachelor's Degree, Advertising",
			institution: 'Universidad Latina de Costa Rica',
			period: '2002 – 2005',
			},
		],
		},
		{
		heading: 'Certifications',
		items: [
			{
			title: 'Claude Code in Action',
			institution: 'Anthropic · via Coursera',
			period: 'Apr 2026',
			href: '[credential url]',
			},
			{
			title: 'Advanced React',
			institution: 'Meta · via Coursera',
			period: 'Sep 2025',
			href: '[credential url]',
			},
			{
			title: 'React Basics',
			institution: 'Meta · via Coursera',
			period: 'Jun 2025',
			href: '[credential url]',
			},
		],
		},
	],
};

export const contact = {
	label: 'Contact',
	heading: "Let's work together",
	links: [
		{ label: 'cinbrefe@gmail.com', href: 'mailto:cinbrefe@gmail.com', icon: 'mail' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/cindybrenes', icon: 'linkedin' },
		{ label: 'GitHub', href: 'https://github.com/cinbrefe', icon: 'github' },
	],
};

export const footer = {
	text: `© ${new Date().getFullYear()} Cindy Brenes · St. Paul, MN`,
	credit: 'Designed & built by me',
	backToTop: { label: 'Back to top ↑', href: '#top' },
};
