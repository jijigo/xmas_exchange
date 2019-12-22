import React from 'react';

function Step1 (props) {

	return (
		<>
			<p>請輸入參加人數</p>
			<div>
				<select
					style={{ fontSize: '28px', background: 'transparent' }}
					onChange={(e) => props.setTotal(e.target.value)}>
					{
						new Array(29).fill(null)
						.map((e, index) => (
							<option key={index} value={index+2}>{index+2}</option>
						))
					}
				</select>
				{/* <input type="number" onChange={(e) => props.setTotal(e.target.value)}></input> */}
				人
			</div>
			<button type="button"
				style={{ marginTop: '50px' }}
				onClick={() => props.setStep(2)}>確定</button>
		</>
	)
}

export default Step1;