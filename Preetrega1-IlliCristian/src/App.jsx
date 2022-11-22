import React from "react";
import { Cards } from "./components/Cards";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar";

function App() {
  const carrito = [
    {
      id: 1,
      name: "Carrier",
      cantidad: 1,
    },
    {
      id: 2,
      name: "Carrier",
      cantidad: 2,
    },
    {
      id: 3,
      name: "Carrier",
      cantidad: 3,
    },
  ];

  return (
    <div>
      <NavBar2 cantidad={carrito.length} />
      <ItemListContainer greeting={"¡Bienvenidos a nuestra web!"} />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
