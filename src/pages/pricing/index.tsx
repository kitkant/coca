import BlackFooter from '@/features/BlackFooter/BlackFooter'
import PlanPricingPage from '@/features/PlanPricingPage/PlanPricingPage'
import Layout from '@/layout/Layout/Layout'
import React from 'react';

const Pricing = () => {
	return (
		<Layout>
			<PlanPricingPage/>
			<BlackFooter/>
		</Layout>
	);
};

export default Pricing;