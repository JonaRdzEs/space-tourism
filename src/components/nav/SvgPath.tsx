import { motion, type SVGMotionProps } from "framer-motion";
type Props = SVGMotionProps<SVGPathElement>;

export function SvgPath(props: Props) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#D0D6F9"
      strokeLinecap="round"
      {...props}
    />
  );
}
