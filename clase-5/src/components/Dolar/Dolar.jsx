import { useState, useEffect } from "react";

const Dolar = () => {

    const [dolar, setDolar] = useState([]);

  useEffect(() => {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({blue, ccl, mep, solidario}) => {
        const dolarito = <>
            <h3>Cotizaciones del dolar</h3>
            <p>Blue: {blue}</p>
            <p>CCL: {ccl}</p>
            <p>Mep: {mep}</p>
            <p>Solidario: {solidario}</p>
        </>
        setDolar(dolarito)
        console.log(dolar)
    })
  }, []);
        

    

    return (
        <div>
            {dolar}
        </div>
    );
}

export default Dolar;
