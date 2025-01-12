module.exports = {
	lang: 'en-US',
	title: 'Documentation',
	description: '@prettier/plugin-pug documentation',
	base: process.env.NODE_ENV === 'production' ? '/plugin-pug/' : '/',
	head: [['link', { rel: 'icon', href: `/icon.png` }]],

	theme: 'yuu',
	themeConfig: {
		yuu: {
			defaultDarkTheme: true,
			defaultColorTheme: 'blue'
		},

		repo: 'prettier/plugin-pug',
		docsDir: 'docs',
		docsBranch: 'main',
		logo: 'https://camo.githubusercontent.com/f89d53e813140369c509e67424833cdfc3f76dcf997d4b3b0a1174ec12304600/68747470733a2f2f63646e2e7261776769742e636f6d2f70726574746965722f70726574746965722d6c6f676f2f6d61737465722f696d616765732f70726574746965722d69636f6e2d6c696768742e737667',
		editLinks: true,
		nav: [
			{
				text: 'Guide',
				link: '/guide/'
			},
			{
				text: 'Configuration',
				items: [
					{
						text: 'Standard Prettier Overrides',
						link: '/guide/standard-prettier-overrides.md'
					},
					{
						text: 'Pug specific options',
						link: '/guide/pug-specific-options.md'
					}
				]
			}
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Guide',
					collapsable: false,
					children: ['']
				},
				{
					title: 'Configuration',
					collapsable: false,
					children: ['standard-prettier-overrides', 'pug-specific-options']
				}
			]
		}
	}
};
