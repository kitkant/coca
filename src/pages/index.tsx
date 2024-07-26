import AnalyzeHomePage from '@/features/AnalizeHomePage/AnalyzeHomePage'
import CountersHomePage from '@/features/CountersHomePage/CountersHomePage'
import Footer from '@/features/Footer/Footer'
import HelpClient from '@/features/HelpClient/HelpClient'
import HomeHero from '@/features/HomeHero/HomeHero'
import PartnersHomePage from '@/features/PartnersHomePage/PartnersHomePage'
import PassionHomePage from '@/features/PassionHomePage/PassionHomePage'
import SliderCustomerHomePage from '@/features/SliderCustomerHomePage/SliderCustomerHomePage'
import SliderHomePage from '@/features/SliderHomePage/SliderHomePage'
import Layout from '@/layout/Layout/Layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<div className={'wrapper'}>
			<Layout>
				<HomeHero />
				{/* <HelpClient />
				<PassionHomePage />
				<CountersHomePage />
				<PartnersHomePage />
				<AnalyzeHomePage/>
				<SliderHomePage/>
				<SliderCustomerHomePage/> */}
				{/* <Footer/> */}
			</Layout>
		</div>
	)
}
