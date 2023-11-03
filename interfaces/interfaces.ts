export interface Task {
	id: number;
	title: string;
	completed: boolean;
}

export interface ComponentProps {
	input: string;
	setInput: (value: string) => string;
	task: Task[];
	setTask: (tasks: Task[] | (() => void)) => Task[];
}

