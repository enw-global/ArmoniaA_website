import { useState } from "react";

export const useToggleDescLayout = (initialValue: string | null = null) => {
  const [activeItem, setActiveItem] = useState<string | null>(initialValue);

  const toggle = (itemId: string) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return { activeItem, toggle };
};
