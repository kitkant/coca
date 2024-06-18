import Header from '@/features/Header/Header'
import React, { Fragment } from 'react';
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

const Layout = ({children}: any) => {
	return (
		<Fragment >
			<Header/>
			{children}
		</Fragment>
	);
};

export default Layout;