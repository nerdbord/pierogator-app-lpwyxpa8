import LoaderSvg from '@src/assets/LoaderSvg';
const Loader = () => {
  return (
    <div className="bg-gray flex justify-center items-center p-2  rounded-full w-min animate-spin">
      <LoaderSvg />
    </div>
  );
};

export default Loader;
