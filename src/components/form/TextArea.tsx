import React from 'react'

interface TextAreaProps {
	title?: string
	placeholder?: string
	value?: string
	onChange?: (value: string) => void
}

const TextArea: React.FC<TextAreaProps> = ({ title, placeholder, value, onChange }) => {
	const _onChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({ target: { value: newValue } }) => {
		if (onChange) {
			onChange(newValue)
		}
	}

	return (
		<label className="block">
			{title && <span className="text-gray-800">{title}</span>}
			<textarea
				placeholder={placeholder}
				value={value}
				onChange={_onChange}
				rows={5}
				className="block w-full min-h-24 mt-1 bg-gray-300 border-gray-300 rounded-md drop-shadow focus:bg-gray-50 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			/>
		</label>
	)
}

export default TextArea
