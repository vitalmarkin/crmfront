import React, { useState } from "react";
import { createDeal } from "../utils/api";

function SalesForm() {
  const [form, setForm] = useState({
    country: "",
    offer: "",
    payout: "",
    cap: "",
    conditions: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDeal(form);
    alert("Сделка добавлена!");
    setForm({ country: "", offer: "", payout: "", cap: "", conditions: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
      <input name="country" value={form.country} onChange={handleChange} placeholder="Страна" className="border p-2" />
      <input name="offer" value={form.offer} onChange={handleChange} placeholder="Оффер" className="border p-2" />
      <input name="payout" value={form.payout} onChange={handleChange} placeholder="Ставка" className="border p-2" />
      <input name="cap" value={form.cap} onChange={handleChange} placeholder="Капа" className="border p-2" />
      <input name="conditions" value={form.conditions} onChange={handleChange} placeholder="Условия" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Создать сделку</button>
    </form>
  );
}

export default SalesForm;
