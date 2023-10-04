'use client';

import {
   FieldErrors,
   FieldValues,
   UseFormRegister
} from "react-hook-form";

interface InputProps {
   id: string;
   type?: string;
   placeholder?: string
   required?: boolean;
   register: UseFormRegister<FieldValues>,
   errors: FieldErrors
   disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
   id,
   register,
   required,
   errors,
   placeholder,
   type = 'text',
   disabled,
}) => {
   return (
         <input
            type={type}
            id={id}
            placeholder={placeholder}
            className={`shadow-sm text-white bg-transparent ring-1 ring-inset ring-gray-600 rounded-lg placeholder: text-gray-400 focus:ring-2 px-4 py-2 focus:ring-inset focus:ring-white-600 sm:text-sm mt-3`}
            autoComplete={id}
         disabled={disabled}
         {...register(id, { required })}
         />
   );
}

export default Input;