const API = 'https://crm-backend-xl69.onrender.com/api/deals';

export const createDeal = async (deal) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(deal)
  });
  return await res.json();
};

export const fetchDeals = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const res = await fetch(`${API}?${query}`);
  return await res.json();
};
