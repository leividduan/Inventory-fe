import { Input as InputType } from '../types/Input';

function Input({type, id, name, placeholder, required, error} : InputType) {
  const className = `bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error && 'border-red-500 placeholder-red-400 !focus:ring-red-500 !focus:border-red-500'}`;

  return (
    <>
      <input type={type} name={name} id={id} placeholder={placeholder} className={className} required={required} />
      {error && <small className='text-red-400'>{error.message}</small>}
    </>
  );
}

export default Input;