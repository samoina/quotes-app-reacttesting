interface QuoteProps {
  quote: string;
}

const Quote: React.FC<QuoteProps > = ({quote}) => {
  return (
    <div>{quote}</div>
  )
}
export default Quote