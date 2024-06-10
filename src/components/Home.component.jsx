import { t } from "../texts/texts"
import { useLeng } from "../hooks/leng.hook"
import perfil from '../assets/img/perfil.jpeg'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"


export const Home = () => {
	const leng = useLeng()

	return (
		<div className="w-full mt-[70px] flex flex-col p-10 text-center justify-center items-center">
            <div className="relative h-[400px] w-[400px] flex items-center justify-center">
                <motion.svg transition={{ delay: 0.2}} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="rotate-slow-reverse" viewBox="-3 -5 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#BAE6FF" d="M54.6,-64.8C70.6,-51.7,83.3,-34.3,85,-16.2C86.7,1.8,77.4,20.6,66.2,36.7C55.1,52.9,42.1,66.5,25.2,75.3C8.3,84.2,-12.6,88.2,-31.1,82.7C-49.6,77.2,-65.6,62.2,-73.3,44.5C-81,26.7,-80.4,6.3,-76.7,-13.3C-72.9,-33,-66.2,-51.9,-52.9,-65.5C-39.6,-79.1,-19.8,-87.4,-0.2,-87.1C19.3,-86.8,38.6,-77.9,54.6,-64.8Z" transform="translate(100 100)" />
                </motion.svg>
                <motion.svg transition={{ delay: 0.2}} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="absolute rotate-slow" viewBox="0 2 210 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#3498ff" d="M47.6,-58.8C60.3,-46,68.4,-29.7,73,-11.7C77.6,6.4,78.8,26.2,71.3,43C63.8,59.8,47.7,73.4,29,80.5C10.3,87.7,-11,88.3,-30.3,81.9C-49.7,75.5,-66.9,62.1,-74.8,44.9C-82.7,27.7,-81.2,6.8,-77.2,-13.3C-73.3,-33.4,-66.9,-52.7,-53.6,-65.4C-40.3,-78.2,-20.2,-84.3,-1.4,-82.7C17.4,-81.1,34.8,-71.7,47.6,-58.8Z" transform="translate(100 100)" />
                </motion.svg>
                <motion.div transition={{ delay: 0}} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="absolute w-[300px] h-[300px] rounded-[50%] overflow-hidden border-4 border-[#fff]">
                    <img className="w-[300px] rounded-[50%] cover" src={perfil}/>
                </motion.div>
            </div>
			<motion.div transition={{ delay: 0}} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-[36px] text-[#3498ff]">{t.title[leng]}</motion.div>
			<motion.div transition={{ delay: 0.2}} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="mt-2 text-[16px] w-[500px]">{t.subtitle1[leng]}</motion.div>
			<motion.div transition={{ delay: 0.4}} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="mt-2 text-[16px] w-[500px]">{t.subtitle2[leng]}</motion.div>
            <motion.div transition={{ delay: 0.6}} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="inline-flex items-center mt-5 gap-3 justify-center">
                <a className="text-[#666] hover:text-[#3498ff]" target="_blank" href="https://github.com/fquezadageldres"><FaGithub className="text-[30px]"/></a>
                <a className="text-[#666] hover:text-[#3498ff]" target="_blank" href="https://www.linkedin.com/in/francisco-quezada-geldres/"><FaLinkedin className="text-[30px]"/></a>
            </motion.div>
		</div>
	)
}
