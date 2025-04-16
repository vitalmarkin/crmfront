import React, { useEffect, useState } from 'react';
import { fetchDeals } from '../utils/api';

function MarketingPage() {
  const [deals, setDeals] = useState([]);
  const [filter, setFilter] = useState({ country: '', offer: '' });

  const load = async () => {
    const res = await fetchDeals(filter);
    setDeals(res);
  };

  useEffect(() => {
    load();
  }, [filter]);

  return (
    <div>
      <input placeholder="Фильтр по стране" onChange={e => setFilter({ ...filter, country: e.target.value })} /><br/>
      <input placeholder="Поиск оффера" onChange={e => setFilter({ ...filter, offer: e.target.value })} /><br/><br/>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Страна</th><th>Оффер</th><th>Ставка</th><th>Капа</th><th>Условия</th><th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((d, i) => (
            <tr key={i}>
              <td>{d.country}</td>
              <td>{d.offer}</td>
              <td>{d.payout}</td>
              <td>{d.cap}</td>
              <td>{d.conditions}</td>
              <td>{new Date(d.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarketingPage;
