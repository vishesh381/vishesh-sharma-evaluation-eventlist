const API_URL = 'http://localhost:3000/events';

export const getEvents = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const createEvent = async (event) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
  return await res.json();
};

export const updateEvent = async (id, updated) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updated),
  });
  return await res.json();
};
//I have added patchEvent but not using it as the application is not big so we can utilize PUT
export const patchEvent = async (id, partialData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(partialData),
  });
  return await res.json();
};


export const deleteEvent = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
