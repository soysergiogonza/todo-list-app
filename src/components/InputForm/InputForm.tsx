import styles from './InputForm.module.css';
import {ChangeEvent, FormEvent} from 'react';
import {Task} from '../../../interfaces/interfaces.ts';
import {useTask} from '../../../hooks/useTask.tsx';

interface Props {
	input: string;
	setInput: (value: string) => string;
	task: Task[];
	setTask: (taskList: (string | Task)[]) => void;
}

export const InputForm = ({input, setInput, task, setTask}: Props) => {
	const {addTask} = useTask(input, setInput, task, setTask);
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault();
		setInput(event.target.value);
	};
	
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setTask(addTask);
	};
	
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
				onChange={handleChange}
				className={styles.input}
				type="text"
				placeholder="Agregar tarea"
				value={input}
				required
			/>
			<button className={styles.button}>Agregar Tarea</button>
		</form>
	);
};
