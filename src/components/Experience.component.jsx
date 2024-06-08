import { t } from "../texts/texts"
import { useLeng } from "../hooks/leng.hook"
import { Timeline } from 'rsuite';
import { LuActivity, LuAirplay } from "react-icons/lu";

export const Experience = () => {
	const leng = useLeng()

	return (
		<div className="w-full mt-[70px] flex flex-col p-10 text-center justify-center items-center">
			<Timeline isItemActive={index => index === 0} className="custom-timeline ml-[-150px] w-[600px]" align="left">
				{t.experience.reverse().map((exp, i) => (
					<Timeline.Item time={exp.date[leng]}>
						<p className="mb-0 font-bold">{exp.title[leng]}</p>
						<p className="mt-0 text-[12px]">{exp.desc[leng]}</p>
					</Timeline.Item>
				))}
			</Timeline>
		</div>
	)
}
