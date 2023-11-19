import styles from './Todo.module.css';
import {useState} from 'react';
import {useTask} from '../../../hooks/useTask';
import {Task} from '../../../interfaces/interfaces.ts';

interface Props {
	todo: Task;
	setTask: (tasks: Task[] | (() => void)) => Task[];
	input: string;
	setInput: (value: string) => string;
	task: Task[];
}

export const Todo = ({todo, setTask, input, setInput, task}: Props) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editedText, setEditedText] = useState<string>(todo.title);
	const {removeTask, updateTask} = useTask(
		input,
		setInput,
		task,
		setTask,
		todo,
		editedText,
	);
	
	const handleRemove = () => {
		setTask(removeTask);
	};
	
	const handleEdit = () => {
		setEdit(true);
	};
	
	
	const handleSaveEdit = ({key, type}: never) => {
		if (key === 'Enter' || type === 'click') {
			setTask(updateTask);
			setEdit(false);
		}
	};
	
	
	return (
		<div className={styles.task}>
			<input type="checkbox"/>
			<div className={styles.taskContent}>
				{edit ? (
					<input
						aria-label="todo"
						data-testid="editInput"
						type="text"
						value={editedText}
						onChange={(event) => setEditedText(event.target.value)}
						onKeyDown={handleSaveEdit}
						className={styles.textInput}
						autoFocus
						required
						maxLength={50}
						minLength={3}
					/>
				) : (
					<span data-testid="todoTitle">{todo.title}</span>
				)}
				<div>
					{edit ? (
						<button className={styles.button} onClick={handleSaveEdit} data-testid="saveButton">Guardar</button>
					) : (
						<div className={styles.actions}>
							<button className={styles.button} onClick={handleEdit} data-testid="editButton">Editar</button>
							<button className={styles.button} onClick={handleRemove} data-testid='deleteButton'>Eliminar</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
