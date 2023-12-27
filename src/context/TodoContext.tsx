import {createContext, JSX, useState} from 'react';
import {ContextValues, Task} from '../../interfaces/interfaces.ts';
import {useLocalStorage} from '../../hooks/useLocalStorage.ts';

interface Props {
	children: JSX.Element;
}

export const Context = createContext<ContextValues | undefined>({});

const TodoProvider = ({children}: Props) => {
	const {getLocalStorageTodo} = useLocalStorage('task');
	const [input, setInput] = useState<string>('');
	const [task, setTask] = useState<Task[]>(getLocalStorageTodo());
	
	return (
		<Context.Provider value={{input, setInput, task, setTask}}>
			{children}
		</Context.Provider>
	);
};

export {TodoProvider};