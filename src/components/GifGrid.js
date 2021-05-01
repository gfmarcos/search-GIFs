import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading....</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );

  /*   const [images, setImages] = useState([]); */
  /*   useEffect(() => {
    // Se ejecuta la primeravez que se monta el componente, también si se manda una dependencia en el array, ahora vacío. Si esto volvería a ejecutar getGif() al actualizar el componente
    getGifs(category).then(setImages); // recordar que then recibe el arguntento de respuesta, la forma extendeida sería: .then(imgs => setImages(imgs) )
  }, [category]); */
};
