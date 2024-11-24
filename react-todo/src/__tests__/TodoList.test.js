import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList"; // Path to your TodoList component
import "@testing-library/jest-dom/extend-expect";

describe("TodoList", () => {
  test("renders TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test("displays initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText(/Add Todo/i);
    
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);
    
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    
    fireEvent.click(todo); // Toggle completion
    
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoToDelete = screen.getByText("Write Tests");
    const deleteButton = todoToDelete.nextElementSibling; // The delete button
    
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText("Write Tests")).not.toBeInTheDocument();
  });
});
