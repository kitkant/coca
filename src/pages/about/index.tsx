import HeroAboutPage from '@/features/HeroAboutPage/HeroAboutPage'
import SliderAboutPage from '@/features/SliderAboutPage/SliderAboutPage'
import Layout from '@/layout/Layout/Layout'
import React from 'react';

const About = () => {
	return (
		<Layout>
			<HeroAboutPage/>
			<SliderAboutPage/>
		</Layout>
	);
};

export default About;