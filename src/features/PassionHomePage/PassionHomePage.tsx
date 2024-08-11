import styled from '@emotion/styled'
import Image from 'next/image'
import { LetsIconsCheckRing } from './UI/checkMark'
import { down } from '@/styles/utils/breakpoints'
import useScreenSize from '@/hooks/useScreenSize'

const PassionHomePage = () => {

	const screen = useScreenSize()

	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<WrapperImg>
							<Image src={'/HomePage/passion.png'} width={screen.width < 1440 ? 560 : 585} height={651} alt='img'/>
							<WrapperMarkImg>
								<Image src={'/HomePage/BarChart.svg'} width={290} height={298} alt='img' />
							</WrapperMarkImg>
					</WrapperImg>
					<WrapperText>
						<WrapperTitle>
							<Title>Passion to increase company revenue up to 85%</Title>
							<SubTitle>
								Automate your sales, marketing and service in one platform.
								Avoid date leaks and enable consistent messaging
							</SubTitle>
						</WrapperTitle>
						<WrapperMark>
							<ContainerMark>
								<LetsIconsCheckRing/>
								<Mark>
									Close more deals with single - page contact managment
								</Mark>
							</ContainerMark>
							<ContainerMark>
							<LetsIconsCheckRing/>
								<Mark>
									Enjoy one-click calling, call scripts and voicemail automation
								</Mark>
							</ContainerMark>
							<ContainerMark>
							<LetsIconsCheckRing/>
								<Mark>
									Take stages and milestones of your deals to keep the sales
									process an track
								</Mark>
							</ContainerMark>
						</WrapperMark>
					</WrapperText>
				</Container>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 160px 0 94px 0
`
const Container = styled.div`
	display: flex;
	gap: 58px;
	align-items: center;
	
`
const WrapperImg = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
	max-width: 585px;
`
const WrapperText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`
const WrapperTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`
const WrapperMark = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`
const WrapperMarkImg = styled.div`
	position: absolute;
	z-index: 2;
	right: 36px;
	bottom: 40px;
`
const Title = styled.h3`
	font-size: 56px;
	letter-spacing: -2px;
	line-height: 120%;
	font-weight: 700;
	${down('xlg')}{					
		font-size: 48px;
		max-width: 450px;
}
`
const SubTitle = styled.p`
	color: #7E8492;
	font-size: 18px;
	line-height: 32px;
	max-width: 345px;
		${down('xlg')}{					
		font-size: 16px;
		line-height: 28px;
			max-width: 300px;

}
`
const ContainerMark = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`
const Mark = styled.p`
	font-size: 18px;
	line-height: 32px;
	font-weight: 500;
	max-width: 330px;
		${down('xlg')}{					
		font-size: 16px;
		line-height: 28px;
			max-width: 290px;
}
`
export default PassionHomePage
