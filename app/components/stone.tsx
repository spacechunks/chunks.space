import { motion } from "framer-motion";
import stone1Image from "~/assets/images/stone1.png";
import stone2Image from "~/assets/images/stone2.png";
import stone3Image from "~/assets/images/stone3.png";
import { cn } from "~/lib/utils";

const stoneVariants = {
  1: stone1Image,
  2: stone2Image,
  3: stone3Image,
};

// Utility to generate random jitter values within a range
// range from -4 to 4
const generateRandomJitter = () => Math.random() * 10 - 5;

// Function to generate the jitter array
const createJitterArray = () => [
  0,
  generateRandomJitter(),
  generateRandomJitter(),
  0,
  generateRandomJitter(),
  generateRandomJitter(),
  0,
];

export default function Stone({
  variant,
  flipped,
  height,
  moving,
  className,
}: {
  variant: "1" | "2" | "3";
  flipped?: boolean;
  height: string;
  moving?: boolean;
  className?: string;
}) {
  const duration = 3.25 + Math.random() * 1.5; // Duration between 3.5 and 5 seconds

  const jitterAnimation = {
    x: createJitterArray(),
    y: createJitterArray(),
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: duration,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      className={cn(className)}
      animate={moving ? jitterAnimation : {}}
    >
      <img
        src={stoneVariants[variant]}
        alt="Stone"
        className={cn(
          `w-auto object-cover`,
          flipped ? "scale-x-[-1] transform" : "",
          flipped ? "scale-x-[-1] transform" : "",
          height,
        )}
      />
    </motion.div>
  );
}
