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

	const listStyle = {
		maxHeight: '250px',
		overflow: 'auto'
	}

	return (
		<>
			<p>寫上名字</p>
			<div style={listStyle}>
				{props.attendee.map((element, index) => {
					return (
						<div key={index}>
							<input
								style={{ marginBottom: '8px' }}
								value={element.name}
								onChange={handleChange(element)}/>
						</div>
					)
				}
				)}
			</div>

			<div>
				<button
					style={{ marginRight: '10px' }}
					onClick={() => props.setStep(1)}>返回</button>
				<button type="button"
					style={{ marginTop: '50px' }}
					onClick={() => props.setStarted(true)}>設定完成</button>
			</div>

		</>
	)
}

export default Step2;