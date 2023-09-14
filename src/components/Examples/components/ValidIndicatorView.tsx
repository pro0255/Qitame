type Props = {
  isValid: boolean;
};

export const ValidIndicatorView = ({ isValid }: Props) => {
  return (
    <span
      className={`absolute top-0 left-0 mt-[-8px] ml-[-10px] w-5 h-5 rounded-full animate-ping  ${
        isValid ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {isValid}
    </span>
  );
};
