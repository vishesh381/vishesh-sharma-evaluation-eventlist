let newRowVisible = false;

export const renderEvents = (events, onEdit, onDelete, onSaveNew, onUpdate, onShowNewRow) => {
  const tbody = document.getElementById('event-table-body');
  tbody.innerHTML = '';

  events.forEach(event => {
    const row = document.createElement('tr');

    if (event.editing) {
      row.innerHTML = `
        <td><input type="text" value="${event.eventName}" data-field="eventName" /></td>
        <td><input type="date" value="${event.startDate}" data-field="startDate" /></td>
        <td><input type="date" value="${event.endDate}" data-field="endDate" /></td>
        <td class="actions">
          <button class="save" data-id="${event.id}" title="Save">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4caf50" xmlns="http://www.w3.org/2000/svg">
              <path d="M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z"/>
            </svg>
          </button>
          <button class="cancel" data-id="${event.id}" title="Cancel">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="#c94c4c" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"/>
            </svg>
          </button>
        </td>
      `;
    } else {
      row.innerHTML = `
        <td>${event.eventName}</td>
        <td>${event.startDate}</td>
        <td>${event.endDate}</td>
        <td class="actions">
          <button class="edit" data-id="${event.id}" title="Edit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#008cba" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34a1.25 1.25 0 000-1.77l-2-2a1.25 1.25 0 00-1.77 0l-1.83 1.83 3.75 3.75 1.85-1.81z"/>
            </svg>
          </button>
          <button class="delete" data-id="${event.id}" title="Delete">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#c94c4c" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
          </button>
        </td>
      `;
    }

    tbody.appendChild(row);
  });

  if (newRowVisible) {
    const newRow = document.createElement('tr');
    newRow.id = "new-row";
    newRow.innerHTML = `
      <td><input type="text" id="new-eventName" placeholder="New event name" /></td>
      <td><input type="date" id="new-startDate" /></td>
      <td><input type="date" id="new-endDate" /></td>
      <td class="actions">
        <button id="add-new-event" title="Save">
          <svg width="20" height="20" fill="#4caf50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z"/>
          </svg>
        </button>
        <button id="cancel-new-event" title="Cancel">
          <svg width="20" height="20" fill="#c94c4c" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"/>
          </svg>
        </button>
      </td>
    `;
    tbody.appendChild(newRow);

    document.getElementById('add-new-event').onclick = () => {
      const event = {
        eventName: document.getElementById('new-eventName').value,
        startDate: document.getElementById('new-startDate').value,
        endDate: document.getElementById('new-endDate').value
      };
      if (event.eventName && event.startDate && event.endDate) {
        newRowVisible = false;
        onSaveNew(event);
      }
    };

    document.getElementById('cancel-new-event').onclick = () => {
      newRowVisible = false;
      renderEvents(events, onEdit, onDelete, onSaveNew, onUpdate, onShowNewRow);
    };
  }

  tbody.querySelectorAll('.edit').forEach(btn =>
    btn.addEventListener('click', (e) => onEdit(e.currentTarget.dataset.id)));

  tbody.querySelectorAll('.delete').forEach(btn =>
    btn.addEventListener('click', (e) => onDelete(e.currentTarget.dataset.id)));

  tbody.querySelectorAll('.save').forEach(btn =>
    btn.addEventListener('click', (e) => {
      const row = e.currentTarget.closest('tr');
      const inputs = row.querySelectorAll('input');
      const updated = {};
      inputs.forEach(input => {
        updated[input.dataset.field] = input.value;
      });
      onUpdate(e.currentTarget.dataset.id, updated);
    }));

  tbody.querySelectorAll('.cancel').forEach(btn =>
    btn.addEventListener('click', () => onEdit(null)));
};

export const bindAddButton = (callback) => {
  document.getElementById('add-btn').onclick = callback;
};

export const showNewRow = () => {
  newRowVisible = true;
};
