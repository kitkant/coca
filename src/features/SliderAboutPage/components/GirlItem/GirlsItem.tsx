import React from 'react';
import styled from '@emotion/styled'
import Image from 'next/image'

const GirlsItem = () => {
	return (
		<Wrapper className='slidedonttouch '>
		<Image alt='slide' src={'/AboutPage/slides/slide3.png'} style={{objectFit: "contain", maxWidth: '502px'}} width={502} height={460}/>
	</Wrapper>
	);
};


const Wrapper = styled.div`
	height: 630px;
`

export default GirlsItem;