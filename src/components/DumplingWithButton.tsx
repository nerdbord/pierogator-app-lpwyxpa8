import Button from './Button';
import DumplingWithTitle from './DumplingWithTitle';
import Loader from './Loader/Loader';

interface DumplingSectionProps {
  title: string;
  isLoading: boolean;
  onClick: () => void;
  text?: string;
}

const DumplingWithButton: React.FC<DumplingSectionProps> = ({
  title,
  isLoading,
  onClick,
  text = 'Generuj',
}) => {
  return (
    <div className="flex justify-between">
      <DumplingWithTitle title={title} where="left" />
      <div className="flex gap-2 items-center justify-between">
        {isLoading && <Loader />}
        <Button onClick={onClick} text={text} />
      </div>
    </div>
  );
};

export default DumplingWithButton;
