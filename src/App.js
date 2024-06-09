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
		<div key={refresh} className="App w-full inline-flex justify-center relative bg-[#BAE6FF30]">
			<svg className="fixed" viewBox="10 10 120 120">
				<path fill="#3498ff10" className="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"/>
				<path fill="#BAE6FF30" className="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"/>
				<path fill="#3498ff10" className="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
				<path fill="#BAE6FF30" className="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
			</svg>
			{/* <div className="fixed bubbles">
				{[...Array(40)].map((bubble, i) => (
					<div key={i} className="bubble"></div>
				))}
			</div> */}
			<Topbar onRefresh={onRefresh} />
			<div className="relative z-[0] w-[1000px] shadow bg-[#fff]">
				<Home />
				<Experience />
				<Projects />
				<Footer />
			</div>
		</div>
	)
}

export default App
