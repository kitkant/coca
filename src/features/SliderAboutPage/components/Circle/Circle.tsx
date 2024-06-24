import React from 'react';
import styled from '@emotion/styled'

const Circle = () => {
	return (
		<CircleDiv>
			
		</CircleDiv>
	);
};

const CircleDiv = styled.div`
	height: 551px;
	width: 551px;
	border-radius: 50%;
	background-color: rgba(250,117,21, 0.25);
	filter: blur(220px);
	position: absolute;
	bottom: -225px;
	left: 21px;
	z-index: -1;
`
export default Circle;