'use client'
import React, { useState, useEffect } from 'react';

interface AutoWriteProps {
   content: string; // Define a prop for the content
}

const AutoWrite: React.FC<AutoWriteProps> = ({ content }) => {
   const [text, setText] = useState('');

   useEffect(() => {
      let index = 0;

      const interval = setInterval(() => {
         setText(prevText => prevText + content[index]);
         index++;

         if (index === content.length -1) {
            clearInterval(interval);
         }
      }, 100);

      return () => clearInterval(interval);
   }, [content]);

   return <span className="">{text}</span>;
};

export default AutoWrite;
