import BlackFooter from '@/features/BlackFooter/BlackFooter'
import HeroAboutPage from '@/features/HeroAboutPage/HeroAboutPage'
import OurTeamAboutPage from '@/features/OurTeamAboutPage/OurTeamAboutPage'
import PowerfulAboutPage from '@/features/PowerfulAboutPage/PowerfulAboutPage'
import SliderAboutPage from '@/features/SliderAboutPage/SliderAboutPage'

import Layout from '@/layout/Layout/Layout'

const About = () => {
	return (
		<Layout>
			<HeroAboutPage />
			<SliderAboutPage />
			<PowerfulAboutPage />
			<OurTeamAboutPage />
			<BlackFooter/>
		</Layout>
	)
}

export default About
