interface QuoteProps {
  quote: string;
}

const Quote: React.FC<QuoteProps > = ({quote}) => {
  return (
    <blockquote>{quote}</blockquote>
  )
}
export default Quote