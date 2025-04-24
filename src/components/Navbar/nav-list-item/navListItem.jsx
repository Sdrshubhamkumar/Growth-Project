import { Link } from 'react-router-dom';
import { useState } from 'react';

function ListItem({ text, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children?.length > 0;

  return (
    <li
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Parent Item */}
      {hasChildren ? (
        <span className="px-4 py-2">{text}</span>
      ) : (
        <Link to={text === 'Home' ? '/' : `/${text.toLowerCase().replace(/\s+/g, '-')}`} className="px-4 py-2">
          {text}
        </Link>
      )}

      {/* Dropdown if has children */}
      {hasChildren && isOpen && (
        <ul className="absolute top-full left-0 mt-1 bg-white border rounded shadow z-50">
          {children.map((child, index) => (
            <li key={index} className="whitespace-nowrap hover:bg-gray-200">
              <Link
                to={`/${child.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-4 py-2 text-black"
              >
                {child}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default ListItem;
