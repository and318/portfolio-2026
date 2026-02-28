import React from 'react';

const Grid = ({ children, className = '' }) => {
  return (
    <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
