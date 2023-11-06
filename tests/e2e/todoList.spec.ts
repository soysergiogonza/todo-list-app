import {test, expect, Locator} from '@playwright/test';

test.beforeEach(async ({page}) => {
	await page.goto('http://localhost:5173/');
});

const TODO_ITEMS: string[] = [
	'Tarea#1-CONST-',
	'Tarea#2-CONST-',
	'Tarea#3-CONST-',
];

test.describe('Todo List', () => {
	test('should allow me to add todo items', async ({page}) => {
		await expect(
			page.getByRole('heading', {name: 'Lista de Tareas', exact: true}),
		).toBeVisible();
		
		const newTodo: Locator = page.getByLabel('Agregar tarea');
		const todoItems: Locator = page.getByTestId('todoTitle');
		
		await newTodo.fill(TODO_ITEMS[0]);
		await newTodo.press('Enter');
		await expect(todoItems).toHaveText([
			TODO_ITEMS[0],
		]);
		
		await newTodo.fill(TODO_ITEMS[1]);
		await newTodo.press('Enter');
		
		await expect(todoItems).toHaveText([
			TODO_ITEMS[1],
			TODO_ITEMS[0]
		]);
		
		await newTodo.fill(TODO_ITEMS[2]);
		await newTodo.press('Enter');
		
		await expect(todoItems).toHaveText([
			TODO_ITEMS[2],
			TODO_ITEMS[1],
			TODO_ITEMS[0]
		]);
	});
});

