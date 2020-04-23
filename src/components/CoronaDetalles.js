import React, {useEffect, Fragment} from 'react'
import Volver from './Volver.js'
import './Corona.css'
import { useTranslation } from 'react-i18next';

const CoronaDetalles = ({setPositivo, informacionConjunta, oceanPacific, asia, europe, southAmerica, centroAmerica, northAmerica, africa, cargado}) => {
  const { t } = useTranslation();

//acomoda el JSON
  // let sortBy = (firstKey) => {
  //   return function(a, b) {
  //     if (a[firstKey] > b[firstKey]) {
  //       return -1;
  //     } else if (a[firstKey] < b[firstKey]) {
  //       return 1;
  //     }
  //   }
  // }
  //
  // let sortByMuertes = () => {
  //   informacionConjunta.sort(sortBy("muertes"));
  //   setCambiarInfo(true)
  //   console.log(informacionConjunta)
  // }


  useEffect( () => {

      let muerte;
      let confirmados;
      let codigo;
      let recuperados;
      var table = document.getElementById("table")

//imprime todos los paises de un continente que le pasemos
      let datosPaises = (continente, nombreContinente) => {

        var rowA = table.insertRow(0);
        var parrafoNombrePais = rowA.insertCell(0);
        parrafoNombrePais.id = "nombreContinente";
        parrafoNombrePais.innerHTML = nombreContinente;
        document.getElementById("nombreContinente").colSpan = '4';

        for(let a = 0; a<continente.length; a++){
          var row = table.insertRow(a+1);

          for(let z = 0; z<informacionConjunta.length; z++){
            if(continente[a] === informacionConjunta[z].pais){
              muerte = informacionConjunta[z].muertes;
              confirmados = informacionConjunta[z].confirmados;
              codigo = informacionConjunta[z].pais;
              recuperados = informacionConjunta[z].recuperados;

              if(muerte >= 0 && confirmados >= 0 && recuperados >= 0){
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = codigo;
                cell2.innerHTML = confirmados;
                cell3.innerHTML = muerte;
                cell4.innerHTML = recuperados;
              }
            }
          }
        }
      }

      datosPaises(africa, "Africa")
      datosPaises(oceanPacific, "Oceanía")
      datosPaises(asia, "Asia")
      datosPaises(northAmerica, "America del Norte")
      datosPaises(centroAmerica, "America Central")
      datosPaises(southAmerica, "America del Sur")
      datosPaises(europe, "Europa")
  }, [cargado, africa, asia, centroAmerica, southAmerica, northAmerica, oceanPacific, europe, informacionConjunta])


  return(
    <Fragment>
      <div className="margenBot">
        <p className="referencias">{t('coronaDetalles.referencias')}</p>
        <div className="table100 ver3 m-b-110">
          <div className="table100-head">
            <table>
              <thead>
                <tr>
                  <th className="pais">{t('coronaDetalles.pais')}</th>
                  <th className="confirmado">{t('coronaDetalles.confirmados')}</th>
                  <th className="muerte">{t('coronaDetalles.muertos')}</th>
                  <th className="recuperado">{t('coronaDetalles.recuperados')}</th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="table100-body js-pscroll">
            <table id="table">

            </table>
          </div>
        </div>
      </div>
      <Volver
        setPositivo={setPositivo}
      />
    </Fragment>
  )
}

export default CoronaDetalles;
