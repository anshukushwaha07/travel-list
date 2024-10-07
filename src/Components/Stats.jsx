export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const packedItems = items.filter((item) => item.packed).length;
  const totalItems = items.length;
  const packedPercentage =
    totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go✈️"
          : `🧳You have
          ${totalItems} item(s) in your list, and you already packed ${packedItems}
          (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
