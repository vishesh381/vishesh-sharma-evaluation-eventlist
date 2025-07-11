# vishesh-sharma-evaluation-eventlist

A dynamic Event List manager that allows users to add, edit, and delete events with persistent storage using a JSON server. This project follows the MVC (Model-View-Controller) pattern for clean separation of concerns.

## 🧠 Approach & Design

This application was built with modularity and maintainability in mind:

- **MVC Architecture**:
  - **Model**: Handles all API interactions (GET, POST, PUT, DELETE).
  - **View**: Manages DOM updates and UI event bindings.
  - **Controller**: Orchestrates the app logic and connects Model and View.

- **User-friendly Interface**:
  - Add new events with a clean form.
  - Edit or delete existing events via intuitive icons.
  - Canceling an edit operation prevents accidental data loss.

- **Progressive Enhancement**:
  - Prompts are handled gracefully; canceled prompts do not overwrite data.
  - Modular design enables easy future upgrades like validations or modal-based editing.

## 📁 Project Structure

├── index.html # Main HTML layout
├── styles.css # All styling and responsiveness
├── js/
│ ├── controller.js # Application entry point and controller logic
│ ├── model.js # Handles communication with the backend (JSON server)
│ └── view.js # DOM manipulation and event binding
├── db.json # JSON server file for persistent event storage
└── README.md # Project documentation