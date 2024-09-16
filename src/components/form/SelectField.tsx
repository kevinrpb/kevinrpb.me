import React from 'react'

interface SelectFieldValue {
	title: string
	value: string
}

interface SelectFieldProps {
	title?: string
	values?: SelectFieldValue[]
	value?: string
	onChange?: (value: string) => void
}

const SelectField: React.FC<SelectFieldProps> = ({ title, values, value, onChange }) => {
	const _onChange: React.ChangeEventHandler<HTMLSelectElement> = ({ target: { value: newValue } }) => {
		if (onChange) {
			onChange(newValue)
		}
	}

	return (
		<label className="block">
			{title && <span className="text-gray-800">{title}</span>}

			<select
				value={value}
				onChange={_onChange}
				className="block w-full mt-1 bg-gray-300 border-gray-300 rounded-md shadow-sm focus:bg-gray-50 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				{values &&
					values.map(({ title, value }) => (
						<option key={value} value={value}>
							{title}
						</option>
					))}
			</select>
		</label>
	)
}

export default SelectField
