interface PreviousButtonProps {
  onClick: () => void;
  text: string;
}


const PreviousButton: React.FC<PreviousButtonProps>  = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
export default PreviousButton