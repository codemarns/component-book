import React from "react";
import { Image } from "..";

export const Grid: React.FC = () => {
  const length = 100;
  const items = [];
  for (let i = 0; i < length; i++) {
    items.push(
      <Image
        alt="sunrise jungle"
        src="sunrise-bali-jungle.jpg"
        thumbnail="sunrise-bali-jungle.gif"
      />
    );
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items}
      {/* <Image
        alt="sunrise jungle"
        src="sunrise-bali-jungle.jpg"
        thumbnail="sunrise-jungle.gif"
      />
      <Image
        alt="sunrise jungle"
        src="sunrise-bali-jungle.jpg"
        thumbnail="sunrise-jungle.gif"
      />
      <Image
        alt="sunrise jungle"
        src="sunrise-bali-jungle.jpg"
        thumbnail="sunrise-jungle.gif"
      /> */}
    </div>
  );
};
