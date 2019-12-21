import React from 'react';

function Step1 (props) {

	return (
		<>
			<p>請輸入參加人數</p>
			<div>
				<input type="number" onChange={(e) => props.setTotal(e.target.value)}></input>
				人
			</div>
			<button type="button" onClick={() => props.setStep(2)}>確定</button>
		</>
	)
}

export default Step1;