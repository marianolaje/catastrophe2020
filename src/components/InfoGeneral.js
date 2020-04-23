import React, {useState, Fragment} from 'react'
import Spinner from './Spinner.js'
import './InfoGeneral.css'
import { useTranslation } from 'react-i18next';

const InfoGeneral = ({informacionConjunta}) => {
  const { t } = useTranslation();

  const [cargando, setCargando] = useState(true)

//ordenamos la información por muertes
  let sortBy = (firstKey) => {
    return function(a, b) {
      if (a[firstKey] > b[firstKey]) {
        return -1;
      } else if (a[firstKey] < b[firstKey]) {
        return 1;
      }
    }
  }
  let sortByMuertes = () => {
    informacionConjunta.sort(sortBy("confirmados"));
  }
  sortByMuertes()
  let porcentajeMuertos= (numeroArray) => ((informacionConjunta[numeroArray].muertes / informacionConjunta[numeroArray].confirmados)*100).toFixed(2);
  let porcentajeRecuperados= (numeroArray) => ((informacionConjunta[numeroArray].recuperados / informacionConjunta[numeroArray].confirmados)*100).toFixed(2);

  return(
    <Fragment>
      {cargando
        ?
          <Spinner
            setCargando={setCargando}
          />
        :
          <div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[0].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}{informacionConjunta[0].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[0].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[0].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(0)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/> {porcentajeRecuperados(0)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[1].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[1].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[1].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[1].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(1)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(1)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[2].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[2].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[2].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[2].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(2)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(2)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[3].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[3].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[3].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[3].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(3)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(3)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[4].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[4].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[4].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[4].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(4)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(4)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[5].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[5].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[5].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[5].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(5)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(5)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[6].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[6].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[6].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[6].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(6)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(6)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[7].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[7].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[7].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[7].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(7)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(7)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[8].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[8].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[8].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[8].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(8)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(8)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[9].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[9].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[9].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[9].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(9)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(9)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[10].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[10].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[10].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[10].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(10)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(10)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[11].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[11].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[11].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[11].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(11)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(11)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[12].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[12].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[12].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[12].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(12)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(12)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[13].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[13].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[13].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[13].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(13)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(13)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[14].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[14].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[14].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[14].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(14)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(14)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[15].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[15].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[15].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[15].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(15)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(15)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[16].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[16].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[16].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[16].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(16)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(16)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[17].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[17].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[17].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[17].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(17)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(17)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[18].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[18].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[18].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[18].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(18)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(18)} %</p>
                </div>
              </div>
            </div>
            <div className="infoGeneralBox margenBot">
              <div className="row">
                <div className="col-12">
                  <h1 className="tituloInfo">{informacionConjunta[19].pais}</h1>
                  <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}: {informacionConjunta[19].confirmados}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{informacionConjunta[19].muertes}</h5>
                  <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{informacionConjunta[19].recuperados}</h5>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Muertos')}<br/>{porcentajeMuertos(19)} %</p>
                </div>
                <div className="col-6 margenTop">
                  <p className="totalDe">{t('infoContinentes.Recuperados')}<br/>{porcentajeRecuperados(19)} %</p>
                </div>
              </div>
            </div>
          </div>
      }
    </Fragment>
  )
}

export default InfoGeneral;
