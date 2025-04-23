import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileListItem({ text, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = Array.isArray(children) && children.length > 0;

  return (
    <li>
      {hasChildren ? (
        <>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center cursor-pointer"
          >
            <span>{text}</span>
            <span>{isOpen ? '▲' : '▼'}</span>
          </div>

          {isOpen && (
            <ul className="ml-4 mt-2 space-y-1">
              {children.map((child, idx) => (
                <li key={idx}>
                  <Link
                    to={child.path}
                    className="block hover:underline text-gray-300 hover:text-white"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <Link
        to={text === 'Home' ? '/' : `/${text.toLowerCase().replace(/\s+/g, '-')}`}
          className="block hover:underline"
        >
          {text}
        </Link>
      )}
    </li>
  );
}

export default MobileListItem;
