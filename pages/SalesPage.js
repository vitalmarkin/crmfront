import React, { useState } from 'react';
import { createDeal } from '../utils/api';

function SalesPage() {
  const [form, setForm] = useState({
    country: '',
    offer: '',
    payout: '',
    cap: '',
    conditions: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDeal(form);
    alert('Сделка добавлена!');
    setForm({ country: '', offer: '', payout: '', cap: '', conditions: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="country" placeholder="Страна" value={form.country} onChange={handleChange} required /><br/>
      <input name="offer" placeholder="Название оффера" value={form.offer} onChange={handleChange} required /><br/>
      <input name="payout" placeholder="Ставка" value={form.payout} onChange={handleChange} required /><br/>
      <input name="cap" placeholder="Капа" value={form.cap} onChange={handleChange} required /><br/>
      <input name="conditions" placeholder="Условия" value={form.conditions} onChange={handleChange} required /><br/>
      <button type="submit">Создать сделку</button>
    </form>
  );
}

export default SalesPage;
