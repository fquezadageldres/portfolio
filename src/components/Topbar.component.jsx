import { Button, Toggle } from "rsuite"
import { t } from "../texts/texts"
import { useLeng } from "../hooks/leng.hook"

export const Topbar = ({ onRefresh }) => {
	const leng = useLeng()

	const changeLeng = (new_leng) => {
		localStorage.setItem("lg", new_leng)
		onRefresh()
	}

	return (
		<div className="h-[70px] bg-[#fff] z-[2] w-full justify-center rounded-en shadow inline-flex items-center fixed px-5">
			<div className="!w-[1000px] inline-flex justify-between items-center px-5 bg-[#fff]">
				<div></div>
				<div className="w-full inline-flex items-center justify-center gap-10">
					<Button appearance="subtle">{t.menu.home[leng]}</Button>
					<Button appearance="subtle">{t.menu.experience[leng]}</Button>
					<Button appearance="subtle">{t.menu.projects[leng]}</Button>
				</div>
				<div className="inline-flex items-center text-[#999] gap-1">
					<Button
						onClick={() => changeLeng("es")}
						size="xs"
						className="!px-1"
						appearance={leng != "es" ? "subtle" : "ghost"}
					>
						ES
					</Button>
					<Button
						onClick={() => changeLeng("en")}
						className="!px-1"
						size="xs"
						appearance={leng != "en" ? "subtle" : "ghost"}
					>
						EN
					</Button>
				</div>
			</div>
		</div>
	)
}
