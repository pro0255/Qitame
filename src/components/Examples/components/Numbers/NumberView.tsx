type Props = {
  number: number;
};

export const NumberView = ({ number }: Props) => {
  return <span className={'p-5 mx-2 bg-gray-100 rounded'}>{number}</span>;
};
