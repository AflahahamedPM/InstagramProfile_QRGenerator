
const SearchInput = ({ value, onChange, onSearch }) => {
    return (
      <div className="relative max-w-sm mx-auto">
        <input
          className="w-full py-2 px-4 mt-10 border bg-gray-300 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="search"
          placeholder="Enter your instagram username..."
          value={value}
          onChange={onChange}
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center mt-10 px-4 text-white bg-black border border-black rounded-r-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onClick={onSearch}
        >
          create QR
        </button>
      </div>
    );
  };


export default SearchInput;