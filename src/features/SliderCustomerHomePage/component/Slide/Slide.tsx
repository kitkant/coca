import styled from '@emotion/styled'
import Image from 'next/image'

interface Props {
	text: string
	name: string
	position: string
}

const Slide = ({ text, name, position }: Props) => {
	return (
		<Wrapper>
			<ContainerImg>
				<Image
					alt='img'
					width={115}
					height={77}
					src={'/HomePage/sliderCustomer/mark.svg'}
				/>
			</ContainerImg>

			<WrapperCustomer>
				<WrapperRate>
					<Image
						src={'/HomePage/sliderCustomer/Star.svg'}
						width={20}
						height={20}
						alt='star'
					/>
					<Image
						src={'/HomePage/sliderCustomer/Star.svg'}
						width={20}
						height={20}
						alt='star'
					/>
					<Image
						src={'/HomePage/sliderCustomer/Star.svg'}
						width={20}
						height={20}
						alt='star'
					/>
					<Image
						src={'/HomePage/sliderCustomer/Star.svg'}
						width={20}
						height={20}
						alt='star'
					/>
					<Image
						src={'/HomePage/sliderCustomer/Star.svg'}
						width={20}
						height={20}
						alt='star'
					/>
					<TextRate>5.0</TextRate>
				</WrapperRate>
				<TextCustomer>
				“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”
				</TextCustomer>
				<WrapperAvatar>
				<WrapperImg>
					<Image src={'/HomePage/sliderCustomer/avatar1.png'} width={56} height={56} alt='avatar'/>
				</WrapperImg>
				<WrapperName>
					<Name>
					Renee Wells
					</Name>
					<SecondName>
					Product Designer, Quotient
					</SecondName>
				</WrapperName>
			</WrapperAvatar>
			</WrapperCustomer>
		
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	gap: 42px;
`
const ContainerImg = styled.div`
	max-height: 77px;
	max-width: 115px;
`
const WrapperCustomer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 65px;
	max-width: 850px;
`
const WrapperRate = styled.div`
	display: flex;
	gap: 8px;
`
const TextRate = styled.p`
	line-height: 26px;
`
const TextCustomer = styled.p`
	font-size: 40px;
	letter-spacing: -1px;
	line-height: 130%;
	margin-top: 16px;
`
const WrapperAvatar = styled.div`
	display: flex;
	gap: 24px;
	margin-top: 40px;
`
const WrapperImg = styled.div`
	width: 56px;
	height: 56px;
	border-radius: 50%;
`
const WrapperName = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	line-height: 26px;
`
const Name = styled.p`
	font-size: 18px;
	font-weight: 700;
`
const SecondName = styled.p`
	color: #7E8492;

	
`
export default Slide
