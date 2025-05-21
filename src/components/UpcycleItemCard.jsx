export default function UpcycleItemCard({ title, image, requests, id }) {
  return (
    <div className="border border-gray-300 shadow-sm rounded p-4 bg-white">
      <p className="font-bold mb-2">{id}. {title}</p>
      <img
        src={image}
        alt={title}
        className="mb-3 w-full h-40 object-cover rounded"
      />
      <p className="text-sm text-gray-600">No of requests: {requests}</p>
    </div>
  );
}
