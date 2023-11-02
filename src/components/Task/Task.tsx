import styles from './Task.module.css';
import {useState} from 'react';

export const Task = ({todo, setTask, allTasks}) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editedText, setEditedText] = useState<string>(todo.title);
	
	const handleRemove = () => {
		const updatedTasks = allTasks.filter((taskItem) => taskItem.id !== todo.id);
		setTask(updatedTasks);
	};
	
	const handleEdit = () => {
		setEdit(true); // Habilitar la edición
	};
	
	const handleSaveEdit = () => {
		const updatedTasks = allTasks.map((taskItem) => {
			if (taskItem.id === todo.id) {
				return {...taskItem, title: editedText};
			}
			return taskItem;
		});
		
		setTask(updatedTasks);
		setEdit(false);
	};
	
	return (
		<div className={styles.task}>
			<input type="checkbox"/>
			<div className={styles.taskContent}>
				{edit ? (
					<input
						type="text"
						value={editedText}
						onChange={(e) => setEditedText(e.target.value)}
						className={styles.textInput}
					/>
				) : (
					<span>{todo.title}</span>
				)}
				<div>
					{edit ? (
						<button className={styles.button} onClick={handleSaveEdit}>Guardar</button>
					) : (
						<div className={styles.actions}>
							<button className={styles.button} onClick={handleEdit}>Editar</button>
							<button className={styles.button} onClick={handleRemove}>Eliminar</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};