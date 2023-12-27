import {Layout} from './components/layout.tsx';
import {Head} from './components/Head/Head.tsx';
import {TaskList} from './components/TaskList/TaskList.tsx';
import {InputForm} from './components/InputForm/InputForm.tsx';
import {TodoProvider} from './context/TodoContext.tsx';

function App() {
	
	
	return (
		<Layout>
			<TodoProvider>
				<Head/>
				<InputForm/>
				<TaskList/>
			</TodoProvider>
		</Layout>
	);
}

export default App;
