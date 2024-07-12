import styled from '@emotion/styled'
import Image from 'next/image'

const FormContactsPage = () => {
	return (
		<Wrapper>
			<Container>
				<WrapperImg>
					<Image
						src={'/ContactsPage/Image.png'}
						alt='img'
						width={939}
						height={885}
					/>
				</WrapperImg>
				<div className='container'>
					<WrapperForm>
						<ContainerTitle>
							<FormTitle>Let’s level up your brand</FormTitle>
							<FormSubTitle>
								You can reach us anytime
								<FormSpanEmail>&nbsp;hellosansbrothers@gmail.com</FormSpanEmail>
							</FormSubTitle>
						</ContainerTitle>
						<WrapperInput>
							<WrapperName>
								<ContainerName>
									<InputTitle>First name</InputTitle>
									<Input type='text' placeholder='First name' />
								</ContainerName>
								<ContainerName>
									<InputTitle>Last name</InputTitle>
									<Input type='text' placeholder='Last name' />
								</ContainerName>
							</WrapperName>
							<ContainerInput>
								<InputTitle>Email</InputTitle>
								<Input type='email' placeholder='you@company.com' />
							</ContainerInput>
							<ContainerInput>
								<InputTitle>Phone number</InputTitle>
								<WrapperPhoneInput>
									<PhoneInput type='text' placeholder='+1 (555) 000-0000' />
									<WrapperSelectCode>
										<SelectCode>
											<SelectOptionCode>
											US
											</SelectOptionCode>
											<SelectOptionCode>
											ES
											</SelectOptionCode>
											<SelectOptionCode>
											RUS
											</SelectOptionCode>
										</SelectCode>
									</WrapperSelectCode>
								</WrapperPhoneInput>
							</ContainerInput>
							<ContainerInput>
								<InputTitle>Message</InputTitle>
								<Textarea
									rows={5}
									cols={33}
									placeholder='Leave us a message...'
								/>
							</ContainerInput>
							<FormBtn>Get Started</FormBtn>
						</WrapperInput>
					
					</WrapperForm>
				</div>
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding-top: 120px;
	padding-bottom: 261px;
	
`
const Container = styled.div`
	position: relative;
	z-index: 0;
	max-width: 1440px;
	width: 100%;
	display: flex;
	justify-content: center;
`
const WrapperImg = styled.div`
	position: absolute;
	width: 939px;
	height: 885px;
	right: 0;
`
const WrapperForm = styled.div`
	padding: 56px 48px;
	border: 1px solid #ced1d8;
	background-color: #fff;
	max-width: 610px;
	display: flex;
	flex-direction: column;
	gap: 48px;
`
const ContainerTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`
const FormTitle = styled.h3`
	font-size: 36px;
	line-height: 44px;
	letter-spacing: -2%;
	font-weight: 700;
`
const FormSubTitle = styled.p`
	color: #7e8492;
	font-size: 18px;
	line-height: 30px;
	letter-spacing: 0;
`
const FormSpanEmail = styled.span`
	color: #1463ff;
	font-weight: 500;
`
const WrapperName = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`
const ContainerName = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	max-width: 240px;
	width: 100%;
`
const InputTitle = styled.span`
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0;
	font-weight: 500;
`
const Input = styled.input`
	padding: 14px 10px;
	border: 1px solid #ced1d8;
	border-radius: 8px;
	max-height: 44px;
`
const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`
const WrapperInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`
const Textarea = styled.textarea`
	padding: 14px 10px;
	border: 1px solid #ced1d8;
	border-radius: 8px;
	resize: none;
`
const WrapperPhoneInput = styled.div`
	width: 100%;
	position: relative;
	z-index: 0;
`
const PhoneInput = styled.input`
	padding: 14px 10px 14px 70px;
	border: 1px solid #ced1d8;
	border-radius: 8px;
	max-height: 44px;
	width: 100%;
`
const WrapperSelectCode = styled.div`
	position: absolute;
	z-index: 1;
	top: 2px;
	background-color: transparent;
	left: 2px;
	border-radius: 8px;
`
const SelectCode = styled.select`
	padding: 10px 12px;
	background-image: url('/ContactsPage/chevron-down.svg');
	  background-repeat: no-repeat;
  border-color: green;
  outline: 0;
	background-position: right 8px top 60%;
	appearance: none;
	width: 68px;
		max-height: 40px;
		border-radius: 8px;
		cursor: pointer;
`
const SelectOptionCode = styled.option``
const FormBtn = styled.button`
	padding: 16px 32px;
	background-color: #1D1E25;
	line-height: 24px;
	font-weight: 800;
	letter-spacing: 0;
	border-radius: 100px;
	color: #fff;
	max-width: 167px;
	&:hover{
		opacity: 0.9;
	}
		margin-top: 8px;
`

export default FormContactsPage
