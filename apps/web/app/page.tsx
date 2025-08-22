import React from 'react';
import Homepage from './home/page';

const page = () => {
  return (
    <div className="h-screen overflow-hidden bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Homepage />
    </div>
  );
};

export default page;
