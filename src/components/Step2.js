import React from 'react';

function Step2 (props) {

	const attendee = props.attendee

	function handleChange(obj) {
		console.log('obj', obj)
		return (event) => props.setAttendee(attendee.map((o) => {
			if (o === obj) return {...obj, name: event.target.value}
			return o;
		}));
	}

	// const handleChangeInput = (e, id) => {
	// 	const index = attendee.findIndex(e => e.id === id)
	// 	attendee[index].name = e.target.value
	// 	// console.log('e', e.target.value, id)
	// }

	return (
		<>
			<p>設定中</p>
			<div>
				{props.attendee.map((element, index) => {
					return (
						<div key={index}>
							<input value={element.name} onChange={handleChange(element)}/>
						</div>
					)
				}
				)}
			</div>
			<button type="button" onClick={() => props.setStarted(true)}>設定完成</button>
		</>
	)
}

export default Step2;