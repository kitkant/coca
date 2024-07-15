import styled from '@emotion/styled'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

type Inputs = {
	firstName: string
	lastName: string
	email: string
	phone: number
	message: string
}
const phoneRegExp =
	/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/
const schema = yup
	.object({
		firstName: yup
			.string()
			.required('Name is required')
			.max(20, 'Name cannot exceed more than 20 characters')
			.trim(),
		lastName: yup
			.string()
			.required('Last name is required')
			.max(20, 'Last name cannot exceed more than 20 characters')
			.trim(),
		email: yup
			.string()
			.required('Email Address is required')
			.trim()
			.email('Entered value does not match email format'),
		phone: yup
			.string()
			.matches(phoneRegExp, 'Phone number is not valid')
			.trim(),
		message: yup.string(),
	})
	.required()
type FormData = yup.InferType<typeof schema>

const FormContactsPage = () => {
	const [select, setSelect] = useState('US')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	})
	const onSubmit = (data: FormData) => console.log(data)

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

						<WrapperInput onSubmit={handleSubmit(onSubmit)}>
							<WrapperName>
								<ContainerName>
									<InputTitle>First name</InputTitle>
									<Input
										{...register('firstName')}
										type='text'
										placeholder='First name'
									/>
									<ErrorMessage
										errors={errors}
										name='firstName'
										render={({ message }) => <Error>{message}</Error>}
									/>
								</ContainerName>
								<ContainerName>
									<InputTitle>Last name</InputTitle>
									<Input
										{...register('lastName')}
										type='text'
										placeholder='Last name'
									/>
									<ErrorMessage
										errors={errors}
										name='lastName'
										render={({ message }) => <Error>{message}</Error>}
									/>
								</ContainerName>
							</WrapperName>
							<ContainerInput>
								<InputTitle>Email</InputTitle>
								<Input
									{...register('email')}
									type='email'
									placeholder='you@company.com'
								/>
								<ErrorMessage
									errors={errors}
									name='email'
									render={({ message }) => <Error>{message}</Error>}
								/>
							</ContainerInput>
							<ContainerInput>
								<InputTitle>Phone number</InputTitle>
								<WrapperPhoneInput>
									<PhoneInput
										{...register('phone')}
										type='text'
										placeholder={
											select === 'US'
												? '+1 (555) 000-0000'
												: '+7 (555) 000-0000'
										}
									/>
									
									<WrapperSelectCode>
									
										<SelectCode
											defaultValue={select}
											onChange={event => {
												setSelect(event.target.value)
											}}
										>
											<SelectOptionCode value={'US'}>US</SelectOptionCode>
											<SelectOptionCode value={'RUS'}>RUS</SelectOptionCode>
										</SelectCode>
									</WrapperSelectCode>
								</WrapperPhoneInput>
									<ErrorMessage
										errors={errors}
										name='phone'
										render={({ message }) => <Error>{message}</Error>}
									/>
							</ContainerInput>
							<ContainerInput>
								<InputTitle>Message</InputTitle>
								<Textarea
									{...register('message')}
									rows={5}
									cols={33}
									placeholder='Leave us a message...'
								/>
							</ContainerInput>
							<FormBtn type='submit'>Get Started</FormBtn>
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
	max-height: 1165px;
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
	padding: 56px 48px 50px 48px;
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
const WrapperInput = styled.form`
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
	padding: 14px 10px 14px 80px;
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
	background-color: #1d1e25;
	line-height: 24px;
	font-weight: 800;
	letter-spacing: 0;
	border-radius: 100px;
	color: #fff;
	max-width: 167px;
	&:hover {
		opacity: 0.9;
	}
	margin-top: 8px;
`
const Form = styled.form``
const Error = styled.p`
	padding-left: 15px;
	color: rgb(239,47,74);
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 0;
	line-height: 24px;

`
export default FormContactsPage
