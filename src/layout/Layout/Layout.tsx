import Header from '@/features/Header/Header'
import React, { Fragment } from 'react';
import { Inter } from "next/font/google";
import styled from '@emotion/styled'


const inter = Inter({ subsets: ["latin"] });

const Layout = ({children}: any) => {
	return (
		<Wrapper >
			<Header/>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled.div`

	
`

export default Layout;