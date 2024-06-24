import React from 'react';
import styled from '@emotion/styled'
import Image from 'next/image'

const BelieverItem = () => {
	return (
		<Wrapper>
			<Image alt='slide' src={'/AboutPage/slides/slide2.png'} style={{objectFit: "contain", maxWidth: '502px'}} width={502} height={370}/>
			<WrapperText>
				<Title>
				What we believe in
				</Title>
				<Text>
				Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...
				</Text>
			</WrapperText>
			<Btn>See Details</Btn>
		</Wrapper>
	);
};

const Wrapper = styled.div`

`
const WrapperText = styled.div`
	padding-top: 24px;
	display: flex;
	flex-direction: column;
	gap: 8px;

	padding-bottom: 32px;
`
const Title = styled.h2`
	font-weight: 700;
	font-size: 32px;
	line-height: 150%;
	letter-spacing: -1px;
`
const Text = styled.p`
	font-size: 18px;
	letter-spacing: 0;
	line-height: 32px;
	color: #7E8492;
`
const Btn = styled.button`
	padding: 12px 34px;
	background-color: #1D1E25;
	color: #fff;
	border-radius: 100px;
	font-size: 16px;
	letter-spacing: 0;
	line-height: 24px;
	font-weight: 600;
	transition: all ease 0.3s;
	&:hover{
		opacity: 0.9;
	}
	
`
export default BelieverItem;