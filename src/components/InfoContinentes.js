import React from 'react'
import Volver from './Volver.js'
import './InfoGeneral.css'
import { useTranslation } from 'react-i18next';

const InfoContinentes = ({setPositivo, oceanPacific, asia, europe, southAmerica, centroAmerica, northAmerica, muertesState, confirmadosState, recuperadosState, codigosPaises, lastUpdate, cargado, africa}) => {
  const { t } = useTranslation();

    let datosAsia = []
    let datosAfrica = []
    let datosNorthAmerica = []
    let datosSouthAmerica = []
    let datosEurope = []
    let datosCentroAmerica = []
    let datosOceanPacific = []

    let datosContinentes = (continente, arrayContinente, dato) => {
      let sumaAcumulada = 0;
      for(let a = 0; a<continente.length; a++){
        for(let b = 0; b<codigosPaises.length; b++){
          if(continente[a] === codigosPaises[b]){
            arrayContinente.push(dato[codigosPaises[b]])
            sumaAcumulada += parseInt(dato[codigosPaises[b]])
          }
        }
      }
      return sumaAcumulada;
    }

      let muertesAfrica = datosContinentes(africa, datosAfrica, muertesState)
      let muertesAsia = datosContinentes(asia, datosAsia, muertesState)
      let muertesNorthAmerica = datosContinentes(northAmerica, datosNorthAmerica, muertesState)
      let muertesSouthAmerica = datosContinentes(southAmerica, datosSouthAmerica, muertesState)
      let muertesCentroAmerica = datosContinentes(centroAmerica, datosCentroAmerica, muertesState)
      let muertesEurope = datosContinentes(europe, datosEurope, muertesState)
      let muertesOceanPacific = datosContinentes(oceanPacific, datosOceanPacific, muertesState)

      let confirmadosAfrica = datosContinentes(africa, datosAfrica, confirmadosState)
      let confirmadosAsia = datosContinentes(asia, datosAsia, confirmadosState)
      let confirmadosNorthAmerica = datosContinentes(northAmerica, datosNorthAmerica, confirmadosState)
      let confirmadosSouthAmerica = datosContinentes(southAmerica, datosSouthAmerica, confirmadosState)
      let confirmadosCentroAmerica = datosContinentes(centroAmerica, datosCentroAmerica, confirmadosState)
      let confirmadosEurope = datosContinentes(europe, datosEurope, confirmadosState)
      let confirmadosOceanPacific = datosContinentes(oceanPacific, datosOceanPacific, confirmadosState)

      let recuperadosAfrica = datosContinentes(africa, datosAfrica, recuperadosState)
      let recuperadosAsia = datosContinentes(asia, datosAsia, recuperadosState)
      let recuperadosNorthAmerica = datosContinentes(northAmerica, datosNorthAmerica, recuperadosState)
      let recuperadosSouthAmerica = datosContinentes(southAmerica, datosSouthAmerica, recuperadosState)
      let recuperadosCentroAmerica = datosContinentes(centroAmerica, datosCentroAmerica, recuperadosState)
      let recuperadosEurope = datosContinentes(europe, datosEurope, recuperadosState)
      let recuperadosOceanPacific = datosContinentes(oceanPacific, datosOceanPacific, recuperadosState)

      let porcentajeMuertosAfrica = ((muertesAfrica / confirmadosAfrica)*100).toFixed(2);
      let porcentajeMuertosAsia = ((muertesAsia / confirmadosAsia)*100).toFixed(2);
      let porcentajeMuertosNorthAmerica = ((muertesNorthAmerica / confirmadosNorthAmerica)*100).toFixed(2);
      let porcentajeMuertosSouthAmerica = ((muertesSouthAmerica / confirmadosSouthAmerica)*100).toFixed(2);
      let porcentajeMuertosCentroAmerica = ((muertesCentroAmerica / confirmadosCentroAmerica)*100).toFixed(2);
      let porcentajeMuertosEurope = ((muertesEurope / confirmadosEurope)*100).toFixed(2);
      let porcentajeMuertosOceanPacific = ((muertesOceanPacific / confirmadosOceanPacific)*100).toFixed(2);

      let porcentajeRecuperadosAfrica = ((recuperadosAfrica / confirmadosAfrica)*100).toFixed(2);
      let porcentajeRecuperadosAsia = ((recuperadosAsia / confirmadosAsia)*100).toFixed(2);
      let porcentajeRecuperadosNorthAmerica = ((recuperadosNorthAmerica / confirmadosNorthAmerica)*100).toFixed(2);
      let porcentajeRecuperadosSouthAmerica = ((recuperadosSouthAmerica / confirmadosSouthAmerica)*100).toFixed(2);
      let porcentajeRecuperadosCentroAmerica = ((recuperadosCentroAmerica / confirmadosCentroAmerica)*100).toFixed(2);
      let porcentajeRecuperadosEurope = ((recuperadosEurope / confirmadosEurope)*100).toFixed(2);
      let porcentajeRecuperadosOceanPacific = ((recuperadosOceanPacific / confirmadosOceanPacific)*100).toFixed(2);

  return(
        <div>
          <div className="infoGeneralBox">
            <div className="row">
              <div className="col-12">
                <h1 className="tituloInfo">{t('infoContinentes.Europa')}</h1>
                <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}{confirmadosEurope}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{muertesEurope}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{recuperadosEurope}</h5>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Muertos')}<br/> {porcentajeMuertosEurope}%</p>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Recuperados')}<br/> {porcentajeRecuperadosEurope}%</p>
              </div>
            </div>
          </div>
          <div className="infoGeneralBox">
            <div className="row">
              <div className="col-12">
                <h1 className="tituloInfo">{t('infoContinentes.AmNorte')}</h1>
                <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}{confirmadosNorthAmerica}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{muertesNorthAmerica}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{recuperadosNorthAmerica}</h5>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Muertos')}<br/> {porcentajeMuertosNorthAmerica}%</p>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Recuperados')}<br/> {porcentajeRecuperadosNorthAmerica}%</p>
              </div>
            </div>
          </div>
          <div className="infoGeneralBox">
            <div className="row">
              <div className="col-12">
                <h1 className="tituloInfo">{t('infoContinentes.AmCentral')}</h1>
                <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}{confirmadosCentroAmerica}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{muertesCentroAmerica}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{recuperadosCentroAmerica}</h5>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Muertos')}<br/> {porcentajeMuertosCentroAmerica}%</p>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Recuperados')}<br/> {porcentajeRecuperadosCentroAmerica}%</p>
              </div>
            </div>
          </div>
          <div className="infoGeneralBox">
            <div className="row">
              <div className="col-12">
                <h1 className="tituloInfo">{t('infoContinentes.AmSur')}</h1>
                <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}{confirmadosSouthAmerica}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{muertesSouthAmerica}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{recuperadosSouthAmerica}</h5>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Muertos')}<br/> {porcentajeMuertosSouthAmerica}%</p>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Recuperados')}<br/> {porcentajeRecuperadosSouthAmerica}%</p>
              </div>
            </div>
          </div>
          <div className="infoGeneralBox">
            <div className="row">
              <div className="col-12">
                <h1 className="tituloInfo">{t('infoContinentes.Asia')}</h1>
                <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}{confirmadosAsia}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{muertesAsia}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{recuperadosAsia}</h5>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.RecuperMuertosados')}<br/> {porcentajeMuertosAsia}%</p>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Recuperados')}<br/> {porcentajeRecuperadosAsia}%</p>
              </div>
            </div>
          </div>
          <div className="infoGeneralBox">
            <div className="row">
              <div className="col-12">
                <h1 className="tituloInfo">{t('infoContinentes.Africa')}</h1>
                <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}{confirmadosAfrica}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{muertesAfrica}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{recuperadosAfrica}</h5>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Muertos')}<br/> {porcentajeMuertosAfrica}%</p>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Recuperados')}<br/> {porcentajeRecuperadosAfrica}%</p>
              </div>
            </div>
            </div>
          <div className="infoGeneralBox margenBot">
            <div className="row">
              <div className="col-12">
                <h1 className="tituloInfo">{t('infoContinentes.Oceania')}</h1>
                <h5 className="totalDe">{t('infoContinentes.TotalConfirmados')}{confirmadosOceanPacific}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalMuertos')}{muertesOceanPacific}</h5>
                <h5 className="totalDe">{t('infoContinentes.TotalRecuperados')}{recuperadosOceanPacific}</h5>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Muertos')}<br/> {porcentajeMuertosOceanPacific}%</p>
              </div>
              <div className="col-6 margenTop">
                <p className="totalDe">{t('infoContinentes.Recuperados')}<br/> {porcentajeRecuperadosOceanPacific}%</p>
              </div>
            </div>
          </div>
          <Volver
            setPositivo={setPositivo}
          />
        </div>
  )
}

export default InfoContinentes;
