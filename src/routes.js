import AboutUs from './AboutUs.svelte';
import Home from './Home.svelte';
import Contact from './Contact.svelte';
export default [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: AboutUs
	},
	{
		path: '/contact',
		component: Contact
	}
];
