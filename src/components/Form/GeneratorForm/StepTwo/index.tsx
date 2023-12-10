import Input from '@components/Form/Input/Input';

interface StepTwoProps {
  previousStep: () => void;
}

const StepTwo = ({ previousStep }: StepTwoProps) => {
  return (
    <div>
      <button type="button" onClick={previousStep}>
        Zmień
      </button>

      <img src="" alt="some dumpling" />
      <Input name="name" />
    </div>
  );
};

export default StepTwo;
