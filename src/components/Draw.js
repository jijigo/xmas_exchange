import React, { useState, useEffect } from 'react';

import { draw as getDrawResult } from '../utils/draw'

function Draw (props) {

	const ATTENDEE_INIT_STATE = {
		id: 1,
		name: '',
		match: 3,
		isFinished: false
	}

	const [showResult, setShowResult] = useState(false);
	const [attendeeList, setAttendeeList] = useState([ATTENDEE_INIT_STATE])
	const [activeAttendee, setActiveAttendee] = useState(ATTENDEE_INIT_STATE);

	const getRandomIndex = (length) => {
		return Math.floor(Math.random() * length)
	}

	useEffect(() => {

		const drawResult = getDrawResult(props.attendee.map(e => e.id))
		const attendee = props.attendee.map((e, index) => (
			{
				...e,
				match: drawResult[index],
				isFinished: false
			}
		))
		setAttendeeList(attendee)
		setActiveAttendee(attendee[getRandomIndex(attendee.length)])

	}, [props.attendee]);

	function isAllFinished() {
		return attendeeList.every(e => e.isFinished)
	}

	const draw = () => {
		setShowResult(true)
		const index = attendeeList.findIndex(e => e.id === activeAttendee.id)
		attendeeList[index].isFinished = true
	}

	const next = () => {
		const getNextAttendee = attendeeList.find(e => e.id === activeAttendee.match)
		setActiveAttendee({
			...getNextAttendee
		})
		setShowResult(false)
	}

	const titleStyle = {
		maxWidth: '300px',
    margin: '0 auto 1em'
	}

	return (
		<>
			{
				!showResult ? (
					<>
						<p style={titleStyle}>請 {activeAttendee.name} 抽獎</p>
						<button type="button" onClick={() => draw()}>開始抽獎</button>
					</>
				) : (
					<>
						<p style={titleStyle}>恭喜 {activeAttendee.name} 抽到的是</p>
						<h2>{attendeeList.find(e => e.id === activeAttendee.match).name}</h2>
						{
							isAllFinished() ? (
								<>
									<p>抽完囉</p>
									<button>查看結果</button>
								</>
							) : (
								<button type="button" onClick={() => next()}>下一位</button>
							)
						}
					</>
				)
			}

		</>
	)
}

export default Draw;