import { useParams } from 'react-router-dom';

const DumplingPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Pieróg</h1>
      <h1>Przepis</h1>
      Dumpling id : {id}
    </div>
  );
};

export default DumplingPage;
