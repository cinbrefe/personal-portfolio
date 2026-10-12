// Site copy: every piece of text on the site except projects (those live in projects.js).
// Contains: nav, a11y (screen-reader labels), brand, the home page sections in page order
// (hero, about, skills, experience, education, contact), the footer and the error page.
// Edit text here without touching component logic. Anything in [brackets] is a placeholder, not final copy.

// Section links start with "/" so they reach the home page's sections from any page (e.g. a project page)
export const nav = [
	{ label: 'About', href: '/#about' },
	{ label: 'Skills', href: '/#skills' },
	{ label: 'Projects', href: '/#projects' },
	{ label: 'Experience', href: '/#experience' },
	{ label: 'Education', href: '/#education' },
	{ label: 'Contact', href: '/#contact' },
	{ label: 'Resume (PDF)', href: '/documents/cindy-brenes-resume.pdf', variant: 'ghost', icon: 'arrow-up-right', newTab: true },
];

// Text only screen readers hear (labels for icon buttons, landmarks and links)
export const a11y = {
	skipLink: 'Skip to main content',
	menuButton: 'Menu',
	mainNav: 'Main',
	homeLink: 'home', // read after the brand name: "cindybrenes.dev home"
	newTab: '(opens in new tab)', // added after a link's text when it opens a new tab
	carouselPrevious: 'Previous screenshot',
	carouselNext: 'Next screenshot',
	carouselGoTo: 'Go to screenshot',
};

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
	inspectTip: { tag: 'span', selectorClass: '.cindy-brenes', size: '251 x 44', font: 'Aa 13.3' },
	body: "I build accessible, responsive interfaces with close attention to detail, and I'm now bringing that same care to React.",
	primaryCta: { label: 'View my projects', href: '#projects', icon: 'arrow-right' },
	secondaryCta: { label: 'Download resume', href: '/documents/cindy-brenes-resume.pdf' },
};

export const about = {
	label: 'About',
	heading: 'The details are the design',
	lead: "I'm a frontend developer who has spent over a decade building accessible digital experiences for enterprise brands, including Target, Gap, Starbucks, Microsoft and eBay.",
	body: [
		"I turn detailed designs into responsive, cross-browser HTML and CSS, with semantic markup and accessibility built in from the start. I also work in JavaScript, and I'm growing my React skills through hands-on projects.",
		"My work spans Kentico, AEM and WordPress, from email campaigns and microsites to enterprise websites and landing pages. I've also collaborated with distributed teams across the US, Poland and Costa Rica.",
		"I completed Meta's React Specialization and I'm finishing Meta's Front-End Developer Professional Certificate (7 of 9 courses done).",
	],
	currently: {
		heading: 'Currently',
		items: [
			{ term: 'Building', value: 'A search app, a project manager & this portfolio — in React' },
			{ term: 'Learning', value: 'React, and building with AI tools' },
			{ term: 'Based in', value: 'St. Paul, MN' },
			{ term: 'Open to', value: 'Remote, mid-level frontend roles' },
			{ term: 'Languages', value: 'English & Spanish (native)' },
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
		items: ['React', 'React Hooks', 'React Router', 'JavaScript', 'Tailwind CSS'],
		},
		{
		name: 'CMS & Platforms',
		items: ['Kentico CMS', 'Adobe Experience Manager (AEM)', 'WordPress', 'Classic ASP', 'Email Campaign Development'],
		},
		{
		name: 'Tools & Workflow',
		items: ['Git/GitHub', 'Bitbucket', 'Vite', 'Grunt', 'Gulp', 'npm', 'ESLint', 'Prettier', 'Stylelint', 'Jira', 'Azure DevOps', 'Confluence', 'Claude Code'],
		},
		{
		name: 'Design & Creative Tools',
		items: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Graphic Design Fundamentals'],
		},
	],
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
				'Took focused time to modernize my frontend skills, combining structured React coursework with portfolio projects built from components and hooks.',
				"Completed Meta's React Specialization and finished 7 of 9 courses in Meta's Front-End Developer Professional Certificate.",
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
				'Grew from email into landing pages, app prototypes, and building and maintaining more than 25 card member microsites in ASP.',
				'Applied accessibility best practices (WCAG, ARIA, semantic HTML) across all projects as a standard part of development.',
				'Delivered frontend work for additional clients including AMEX Travel, Seabourn and Vivacity Care Clinics.',
			],
			tags: ['HTML Email', 'ASP', 'Landing Pages', 'Prototypes', 'WCAG / ARIA'],
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
				'Built websites, microsites, landing pages, email campaigns and banners for Gap Corporate, Target, Costco Travel, Microsoft, eBay, Nintendo and Starbucks.',
				'Built a shared component system for the Gap Inc. corporate site, themed for Gap, Old Navy, Banana Republic and Athleta.',
				'Used Kentico and Grunt/Gulp build workflows, including file minification and image optimization to improve page performance.',
				'Collaborated directly with F5 Networks on the F5 Labs site redesign using AEM and Agile methodology, working across a distributed team in the US, Poland and Costa Rica.',
				'Incorporated WCAG and ARIA accessibility standards into all projects, with particular attention to high-compliance enterprise clients like Target and Microsoft.',
			],
			tags: ['Kentico CMS', 'AEM', 'Grunt / Gulp', 'Agile', 'WCAG / ARIA'],
			},
			{
			title: 'Frontend Developer',
			period: 'Jan 2012 – Jul 2017',
			bullets: [
				'Joined POP as a Web Developer focused on HTML email development, progressing to full frontend production across major enterprise brands, including The Home Depot.',
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
			title: 'React Specialization',
			institution: 'Meta · via Coursera',
			period: 'Sep 2025',
			},
			{
			title: 'Front-End Developer Professional Certificate',
			institution: 'Meta · via Coursera',
			period: 'In progress · 7 of 9 courses',
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
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/cindybrenes', icon: 'linkedin', newTab: true },
		{ label: 'GitHub', href: 'https://github.com/cinbrefe', icon: 'github', newTab: true },
	],
};

export const footer = {
	text: `© ${new Date().getFullYear()} Cindy Brenes · St. Paul, MN`,
	credit: 'Designed & built by me, with help from AI',
	backToTop: { label: 'Back to top ↑', href: '#top' },
};

// Shown in place of the page when something breaks (see ErrorBoundary)
export const errorPage = {
	documentTitle: 'Something went wrong | Cindy Brenes',
	heading: 'Something went wrong',
	message: 'This page ran into a problem. Try going back to the home page.',
	homeLink: 'Back to home',
};
