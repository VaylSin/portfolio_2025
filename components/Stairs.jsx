import { motion } from "framer-motion";

const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] }
    // transition: {
    //     type: "tween",
    //     duration: 0.5,
    //     ease: "easeInOut",
    // },
}
const reverseIndex = (index) => {
    const totalSteps = 12;
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {[...Array(12)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.05,
                        delay: reverseIndex(index) * 0.05,
                        ease: "easeInOut",
                    }}
                    className="h-full w-full bg-accent relative"
                />
            ))}
        </>
    );
}

export default Stairs;
