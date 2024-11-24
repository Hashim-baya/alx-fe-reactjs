import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; // Make sure the path to TodoList is correct
import "@testing-library/jest-dom/extend-expect"; // For additional matchers

describe("TodoList Component", () => {
  // Test: It should render the TodoList component
  test("renders TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  // Test: It should display the initial todos
  test("displays initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  // Test: It should add a new todo when the button is clicked
  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText("Add Todo")); // Simulate adding a new todo
    expect(screen.getByText("New Todo")).toBeInTheDocument(); // Check if it appears
  });

  // Test: It should toggle todo completion
  test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo); // Simulate clicking to toggle completion
    expect(todo).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todo); // Toggle back
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  // Test: It should delete a todo when the delete button is clicked
  test("deletes a todo", () => {
    render(<TodoList />);
    const todoToDelete = screen.getByText("Write Tests");
    const deleteButton = todoToDelete.nextElementSibling; // Assuming the delete button is next to the todo
    fireEvent.click(deleteButton); // Simulate clicking the delete button
    expect(screen.queryByText("Write Tests")).not.toBeInTheDocument(); // Check if todo is deleted
  });
});
