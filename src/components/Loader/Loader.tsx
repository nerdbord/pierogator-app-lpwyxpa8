import LoaderSvg from '@src/assets/LoaderSvg';
const Loader = () => {
  return (
    <div className="flex max-h-9 w-min animate-spin items-center  justify-center rounded-full bg-gray-background p-2">
      <LoaderSvg />
    </div>
  );
};

export default Loader;
