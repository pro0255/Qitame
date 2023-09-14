type Props = {
  number: number;
  isValid: boolean;
};

export const NumberView = ({ number, isValid }: Props) => {
  return (
    <span className={`p-5 mx-2 ${isValid ? 'bg-green-100 dark:bg-lime-400' : 'bg-red-100 dark:bg-rose-400'} rounded`}>
      {number}
    </span>
  );
};
