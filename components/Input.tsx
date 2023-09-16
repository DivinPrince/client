'use client';


interface InputProps {
   placeholder: string;
   id: string;
   type?: string;
   required?: boolean;
   disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
   placeholder,
   id,
   required,
   type = 'text',
   disabled,
}) => {
   return (
         <input
            type={type}
            id={id}
            className="shadow-sm text-white bg-transparent ring-1 ring-inset ring-gray-600 rounded-lg placeholder: text-gray-400 focus:ring-2 px-4 py-2 focus:ring-inset focus:ring-white-600 sm:text-sm mt-3"
            autoComplete={id}
            disabled={disabled}
            placeholder={placeholder}
         />
   );
}

export default Input;