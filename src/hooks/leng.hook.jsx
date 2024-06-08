import { useEffect, useState } from "react"

export const useLeng = () => {
	const [lg, setLg] = useState(null)

	useEffect(() => {
		const lenLS = localStorage.getItem("lg")
		if (!lenLS) {
			localStorage.setItem("lg", "en")
			setLg("en")
		} else {
			setLg(lenLS)
		}
	}, [])

	return lg
}
