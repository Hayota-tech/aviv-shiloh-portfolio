import { motion } from 'framer-motion';

const Transition = ({ children }) => (
	<motion.div
		style={{ width: '100%', height: '100%' }}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.6, ease: 'easeInOut' }}
	>
		{children}
	</motion.div>
);
export default Transition;
