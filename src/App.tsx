import { useState } from "react";

function App() {
 const [index, setIndex] = useState(0)

  const quotesArr = [
    `“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein`,
    `“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson`,
    `“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs`,
    `“Whenever you see a successful woman, look out for three men who are going out of their way to try to block her.” – Yulia Tymoshenko`,
    `"To thine own self be true" - Shakespeare`,
  ];

  const handlePrevious = () => {
    console.log('the previous')
        setIndex((prevIndex)=> prevIndex+1)
  }

  const handleNext = () => {
    console.log('the next')
    setIndex((prevIndex)=> prevIndex-1)
  }

  return (
    <>
      <blockquote className="display">
    
        {quotesArr[index]}
      </blockquote>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default App
