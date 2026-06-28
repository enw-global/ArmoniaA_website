type MenuToggleIconProps = {
  isOpen: boolean;
  /** Tailwind color class for the lines, e.g. "bg-armonia-sand" */
  className?: string;
  size?: number;
};

/**
 * A single, persistent hamburger <-> close icon.
 *
 * Renders three lines that smoothly morph between the "menu" (hamburger) and
 * "close" (X) states. Because the same element stays mounted for both states,
 * the browser tweens the transform/opacity changes instead of swapping one
 * element for another — giving a fluid, lightweight (GPU-accelerated) animation.
 *
 * Each line is anchored at the vertical centre (top-1/2). The lines are 2px
 * tall, so a single `-translate-y-[1px]` recentres a line exactly; the top and
 * bottom lines add/subtract 6px from that to fan out into a hamburger.
 */
const MenuToggleIcon = ({
  isOpen,
  className = "bg-current",
  size = 24,
}: MenuToggleIconProps) => {
  const lineBase =
    "absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 rounded-full transition-all duration-300 ease-in-out motion-reduce:transition-none";

  return (
    <span
      className="relative inline-block"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Top line: slides to centre, then rotates to form one stroke of the X */}
      <span
        className={`${lineBase} ${className} ${
          isOpen ? "-translate-y-[1px] rotate-45" : "-translate-y-[7px]"
        }`}
      />
      {/* Middle line: fades and shrinks out of the way */}
      <span
        className={`${lineBase} ${className} -translate-y-[1px] ${
          isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      />
      {/* Bottom line: slides to centre, then rotates to complete the X */}
      <span
        className={`${lineBase} ${className} ${
          isOpen ? "-translate-y-[1px] -rotate-45" : "translate-y-[5px]"
        }`}
      />
    </span>
  );
};

export default MenuToggleIcon;
