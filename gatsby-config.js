/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Summit STEM`,
		description: `Education consulting for STEM Majors`,
		keywords: `STEM, STEM Major, Resume Help, Education, ...`,
		url: `https://www.summitstem.com`,
		image: `./static/otherImages/...`,
		lang: `en`,
		twitterUsername: `@SummitSTEM`,
		author: `Erika Zocher`,
		dev: `Rutvik Patel`,
		devLink: `www.rutvikpatel...`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: -50
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Rubik\:500,700`,
					`Roboto\:500`,
					`source sans pro\:300,400,400i,700` // you can also specify font weights and styles
				],
				display: 'swap'
			}
		},
	],
}
