import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';

const SkillItem = ({ icon, stars, label }) => {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-20 flex flex-col items-center text-center"
    >
      {icon}
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} size={20} className="text-textPrimaryColor" />
        ))}
        {hasHalfStar && <BsStarHalf size={20} className="text-textPrimaryColor" />}
      </div>
      <p className="text-textPrimaryColor">{label}</p>
    </motion.div>
  );
};

export default SkillItem;
