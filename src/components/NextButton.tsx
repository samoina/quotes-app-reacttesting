interface NextButtonProps {
  onClick: () => void;
  text: string;
}

const NextButton: React.FC< NextButtonProps> = ({onClick, text}) => {
  return (
    <button id='next-button' onClick={onClick}>{text}</button>
  )
}
export default NextButton