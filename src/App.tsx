import {useState} from 'react';

import {Layout} from './components/layout.tsx';
import {Head} from './components/Head/Head.tsx';
import {TaskList} from './components/TaskList/TaskList.tsx';
import {InputForm} from './components/InputForm/InputForm.tsx';


const getLocalStorageTask = () => {
	const list = localStorage.getItem('task');
	
	if (!list) {
		localStorage.setItem('task', JSON.stringify([]));
		return [];
	}
	if (list) {
		return JSON.parse(list);
	}
	
};

function App() {
	const [input, setInput] = useState<string>('');
	const [task, setTask] = useState(getLocalStorageTask());
	
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
