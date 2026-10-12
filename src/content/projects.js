// Project content: the Projects section on the home page and the project pages (/projects/<slug>).
// Contains: the section label/heading, `page` (fixed text on every project page), `current` (React projects)
// and `agency` (client work: each item is a card on the home page and its own project page).
// Edit content here without touching component code. Anything in [brackets] is a placeholder, not final copy.

export const projects = {
	label: 'Projects',
	heading: 'Selected projects',
	current: {
		heading: 'Current projects — React',
		period: '2026',
		items: [
		{
			number: "01",
			title: 'React Search App',
			description: 'A search and discovery app for movies and shows, powered by the TMDB API.',
			stack: ['React', 'JavaScript', 'Sass', 'TMDB API'],
			links: [
			{ label: 'Code', href: 'https://github.com/cinbrefe/react-search-app' },
			],
		},
		{
			number: "02",
			title: 'React Project Manager',
			description: 'Create, organize and track projects, each with its own task list.',
			stack: ['React 19', 'Custom Hooks', 'Tailwind CSS'],
			links: [
			{ label: 'Code', href: 'https://github.com/cinbrefe/react-project-manager' },
			],
		},
		{
			number: "03",
			title: 'This portfolio',
			description: 'Token-driven dark theme tuned for WCAG contrast, built with AI as a pair programmer.',
			stack: ['React', 'React Router', 'Sass', 'Vercel'],
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
			image: { src: '/images/projects/target/target-cover.webp', alt: "Target's corporate homepage, with a featured-story carousel" },
			intro: "Target was one of my longest-running clients at POP. For about three years I worked with Roundel, Target's media network, building landing pages and banners while also keeping pages on the corporate site up to date. I then helped redesign the corporate site section by section, owning the styles and the reusable components behind them.",
			contributions: [
				'Built landing pages and banners for Roundel campaigns, as part of a team based in Costa Rica',
				'Updated corporate pages like Gift Cards and REDcard, built REDcard emails, and added new content to the Annual Report',
				"Redesigned the homepage, Careers and the press room on Kentico CMS with Sass and Grunt, writing markup inside Kentico's .NET templates. In a team of two developers, I owned the styles and built reusable components used across the site, while my teammate focused on JavaScript.",
				"Wrote accessibility-first markup to meet Target's strict standards, and every page went through careful accessibility QA",
			],
			stack: ['Kentico CMS (.NET)', 'HTML', 'CSS', 'Sass', 'Grunt', 'HTML Email', 'WCAG / ARIA'],
			gallery: [
				{ src: '/images/projects/target/target-slide-1-bullseye-view.webp', alt: "Target's corporate homepage, with a featured-story carousel above a grid of news cards", title: 'Redesigned corporate homepage' },
				{ src: '/images/projects/target/target-slide-2-careers.webp', alt: "Target's corporate careers page, with the headline “work somewhere you love,” links to job categories and a job search bar", title: 'Careers page with job search' },
				{ src: '/images/projects/target/target-slide-3-diversity.webp', alt: "Diversity and inclusion page in Target's corporate responsibility section, with a team photo above three columns of content", title: 'Corporate responsibility section' },
				{ src: '/images/projects/target/target-slide-4-responsive.webp', alt: 'The corporate homepage, careers and diversity pages side by side at phone width', title: 'The redesign at phone width' },
				{ src: '/images/projects/target/target-slide-5-targetrun.webp', alt: "Roundel landing page for Target's summer essentials campaign, with a red shopping basket and icons for grocery, grilling, snacks, summer care and pets", title: 'Roundel landing page: summer essentials' },
				{ src: '/images/projects/target/target-slide-6-mms-takeover.webp', alt: "Roundel landing page for M&M's at Target, with the M&M's characters, peanut candy bags and a coupon offer", title: "Roundel landing page: M&M's" },
				{ src: '/images/projects/target/target-slide-7-redcard-email.webp', alt: 'REDcard email promoting the Target Debit Card, with Bullseye the dog and a 5% off offer', title: 'REDcard email for the Target Debit Card' },
				{ src: '/images/projects/target/target-slide-8-gift-cards.webp', alt: 'Target gift cards page with seasonal card designs and three ways to send one: mail, email or mobile', title: 'Gift Cards page on Target.com' },
			],
		},
		{
			client: 'F5 Labs',
			slug: 'f5-labs',
			agency: 'POP',
			period: '2017 – 2021',
			description: 'AEM site redesign with a distributed Agile team across the US, Poland and Costa Rica.',
			image: { src: '/images/projects/f5/f5-cover.webp', alt: 'F5 Labs homepage in a dark theme, with featured research articles' },
			intro: "F5 Labs is F5's threat research site, part of f5.com. As a POP frontend developer working directly with F5's team, I took on the styles for its redesign in AEM. The code lived in a large codebase shared with the main f5.com site and a team across the US, Poland and Costa Rica.",
			contributions: [
				'Built the style foundation for the redesign and the homepage components, including the hero, content library, threat reports and vulnerability trends sections',
				'Restyled existing AEM markup instead of rewriting it, and made each change carefully, because F5 Labs shared styles with the main f5.com site and a change in one could break the other',
				'Delivered the redesign in small Agile steps, working from my own branch in a large shared codebase on Azure DevOps',
				'Worked closely with the designers, stayed flexible as the designs changed and kept the Sass organized so other developers could build on it',
			],
			stack: ['AEM', 'Sass', 'Grunt', 'Azure DevOps', 'Agile'],
			gallery: [
				{ src: '/images/projects/f5/f5-slide-1-home.webp', alt: 'F5 Labs homepage in a dark theme, with the headline “Threat research. Security leadership. Decades of experience.” above cards for the latest article and a featured series', title: 'Homepage hero with featured articles' },
				{ src: '/images/projects/f5/f5-slide-2-content-library.webp', alt: 'Content library section with article cards, filter buttons for Threats, CISO and Education, and a Load More Content button', title: 'Homepage: filterable content library' },
				{ src: '/images/projects/f5/f5-slide-3-threat-reports.webp', alt: 'Threat reports section with three report cards, each showing a topic tag, date, title and reading time', title: 'Homepage: threat reports' },
				{ src: '/images/projects/f5/f5-slide-4-vulnerability-trends.webp', alt: 'Vulnerability trends section with three large statistics about top CVEs, an intro paragraph and an “Every 9 hrs” callout', title: 'Homepage: vulnerability trends' },
				{ src: '/images/projects/f5/f5-slide-5-mobile.webp', alt: 'Three phone-width views of the F5 Labs homepage: the hero with featured cards, the content list and a quote with an illustration', title: 'Homepage components at phone width' },
			],
		},
		{
			client: 'American Express',
			slug: 'american-express',
			agency: 'DCG ONE',
			period: '2018 – 2025',
			description: 'Brand-strict email templates, growing into landing pages and app prototypes.',
			image: { src: '/images/projects/amex/amex-cover.webp', alt: 'Welcome page for the Hilton Honors American Express Business Card' },
			intro: 'At DCG ONE, I started as the email developer for American Express, building templates to strict brand guidelines that had to render pixel-perfect in every major email client. Over nearly seven years, the role grew into landing pages, app prototypes and card member microsites.',
			contributions: [
				'Built email templates to strict American Express brand guidelines and made sure they rendered pixel-perfect across all major email clients',
				'Built and maintained more than 25 card member microsites across the Gold, Platinum, Delta SkyMiles, Hilton Honors, Marriott Bonvoy and cash back card families, writing HTML, CSS and JavaScript inside ASP pages',
				'Grew beyond email into landing pages and app prototypes for new card features like Pay It Plan It',
				"Applied WCAG, ARIA and semantic HTML on every project as a standard part of development, even when the client didn't require it",
			],
			stack: ['ASP', 'HTML', 'CSS', 'JavaScript', 'HTML Email', 'WCAG / ARIA'],
			gallery: [
				{ src: '/images/projects/amex/amex-slide-1-gold.webp', alt: 'American Express Gold Card welcome page, with the card over a photo of two friends sharing a meal and the heading “Welcome to the Gold Card”', title: 'Gold Card member site' },
				{ src: '/images/projects/amex/amex-slide-2-platinum.webp', alt: 'Section promoting the American Express app, with a phone showing a Platinum Card balance and recent transactions', title: 'Platinum Card: app download section' },
				{ src: '/images/projects/amex/amex-slide-3-delta-reserve.webp', alt: 'Welcome page for the Delta SkyMiles Reserve Business Card, with a Delta 747 in flight above the limited edition card', title: 'Delta SkyMiles Reserve Business Card site' },
				{ src: '/images/projects/amex/amex-slide-4-hilton-business.webp', alt: 'Welcome page for the Hilton Honors American Express Business Card, with the blue card over a snowy resort at dusk', title: 'Hilton Honors Business Card site' },
				{ src: '/images/projects/amex/amex-slide-5-airline-program.webp', alt: 'Landing page headlined “Premium seats. Lower airfares.” with a first-class cabin photo and average savings of $600, $300 and $150 by ticket class', title: 'International Airline Program landing page' },
				{ src: '/images/projects/amex/amex-slide-6-pay-it-plan-it.webp', alt: 'Three Pay It Plan It app prototype screens: an intro screen with a photo of a couple in their kitchen, and card transactions with Pay It and Plan It buttons, before and after a payment', title: 'Pay It Plan It: app prototype' },
				{ src: '/images/projects/amex/amex-slide-7-emails.webp', alt: 'Three American Express emails about Flying Blue bonus miles, Marriott Bonvoy Gold Elite status and Working Capital Terms', title: 'Card member emails' },
			],
		},
		{
			client: 'Gap Corporate',
			slug: 'gap-corporate',
			agency: 'POP',
			period: '2017 – 2021',
			description: 'Corporate site redesign on Kentico, with shared components themed for each Gap Inc. brand.',
			image: { src: '/images/projects/gap/gap-cover.webp', alt: 'Gap Inc. careers homepage with a job search bar' },
			intro: 'Gap Inc. wanted a complete redesign of its corporate site, built from scratch on Kentico CMS. The team was one back-end developer and two frontend developers: I owned the markup and styles, while the other frontend developer focused on JavaScript.',
			contributions: [
				'Turned the first-phase Newsroom styles into reusable components and shared base styles for the rest of the site, my main focus on the project',
				"Built brand themes for Gap, Old Navy, Banana Republic and Athleta on those same components, swapping in each brand's typography and colors",
				'Built the Careers section, including the benefits page, talent areas and job search, styling the search my teammate built in JavaScript',
				'Built two careers email template options, including Job Alerts, to match the site and render well across email clients',
				'Wrote semantic, accessible markup across the site, and used a Grunt build with minification and image optimization to keep pages fast',
			],
			stack: ['Kentico CMS (.NET)', 'HTML', 'CSS', 'JavaScript', 'Sass', 'Grunt', 'HTML Email', 'Jira'],
			gallery: [
				{ src: '/images/projects/gap/gap-slide-1-careers-home.webp', alt: 'Gap Inc. careers homepage with a #wearegapinc hero photo, a job search bar that filters by brand, talent area and location, and the heading “What we’re made of”', title: 'Careers homepage with job search' },
				{ src: '/images/projects/gap/gap-slide-2-brand-templates.webp', alt: 'Careers pages for Gap, Old Navy, Banana Republic and Athleta, built from the same layout with each brand’s photos, typography and colors', title: 'One component set, four brand themes' },
				{ src: '/images/projects/gap/gap-slide-3-brand-mobile.webp', alt: 'The four brand careers pages side by side at phone width, each with its own fonts and button colors', title: 'Brand themes at phone width' },
				{ src: '/images/projects/gap/gap-slide-4-perks-benefits.webp', alt: 'Gap perks and benefits page with a team photo, an intro about time off, tuition and stock options, and an Apply button', title: 'Perks & benefits page' },
				{ src: '/images/projects/gap/gap-slide-5-job-posting.webp', alt: 'Job posting for a Senior Inventory Planner, with an Apply button, save and share options, role details and a location map', title: 'Job posting page' },
				{ src: '/images/projects/gap/gap-slide-6-newsroom.webp', alt: 'Gap Inc. newsroom with the featured story “Five reasons it rocks to be a woman at Gap Inc.” above tagged story cards', title: 'Newsroom homepage' },
				{ src: '/images/projects/gap/gap-slide-7-newsroom-article.webp', alt: 'Newsroom article about an Old Navy employee, with a large headline, byline and photo above the story text', title: 'Newsroom article' },
				{ src: '/images/projects/gap/gap-slide-8-job-alerts-email.webp', alt: 'Job Alerts email at desktop and phone width: a list of openings from Old Navy, Banana Republic and Athleta, and a message asking the reader to verify their email, with their alert criteria', title: 'Job Alerts email templates' },
			],
		},
		],
		otherClients: {
			label: 'Also delivered for',
			names: ['Microsoft', 'Starbucks', 'eBay', 'Costco Travel', 'Nintendo', 'The Home Depot', 'AMEX Travel', 'Seabourn'],
		},
	},
};
