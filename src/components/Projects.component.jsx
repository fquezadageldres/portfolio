import { t } from "../texts/texts"
import { useLeng } from "../hooks/leng.hook"
import { motion } from "framer-motion"
import { Button, Modal, Carousel } from "rsuite"
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa"
import { SiNuxtdotjs } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { useState } from "react"

export const Projects = () => {
	const leng = useLeng()

	const [filters, setFilters] = useState([])
	const handleFilters = (value) => {
		if (filters[0] == value) setFilters([])
		else setFilters([value])
	}

	const onFilteredTecnologies = () => {
		if (!filters.length) return t.projects
		return t.projects.filter(obj => 
			filters.every(el => obj.tecnologies.includes(el))
		)
	}

	const [project, setProject] = useState(t.projects[0])
	const [open, setOpen] = useState(false);
		const onHandleOpenModal = (value) => {
			setOpen(true)
			setProject(value)
		}

	return (
		<div className="h-auto w-full flex flex-col p-10 text-center justify-center items-center">
			<motion.p className="text-[30px] my-10 text-[#3498ff]">{t.menu.projects[leng]}</motion.p>
			<div className="mb-5 flex gap-2">
				<Button onClick={() => handleFilters("React")} size="md" appearance="default" startIcon={<FaReact className={(filters.includes("React") ? '!text-[#3498ff]' : ' text-[#ccc]') + " ml-[5px] text-[24px]"}/>}>React</Button>
				<Button onClick={() => handleFilters("Vue")} size="md" appearance="default" startIcon={<FaVuejs className={(filters.includes("Vue") ? '!text-[#42b883]' : ' text-[#ccc]') + " ml-[5px] text-[24px]"}/>}>Vue</Button>
				<Button onClick={() => handleFilters("Angular")} size="md" appearance="default" startIcon={<FaAngular className={(filters.includes("Angular") ? '!text-[#d6002f]' : ' text-[#ccc]') + " ml-[5px] text-[24px]"}/>}>Angular</Button>
				<Button onClick={() => handleFilters("NuxtJS")} size="md" appearance="default" startIcon={<SiNuxtdotjs className={(filters.includes("NuxtJS") ? '!text-[#00d57e]' : ' text-[#ccc]') + " ml-[5px] text-[24px]"}/>}>Nuxt</Button>
				<Button onClick={() => handleFilters("NextJS")} size="md" appearance="default" startIcon={<TbBrandNextjs className={(filters.includes("NextJS") ? '!text-[black]' : ' text-[#ccc]') + " ml-[5px] text-[24px]"}/>}>Next</Button>
			</div>
			<motion.div layout className="flex flex-wrap gap-8 items-center justify-center mt-6">
				{onFilteredTecnologies().map((project, i) => (
					<motion.div animate={{ opacity: 1 }} onClick={() => onHandleOpenModal(project)} layout className="cursor-pointer bg-[white] rounded-xl overflow-hidden relative shadow h-[300px] w-[400px] flex group hover:shadow-[#ccc] justify-center" key={i}>
						<div className="absolute w-[400px] h-[300px]">
						{project?.imgs?.length && <img className="grayscale-[80%] group-hover:grayscale-[0%]" src={project.imgs[0]} />}
						</div>
						<div className="absolute top-[206px] bg-[white] w-[400px] h-[90px] py-3 border-t-4 border-[#ccc] group-hover:border-[#3498ff]">
						<p className="p-0 m-0 font-bold">{project.title[leng]}</p>
						<p className="p-0 m-0 text-[12px] mb-[4px]">{project.desc[leng]}</p>
						<div className="inline-flex gap-1 justify-center text-[12px]">
						{project.tecnologies.map((tec, j) => (
							<div key={j} className="px-1 group-hover:text-[#3498ff] text-[#999] border-[#999] border group-hover:border-[#3498ff] pt-[1px] rounded-md">{tec}</div>
							))}
						</div>
						</div>
					</motion.div>
				))}
			</motion.div>
			<Modal size={"lg"} open={open} onClose={() => setOpen(false)}>
				<Modal.Header>
				<Modal.Title className="!text-[23px]">{project.title[leng]}</Modal.Title>
				<p>{project.desc[leng]}</p>
				<div className="inline-flex gap-1 mt-2 justify-center text-[13px]">
					{project.tecnologies.map((tec, j) => (
						<div key={j} className="px-2 text-[#3498ff] border border-[#3498ff] pt-[1px] rounded-md">{tec}</div>
					))}
				</div>
				</Modal.Header>
				<Modal.Body className="!h-[600px] flex flex-col gap-10 bg-[#d0d0d0]">
					{project.imgs.map((img, i) => (
						<img  key={i} src={img}/>
					))}
				</Modal.Body>
				<Modal.Footer>
	
				</Modal.Footer>
			</Modal>
		</div>
	)
}
