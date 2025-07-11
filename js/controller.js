import * as model from './model.js';
import * as view from './view.js';

let events = [];

const loadEvents = async () => {
  const data = await model.getEvents();
  events = data.map(e => ({ ...e, editing: false }));
  view.renderEvents(events, handleEdit, handleDelete, handleAddEvent, handleUpdateEvent);
};

const handleAddEvent = async (event) => {
  const newEvent = await model.createEvent(event);
  events.push({ ...newEvent, editing: false });
  view.renderEvents(events, handleEdit, handleDelete, handleAddEvent, handleUpdateEvent);
};

const handleDelete = async (id) => {
  await model.deleteEvent(id);
  events = events.filter(e => e.id !== id);
  view.renderEvents(events, handleEdit, handleDelete, handleAddEvent, handleUpdateEvent);
};

const handleEdit = (id) => {
  events = events.map(e => ({ ...e, editing: e.id == id }));
  view.renderEvents(events, handleEdit, handleDelete, handleAddEvent, handleUpdateEvent);
};

const handleUpdateEvent = async (id, updatedFields) => {
  await model.updateEvent(id, updatedFields);
  await loadEvents();
};

view.bindAddButton(() => {
  view.showNewRow();//making newRowVisible true
  view.renderEvents(events, handleEdit, handleDelete, handleAddEvent, handleUpdateEvent);
});

//Entry Point
loadEvents();
