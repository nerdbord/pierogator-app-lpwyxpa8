import BaseDumpling from '@src/assets/BaseDumpling';

interface DumplingWithTitleProps {
  title: string;
  where?: 'left' | 'right';
}

const DumplingWithTitle = ({
  title,
  where = 'right',
}: DumplingWithTitleProps) => {
  return (
    <div className="flex items-center justify-center gap-2 font-barriecito text-[30px] font-normal leading-6 text-dark-green">
      {where === 'left' && <BaseDumpling />}
      <h2 className="text-h2">{title}</h2>
      {where === 'right' && <BaseDumpling />}
    </div>
  );
};

export default DumplingWithTitle;
