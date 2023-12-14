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
      <div className="flex items-center justify-between gap-2">
        {isLoading && <Loader />}
        <Button type="button" onClick={onClick} text={text} />
      </div>
    </div>
  );
};

export default DumplingWithButton;
