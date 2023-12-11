import GeneratorForm from '@components/Form/GeneratorForm';
import Button from '@components/Button';
import BarButton from '@components/BarButton/BarButton';

const print = () => {
  console.log('click');
};

const print2 = () => {
  console.log('Zapisz');
};

const CreatorPage = () => {
  return (
    <>
      <Button onClick={print} text="Generuj" />
      <GeneratorForm />
      <BarButton
        onClick={print2}
        text="Zapisz i przejdź do tworzenia przepisu"
      />
    </>
  );
};

export default CreatorPage;
