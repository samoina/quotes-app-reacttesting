import { useState } from 'react';
import PreviousButton from './components/PreviousButton';
import NextButton from './components/NextButton';
import Quote from './components/Quote';

function App() {
	//add type annotations to show that index is a number
	const [index, setIndex] = useState<number>(0);

	//specify that this is an array of strings
	const quotesArr: string[] = [
		`“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`,
		`“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson`,
		`“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs`,
		`“Whenever you see a successful woman, look out for three men who are going out of their way to try to block her.” – Yulia Tymoshenko`,
		`"To thine own self be true" - Shakespeare`,
	];

	const handlePrevious = () => {
		//if a user clicks previous, at that point the index is = 0, so i want to set it to the end of the array to show the last quote
		if (index === 0) {
			setIndex(4);
		} else {
			setIndex((prevIndex) => prevIndex - 1);
		}
	};

	//if a user clicks next and at that point the index is = 4, so i want to set it to the start of the array to show the first quote so that the loop feels continuous
	const handleNext = () => {
		console.log(index);
		if (index === 4) {
			setIndex(0);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<>
			{/* <blockquote className="display">
        {quotesArr[index]}
      </blockquote> */}
			<div>
				<Quote quote={quotesArr[index]} />
			</div>

			<div>
				<PreviousButton onClick={handlePrevious} text="Previous" />
				<NextButton onClick={handleNext} text="Next" />
			</div>
		</>
	);
}

export default App;
