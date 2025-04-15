import React from "react";

function DealsTable({ deals }) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Страна</th>
          <th className="border p-2">Оффер</th>
          <th className="border p-2">Ставка</th>
          <th className="border p-2">Капа</th>
          <th className="border p-2">Условия</th>
          <th className="border p-2">Дата</th>
        </tr>
      </thead>
      <tbody>
        {deals.map((deal) => (
          <tr key={deal.id}>
            <td className="border p-2">{deal.country}</td>
            <td className="border p-2">{deal.offer}</td>
            <td className="border p-2">{deal.payout}</td>
            <td className="border p-2">{deal.cap}</td>
            <td className="border p-2">{deal.conditions}</td>
            <td className="border p-2">{new Date(deal.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DealsTable;
