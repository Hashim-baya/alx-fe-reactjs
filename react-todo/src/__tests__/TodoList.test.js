import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; // Path to your TodoList component
import "@testing-library/jest-dom/extend-expect"; // For additional matchers like `toBeInTheDocument`

describe("TodoList Component", () => {
  
  // Test if the TodoList component renders
  test("renders TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();  // Checks for Todo List header
  });

  // Test if initial todos are displayed
  test("displays initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  // Test adding a new todo
  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByText("Add Todo");  // Find the Add Todo button
    fireEvent.click(input); // Click the Add Todo button to add a new todo
    expect(screen.getByText("New Todo")).toBeInTheDocument();  // Check if "New Todo" is displayed
  });

  // Test toggling todo completion
  test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo); // Toggle completion by clicking the todo
    expect(todo).toHaveStyle("text-decoration: line-through");  // Check if todo has line-through style
    fireEvent.click(todo); // Toggle back
    expect(todo).not.toHaveStyle("text-decoration: line-through");  // Check if line-through is removed
  });

  // Test deleting a todo
  test("deletes a todo", () => {
    render(<TodoList />);
    const todoToDelete = screen.getByText("Write Tests");
    const deleteButton = todoToDelete.nextElementSibling;  // Find the delete button next to the todo
    fireEvent.click(deleteButton);  // Click the delete button
    expect(screen.queryByText("Write Tests")).not.toBeInTheDocument();  // Check if the todo is removed
  });
});
