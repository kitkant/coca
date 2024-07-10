import React, { useRef, useState } from 'react'
import AccordionItem from './AccordionItem'
import data from './../../../../data/AccordionData';

const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleItemClick = (index: any) => {
	 setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};
 
	return (
	 <div >
		 {data.map((item, index) => (
		 <AccordionItem
			key={index}
			question={item.question}
			answer={item.answer}
			isOpen={activeIndex === index}
			onClick={() => handleItemClick(index)}
		 />
		))}
	 </div>
	)
 };

export default Accordion;