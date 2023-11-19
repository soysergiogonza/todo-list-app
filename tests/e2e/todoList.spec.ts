import {test, expect, Locator} from '@playwright/test';

test.beforeEach(async ({page}) => {
	await page.goto('http://localhost:5173/');
});

const TODO_ITEMS: string[] = [
	'Tarea#1-CONST-',
	'Tarea#2-CONST-',
	'Tarea#3-CONST-',
];

let heading: Locator

test.beforeEach(async ({ page }) => {
	heading = page.getByRole('heading', {name: 'Lista de Tareas', exact: true});
});

test.describe('Todo List', () => {
	test('should allow me to add todo items', async ({page}) => {
		await expect(heading).toBeVisible();
		
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
	test('should clear text input field when an item is added', async ({page}) => {
		await expect(heading).toBeVisible();
		const newTodo = page.getByLabel('Agregar tarea');
		
		await newTodo.fill(TODO_ITEMS[0]);
		await newTodo.press('Enter');
		
		await expect(newTodo).toBeEmpty();
	});
	test('should modify todo item', async ({page}) => {
		await expect(heading).toBeVisible();
		
		const newTodo:Locator = page.getByLabel('Agregar tarea');
		const todoItems: Locator = page.getByTestId('todoTitle');
		
		await newTodo.fill(TODO_ITEMS[0]);
		await newTodo.press('Enter');
		
		await expect(todoItems).toHaveText([
			TODO_ITEMS[0],
		]);
		
		const editButton: Locator = page.getByTestId('editButton');
		await editButton.click()
		
		const editInput: Locator = page.getByTestId('editInput');
		await editInput.fill('Tarea#1-EDITADO-');
		await page.getByTestId('saveButton').click();
		
		await expect(todoItems).toHaveText([
			'Tarea#1-EDITADO-',
		]);
	});
	test('should delete todo item', async ({page}) => {
		await expect(heading).toBeVisible();
		
		const newTodo: Locator = page.getByLabel('Agregar tarea');
		const todoItems: Locator = page.getByTestId('todoTitle');
		
		await newTodo.fill(TODO_ITEMS[0]);
		await newTodo.press('Enter');
		
		await expect(todoItems).toHaveText([
			TODO_ITEMS[0],
		]);
		
		const deleteButton: Locator = page.getByTestId('deleteButton');
		await deleteButton.click()
		
		await expect(todoItems).not.toHaveText([
			TODO_ITEMS[0],
		]);
	});
});

