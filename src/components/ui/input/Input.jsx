import { useState, useRef } from 'react'
import styles from './Input.module.scss'

const Input = ({ placeholder }) => {
	const [value, setValue] = useState('')
	const inputRef = useRef()

	const handleChange = event => {
		setValue(event.target.value)
	}

	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				type={placeholder == 'password' ? placeholder : 'text'}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				ref={inputRef}
			/>
		</div>
	)
}

export default Input
