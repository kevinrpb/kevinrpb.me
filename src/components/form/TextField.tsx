import React from 'react'

interface TextFieldProps {
	title?: string
	type?: string
	placeholder?: string
	value?: string
	onChange?: (value: string) => void
}

const TextField: React.FC<TextFieldProps> = ({ title, type, placeholder, value, onChange }) => {
	const _onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value: newValue } }) => {
		if (onChange) {
			onChange(newValue)
		}
	}

	return (
		<label className="block">
			{title && <span className="text-gray-800">{title}</span>}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={_onChange}
				className="block w-full mt-1 bg-gray-300 border-gray-300 rounded-md drop-shadow focus:bg-gray-50 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			/>
		</label>
	)
}

export default TextField
