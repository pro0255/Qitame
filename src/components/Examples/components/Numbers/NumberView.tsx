type Props = {
  number: number;
  isValid: boolean;
};

export const NumberView = ({ number, isValid }: Props) => {
  return <span className={`p-5 mx-2 ${isValid ? 'bg-green-100' : 'bg-red-100'} rounded`}>{number}</span>;
};
