import React from 'react';

interface ActionButtonProps {
  onClick: () => void;
  icon: string;
  altText: string;
  className?: string; // Optional for additional styling
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, icon, altText, className }) => {
  return (
    <button
      className={`btn-standard bg-slate-50 border-green-400 border p-1 rounded opacity-80 w-10 h-10 flex justify-center items-center ${className}`}
      onClick={onClick}
    >
      <img src={icon} alt={altText} className="w-8 h-8" />
    </button>
  );
};

export default ActionButton;
