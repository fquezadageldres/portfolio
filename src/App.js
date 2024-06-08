import { Loader } from "rsuite"
import "./App.css"
import { Topbar } from "./components/Topbar.component"
import { Home } from "./components/Home.component"
import { Experience } from "./components/Experience.component"
import { Projects } from "./components/Projects.component"
import { Footer } from "./components/Footer.component"
import { useLeng } from "./hooks/leng.hook"
import { useState } from "react"

function App() {
	const leng = useLeng()
	const [refresh, setRefresh] = useState(0)
	const onRefresh = () => {
		setRefresh(refresh + 1)
	}

	if (!leng) {
		return <Loader />
	}

	return (
		<div
			key={refresh}
			className="App w-full inline-flex justify-center bg-[#f9f9f9]"
		>
			<Topbar onRefresh={onRefresh} />
			<div className="z-[0] w-[1000px] shadow bg-[#fff]">
				<Home />
				<Experience />
				<Projects />
				<Footer />
			</div>
		</div>
	)
}

export default App
