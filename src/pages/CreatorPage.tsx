import GeneratorForm from '@components/Form/GeneratorForm';
import Button from '@components/Button';

const print = () => {
  console.log('click');
};

const CreatorPage = () => {
  return (
    <>
      <Button onClick={print} text="Generuj" />
      <GeneratorForm />
    </>
  );
};

export default CreatorPage;
