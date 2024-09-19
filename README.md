# Kanban Board Project

This is a simple Kanban board built with JavaScript, jQuery, Day.js, and Bootstrap. The board allows users to manage tasks by creating, updating, and deleting tasks across three columns: To Do, In Progress, and Done. Tasks have due dates, and the board automatically adjusts the visual appearance of each task card based on its status and due date.
To visit this Kanban Board, please use this [link](https://rennancruz.github.io/kanban-board/kanban-page.html).

https://github.com/user-attachments/assets/11d4c99c-364b-43cc-8426-7a2f8c30a67d


## Features

- Task Creation: Users can add tasks with a title, due date, and description.
- Task Deletion: Users can delete tasks by clicking the "Delete" button on each task card.
- Drag-and-Drop: Task cards can be dragged between the "To Do", "In Progress", and "Done" columns.
- Task Statuses: Visual cues like background color change based on task due date:
  - Yellow (bg-warning): Task is due today or later this week.
  - Red (bg-danger): Task is overdue.
  - Light (bg-light): Task is due after the current week.
  - Green (bg-success): Task is completed.

## Technologies Used

- HTML & CSS: Basic structure and styling.
- JavaScript: Core functionality for task management.
- jQuery: Simplifies DOM manipulation and event handling.
- Bootstrap: Provides modal windows, alerts, and responsive styling.
- Day.js: Handles date formatting and comparisons.
- jQuery UI: Enables drag-and-drop functionality.

## How It Works

1. Task Creation
   Tasks are added via a form in a modal window. Each task requires a title, due date, and description. The task is added to the "To Do" column by default.

2. Task Status
   Tasks are visually styled based on their due date:

- Today or This Week: Task card turns yellow.
- Overdue: Task card turns red.
- After This Week: Task card turns light gray.
- Completed: When dragged into the "Done" column, the task card turns green.

3. Local Storage
   All tasks are stored in localStorage, ensuring tasks persist even if the page is refreshed.

4. Drag-and-Drop
   Users can move tasks between the "To Do", "In Progress", and "Done" columns by dragging them. The task status is updated automatically when dropped in a new column.

## Getting Started

### Prerequisites

- Any modern web browser.
- No server or build tools are needed as this is a client-side web application.

### Installation

1. Clone the Repository:

```bash
git clone https://github.com/your-username/kanban-board.git
cd kanban-board
```

2. Open `kanban-page.html` in your preferred browser.

Simply double-click `kanban-page.html` or open it using the browser's "Open" functionality.

## Usage

1. Add a Task: Click the "Add Task" button to open the modal. Fill out the task details (title, due date, description) and click Add.
1. Move a Task: Drag and drop tasks between the "To Do", "In Progress", and "Done" columns.
1. Delete a Task: Click the Delete button on any task card to remove it from the board.
1. View Task Colors: Tasks will change colors based on their due dates (as outlined above).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
