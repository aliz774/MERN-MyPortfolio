// import { motion } from "framer-motion";
// function ProjectCard({title, description, github, live}) {
//     return (
//         <motion.div className="bg-white p-4 rounded shadow" whileHover={{ scale: 1.05}}>
//             <h2 className="text-x1 font-bold">{title}</h2>
//             <p>{description}</p>
//             <a href={github} className="text-blue-500">github</a>
//             < a href={live} className="text-blue-500">live</a>
//         </motion.div>
//     );
// }
// export default ProjectCard;



import { motion } from 'framer-motion';
function ProjectCard({ title, description, github, live }) {
 return (
 <motion.div className="bg-white p-4 rounded shadow" whileHover={{ scale: 1.05 }}>
 <h2 className="text-xl font-bold">{title}</h2>
 <p>{description}</p>
 <a href={github} className="text-blue-500">GitHub</a> |
 <a href={live} className="text-green-500"> Live</a>
 </motion.div>
 );
}
export default ProjectCard;