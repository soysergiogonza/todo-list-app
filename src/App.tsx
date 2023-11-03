import {useState} from 'react';

import {Layout} from './components/layout.tsx';
import {Head} from './components/Head/Head.tsx';
import {TaskList} from './components/TaskList/TaskList.tsx';
import {InputForm} from './components/InputForm/InputForm.tsx';
import {useLocalStorage} from '../hooks/useLocalStorage.ts';

function App() {
	
	const {getLocalStorageTodo} = useLocalStorage('task');
	const [input, setInput] = useState<string>('');
	const [task, setTask] = useState(getLocalStorageTodo());
	
	return (
		<Layout>
			<Head/>
			<InputForm
				input={input}
				setInput={setInput}
				task={task}
				setTask={setTask}
			/>
			<TaskList task={task} setTask={setTask}/>
		</Layout>
	);
}

export default App;
