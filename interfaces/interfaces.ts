export interface Task {
	id: number;
	title: string;
}

// export interface ComponentProps {
// 	// input: string;
// 	// setInput: (value: string) => string;
// 	// task: Task[];
// 	// setTask: (tasks: Task[] | (() => void)) => Task[];
// }

export interface ContextValues {
	input: string;
	setInput: (value: string) => void;
	task: string;
	setTask: (value: string) => void;
}

