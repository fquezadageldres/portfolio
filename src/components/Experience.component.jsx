import { t } from "../texts/texts"
import { useLeng } from "../hooks/leng.hook"
import { Timeline, Button } from 'rsuite';
import { useState } from "react";
import { motion } from "framer-motion";

export const Experience = () => {
	const leng = useLeng()

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="w-full bg-[#f8f8f8] mt-[70px] py-20 flex flex-col px-10 text-center justify-center items-center">
			<motion.p className="text-[30px] mb-10 text-[#3498ff]">{t.menu.experience[leng]}</motion.p>
			<div className={(isOpen ? 'h-[1000px]' : 'h-[350px]') + ` relative duration-200 overflow-hidden mb-2`}>
			<Timeline isItemActive={index => index === 0} className="custom-timeline ml-[-150px] w-[600px] text-[#333]" align="left">
				{t.experience.reverse().map((exp, i) => (
					<Timeline.Item key={i} time={exp.date[leng]}>
						<p className="mb-0 font-bold">{exp.title[leng]}</p>
						<p className="mt-0 text-[12px]">{exp.desc[leng]}</p>
					</Timeline.Item>
				))}
			</Timeline>
			{!isOpen && <div className="absolute bg-gradient-to-t h-[200px] w-full from-[#f6f6f6] to-100% to-[#ffffff00] top-[150px]"></div>}
			</div>
			{isOpen && <Button
				onClick={() => setIsOpen(false)}
				size="sm"
				appearance="ghost"
			>
				{t.utils.view_less[leng]}
			</Button>}
			{!isOpen && <Button
				onClick={() => setIsOpen(true)}
				size="sm"
				appearance="ghost"
			>
				{t.utils.view_more[leng]}
			</Button>}
		</div>
	)
}
