import React, { Suspense } from "react";
import "./App.css"; 
const RoutesComponent = React.lazy(() => import('./components/RoutesComponent'));

function App() {
  return (
    <div className="bg-bgSecondaryColor font-noto">
   
      <Suspense fallback={<div>Loading...</div>}>
        <RoutesComponent />
      </Suspense>
    </div>
  );
}

export default App;



 
