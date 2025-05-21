export default function PremiumServiceCard({ name, description, contact, rating }) {
  return (
    <div className="min-w-[220px] bg-white shadow border border-gray-300 p-4 rounded">
      <h3 className="font-bold mb-1">{name}</h3>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <p className="text-green-600 font-semibold mb-1">{contact}</p>
      <div className="text-yellow-400">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
    </div>
  );
}
