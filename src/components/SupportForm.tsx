import React, { useEffect, useRef, useState } from 'react'

import HCaptcha from '@hcaptcha/react-hcaptcha'

import SelectField from './form/SelectField'
import TextField from './form/TextField'
import TextArea from './form/TextArea'

import paths from '@/data/paths.json'

const apps = paths.apps.map(({ app: value, title }) => ({ value, title }))
const appIds = apps.map(({ value }) => value)

enum FormStatus {
	Initial,
	Submitting,
	Success,
	ErrorMissingFields,
	ErrorCaptcha,
	ErrorOther,
}

interface FormData {
	app: string
	name: string
	email: string
	message: string
	captchaToken: string | null
	poohLikesCheck: boolean
}

interface FormResponse {
	status: string
	error?: string
}

const getStatusText = (status: FormStatus): string => {
	switch (status) {
		case FormStatus.Initial:
			return ' '
		case FormStatus.Submitting:
			return 'Submitting...'
		case FormStatus.Success:
			return 'Submitted.'
		case FormStatus.ErrorMissingFields:
			return 'Please, fill all required fields (they are marked with a star *)'
		case FormStatus.ErrorCaptcha:
			return 'Please, complete the captcha challenge to submit the form.'
		case FormStatus.ErrorOther:
			return 'There was an error submitting the form. Please, refresh the page and try again.'
	}

	throw new Error('Should not reach this!')
}

const submitForm = async ({
	app,
	name,
	email,
	message,
	poohLikesCheck,
	captchaToken,
}: FormData): Promise<FormResponse> => {
	const formData = {
		app,
		name,
		email,
		messageLines: message.split('\n'),
		'h-captcha-response': captchaToken,
		'pooh-likes': poohLikesCheck,
	}

	const responseData = await fetch(import.meta.env.PUBLIC_FORM_CONTACT_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(formData),
	})

	return await responseData.json()
}

const StatusSpan: React.FC<{ status: FormStatus }> = ({ status }) => {
	const text = getStatusText(status)

	switch (status) {
		case FormStatus.Success:
			return <span className="text-center text-green-400">{text}</span>
		case FormStatus.ErrorMissingFields:
			return <span className="text-center text-red-800">{text}</span>
		case FormStatus.ErrorCaptcha:
			return <span className="text-center text-red-800">{text}</span>
		case FormStatus.ErrorOther:
			return <span className="text-center text-red-800">{text}</span>
		default:
			return <span className="text-center text-slate">{text}</span>
	}
}

const SupportForm: React.FC = () => {
	const [app, setApp] = useState('')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [privacyCheck, setPrivacyCheck] = useState(false)
	const [poohLikesCheck, setPoohLikesCheck] = useState(false) // Honeypot

	const [captchaToken, setCaptchaToken] = useState<string | null>(null)
	const captchaRef = useRef<HCaptcha | null>(null)

	const [status, setStatus] = useState<FormStatus>(FormStatus.Initial)

	const validate = (): boolean => {
		if (message.length < 10 || privacyCheck !== true) {
			console.warn(privacyCheck)
			setStatus(FormStatus.ErrorMissingFields)
			return false
		}

		if (captchaToken === null || captchaToken === '') {
			setStatus(FormStatus.ErrorCaptcha)
			return false
		}

		return true
	}

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		if (validate()) {
			setStatus(FormStatus.Submitting)

			const formData = { app, name, email, message, poohLikesCheck, captchaToken }

			submitForm(formData).then(({ status, error }) => {
				if (status === 'error') {
					console.error(`submision error: ${error}`)
					setStatus(FormStatus.ErrorOther)

					return
				}

				setStatus(FormStatus.Success)
			})
		}
	}

	const onVerify = (token: string, ekey: string) => {
		console.info('hCaptcha verified')
		setCaptchaToken(token)
	}

	const onError = (error: string) => {
		console.error(`hCaptcha Error: ${error}`)
		setStatus(FormStatus.ErrorCaptcha)
	}

	const onExpire = () => {
		console.warn('hCaptcha Token Expired')
		setCaptchaToken(null)
	}

	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const appId = params.get('app')

		if (appId !== null && appIds.includes(appId)) {
			setApp(appId)
		} else {
			setApp(appIds[0])
		}
	}, [])

	return (
		<form className="flex flex-col gap-4" onSubmit={onSubmit}>
			<SelectField title="App*" values={apps} value={app} onChange={setApp} />
			<TextField title="Name" type="text" placeholder="Jay Walker" value={name} onChange={setName} />
			<TextField title="Email" type="email" placeholder="jaywalking@example.org" value={email} onChange={setEmail} />
			<TextArea title="Message*" placeholder="What do you need support with?" value={message} onChange={setMessage} />

			<div className="flex items-center">
				<input
					id="default-checkbox"
					type="checkbox"
					checked={privacyCheck}
					onChange={({ target: { checked } }) => setPrivacyCheck(checked)}
					className="w-4 h-4 rounded bg-gray-300 border-gray-300 drop-shadow focus:bg-gray-50 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-500"
				/>

				<label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-800">
					I have read and agree to the{' '}
					<a className="underline" href="/privacy">
						privacy policy
					</a>
					.
				</label>
			</div>

			<input
				className="hidden"
				type="checkbox"
				checked={poohLikesCheck}
				onChange={({ target: { checked } }) => setPoohLikesCheck(checked)}
				tabIndex={-1}
				autoComplete="off"
			/>

			<label className="flex flex-col mt-4 items-center self-center text-gray-800">
				<HCaptcha
					sitekey={import.meta.env.PUBLIC_CAPTCHA_KEY}
					onVerify={onVerify}
					onError={onError}
					onExpire={onExpire}
					ref={captchaRef}
				/>

				<span className="w-[300px] text-sm text-center text-gray-800">
					This website uses hCaptcha. Their{' '}
					<a className="underline" href="https://hcaptcha.com/privacy">
						privacy policy
					</a>{' '}
					and{' '}
					<a className="underline" href="https://hcaptcha.com/terms">
						terms of service
					</a>{' '}
					apply.
				</span>
			</label>

			<button
				type="submit"
				className="self-center h-14 w-[300px] text-indigo-50 bg-indigo-500 rounded-lg transition-colors duration-150 focus:shadow-outline hover:text-indigo-100 hover:bg-indigo-600"
			>
				Submit
			</button>

			{status !== FormStatus.Initial && <StatusSpan status={status} />}
		</form>
	)
}

export default SupportForm
