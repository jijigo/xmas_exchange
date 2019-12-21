// const getNewIndex = (index, length) => {
// 	let randomIndex = Math.floor(Math.random() * (length - 1))
// 	return randomIndex >= index ? randomIndex + 1 : randomIndex
// }

const shuffle = (arr) => {
	const newArray = [...arr]

	for (let i = arr.length - 1; i >= 0; i--) {
		let randomIndex = Math.floor(Math.random() * (arr.length - 1));
		[newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]]
	}

	return newArray
}

const checkifsame = (old, newArray) => {
	return newArray.some((e, index) => e === old[index])
}

export const draw = (users) => {
	let flag = true
	let newArray

	while(flag) {
		newArray = shuffle(users)
		flag = checkifsame(users, newArray)
	}
	return newArray
}
