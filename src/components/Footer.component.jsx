import { t } from "../texts/texts"
import { useLeng } from "../hooks/leng.hook"

export const Footer = () => {
	const leng = useLeng()

	return (
		<div className="h-[500px] w-full flex flex-col p-10 text-center justify-center items-center">
			<div className="text-[36px]">{t.title[leng]}</div>
			<div className="mt-2 text-[18px] w-[380px]">{t.subtitle1[leng]}</div>
		</div>
	)
}
