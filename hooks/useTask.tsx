import {useEffect} from 'react';

export const useTask = (input, setInput, task, setTasks) => {
	const inputData = {
		id: new Date().getTime(),
		title: input,
		completed: false,
	};
	const addTask = () => {
		if (input) {
			setTasks([inputData, ...task]);
			setInput('');
		}
	};
	
	useEffect(() => {
		localStorage.setItem('task', JSON.stringify(task));
	}, [task]);
	
	return {addTask};
};