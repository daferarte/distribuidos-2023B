import React, {Suspense, useEffect, useRef, useState} from 'react';

const Surprise = React.lazy(()=>import('./Surprise'));

function App() {

  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div>
      <Suspense fallback={<p>Cargando ...</p>}>
        <button onClick={(evt) => setShowSurprise(true)}>
          Mostrar sorpresa 
        </button>
        {
          showSurprise && <Surprise/>
        }
      </Suspense>
    </div>
  );
}

export default App;
