export default function FormField({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block text-textColor font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3  ${
          error === null
            ? 'text-textColor'
            : error
            ? 'text-red-600'
            : 'text-blue-700'
        } leading-tight focus:outline-none focus:shadow-outline`}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
