import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Semaforo from "./Semaforo";

//create your first component
function Home() {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Mi Semáforo</h1>
      <Semaforo />
    </div>
  );
}

export default Home;