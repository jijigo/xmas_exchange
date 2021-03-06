import React, { useState } from 'react';
import Step1 from './Step1'
import Step2 from './Step2'
import Draw from './Draw'

// container
function Main () {

	const [total, setTotal] = useState(2);
	const [step, setStep] = useState(1);
	const [isStarted, setStarted] = useState(false);
	const [attendee, setAttendee] = useState([{id: 1, name: '1號'}]);

	const handleSetStep = (step) => {
		if (step === 2) {
			let arr = Array(Number(total)).fill({})
			setAttendee(
				arr.map((_, index) => ({
					id: `${index + 1}`,
					name: `${index + 1} 號`
				}))
			)
		}
		setStep(step)
	}

	const containerStyle = {
		height: 'calc(100vh - 150px)',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
		justifyContent: 'center',
		width: '100%'
	}

	return (
    <div style={containerStyle}>
			{
				!isStarted ? (
					step === 1 ? (
						<Step1 total={total} setTotal={setTotal} setStep={handleSetStep}/>
					) : (
						<Step2
							attendee={attendee}
							setStarted={setStarted}
							setAttendee={setAttendee}
							setStep={handleSetStep}
						/>
					)
				) : (
					<Draw attendee={attendee} />
				)
			}
    </div>
  );
}

export default Main