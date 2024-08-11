import React from 'react';
import type { SVGProps } from 'react';

interface IProps{
	size: number
}

export function HeroiconsOutlineCalendar(props: IProps) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" ><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2"></path></svg>);
}