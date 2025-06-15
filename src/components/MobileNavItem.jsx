export default function MobileNavItem({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
        active
          ? 'text-indigo-600 bg-gray-100'
          : 'text-gray-500 hover:text-indigo-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
}