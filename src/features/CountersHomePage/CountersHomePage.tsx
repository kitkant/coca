import Counter from '@/compoents/Counter'
import styled from '@emotion/styled'
import Image from 'next/image'
import { down } from '@/styles/utils/breakpoints'


const CountersHomePage = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Container>
				<WrapperCounter>
						<WrapperInformation>
							<WrapperNumber>
								<Counter end={17}/>
								<span>k</span>
							</WrapperNumber>
							<Text>
							happy customers on<br/> worldwide
							</Text>
						</WrapperInformation>
						<Line></Line>
						<WrapperInformation>
							<WrapperNumber>
								<Counter end={15}/>
								<span>+</span>
							</WrapperNumber>
							<Text>
							Hours of work<br/> experience
							</Text>
						</WrapperInformation>
						<Line></Line>
						<WrapperInformation>
							<WrapperNumber>
								<Counter end={50}/>
								<span>+</span>
							</WrapperNumber>
							<Text>
							Creativity & passionate<br/> members
							</Text>
						</WrapperInformation>
						<Line></Line>
						<WrapperInformation>
							<WrapperNumber>
								<Counter end={100}/>
								<span>+</span>
							</WrapperNumber>
							<Text>
							Integrations lorem<br/> ipsum integrations
							</Text>
						</WrapperInformation>
						
				</WrapperCounter>
				<Image src={'/HomePage/group.png'} width={1200} height={536} alt='img'/>
				<WrapperText>
				<Title>
				Lift your business to new heights with our digital marketing services
				</Title>
				<SubTitle>
				To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers
				</SubTitle>
				</WrapperText>
				</Container>
				
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 66px;
	padding-bottom: 160px;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 80px;
`
const WrapperCounter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const WrapperInformation = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`
const WrapperNumber = styled.div`
	font-size: 64px;
	line-height: 120%;
	font-weight: 700;
	${down('xlg')}{					
		font-size: 56px;
}
`
const Text = styled.p`
	font-size: 18px;
	line-height: 32px;
	color: #7E8492;
	${down('xlg')}{					
		line-height: 28px;

}
`
const Line = styled.div`
	height: 99px;
	border-right: 1px solid #CED1D8;
`
const WrapperText = styled.div`
	display: flex;
	justify-content: space-between;
`
const Title = styled.h2`
	font-size: 56px;
	line-height: 120%;
	letter-spacing: -2px;
	font-weight: 600;
	max-width: 700px;
	${down('xlg')}{					
		font-size: 48px;
			max-width: 500px;
}
`
const SubTitle = styled.p`
	color: #7E8492;
	font-size: 18px;
	line-height: 32px;
	max-width: 421px;
	${down('xlg')}{					
		font-size: 16px;
		line-height: 28px;
}
`
export default CountersHomePage
