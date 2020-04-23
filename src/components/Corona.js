import React, {useState, useEffect} from 'react'
import CoronaDetalles from './CoronaDetalles.js'
import InfoGeneral from './InfoGeneral.js'
import InfoContinentes from './InfoContinentes.js'
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const Boton = styled.button`
 outline: none;
 width: 92vw;
 height: 7vh;
 font-weight: bold;
 border-radius: 3%;
 margin-bottom: 10px;
`

const Corona = () => {
  const { t } = useTranslation();

  const [muertesState, setMuertesState] = useState({})
  const [confirmadosState, setConfirmadosState] = useState({})
  const [recuperadosState, setRecuperadosState] = useState({})
  const [codigosPaises, setCodigosPaises] = useState({})
  const [lastUpdate, setLastUpdate] = useState('')
  const [cargado, setCargado] = useState(false)
  const [coronaDetalles, setCoronaDetalles] = useState(false)
  const [continentes, setContinentes] = useState(false)
  const [positivo, setPositivo] = useState(false)


  useEffect( () => {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      var data;
    	if (this.readyState === this.DONE) {
        data = JSON.parse(this.responseText);

//creamos variables para imprimir
        let muertes = 0;
        let muertesObj = {};
        let confirmados = 0
        let confirmadosObj = {};
        let recuperados = 0
        let recuperadosObj = {};
        let listOfCountryRepeat = [];

//extraemos los diferentes códigos de paises
        for(let i = 0; i<data.data.covid19Stats.length; i++){
          let countryUniq = data.data.covid19Stats[i].country;
          listOfCountryRepeat.push(countryUniq)
        }
        let countryCodesUnique = Array.from(new Set(listOfCountryRepeat))
        countryCodesUnique.sort()

//itineramos en cada pais para conocer sus números, luego los guardamos en sus objetos
        for(let y = 0; y<countryCodesUnique.length; y++){
          for(let x = 0; x<data.data.covid19Stats.length; x++){
            if(countryCodesUnique[y] === data.data.covid19Stats[x].country){
              muertes += data.data.covid19Stats[x].deaths;
              confirmados += data.data.covid19Stats[x].confirmed;
              recuperados += data.data.covid19Stats[x].recovered;
            }
            muertesObj[countryCodesUnique[y]] = muertes;
            confirmadosObj[countryCodesUnique[y]] = confirmados;
            recuperadosObj[countryCodesUnique[y]] = recuperados;
          }
          muertes = 0;
          confirmados = 0;
          recuperados = 0;
        }
        setCodigosPaises(countryCodesUnique)
        setMuertesState(muertesObj)
        setConfirmadosState(confirmadosObj)
        setRecuperadosState(recuperadosObj)
        setLastUpdate(data.data.covid19Stats[0].lastUpdate)
        setCargado(true)
    	}
    });

    xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Ar");
    xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "f3ef8a6df5msh41bc37f3e7dbd29p1f4281jsnd3d6627ec208");

    xhr.send(data);

  }, []);


  const mostrarContinentes = () => {
    setPositivo(true)
    setContinentes(true);
  }
  const mostrarDetalles = () => {
    setCoronaDetalles(true)
    setPositivo(true)
  }

  const africa = ['Algeria','Angola','Benin','Botswana','Burkina Faso','Burundi','Cabo Verde','Cameroon','Central African Republic','Chad','Comoros', 'Congo (Brazzaville)', 'Congo (Kinshasa)','Democratic Republic of the Congo','Republic of the Congo',"Cote d'Ivoire",'Djibouti','Equatorial Guinea','Eritrea','Ethiopia', 'Eswatini','Gabon','Gambia','Ghana','Guinea','Guinea-Bissau','Kenya','Lesotho','Liberia','Libya','Madagascar','Malawi','Mali','Mauritania','Mauritius','Morocco','Mozambique','Namibia','Niger','Nigeria','Rwanda','Sao Tome and Principe','Senegal','Seychelles','Sierra Leone','Somalia','South Africa','South Sudan','Sudan','Swaziland','Tanzania','Togo','Tunisia','Uganda','Western Sahara','Zambia','Zimbabwe']
  const northAmerica = ['Canada','Mexico','US']
  const centroAmerica = ['Antigua and Barbuda','Bahamas','Barbados','Belize','Costa Rica','Cuba','Dominica','Dominican Republic','El Salvador','Grenada','Guatemala','Haiti','Honduras','Jamaica','Nicaragua','Panama','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Trinidad and Tobago']
  const southAmerica = ['Argentina', 'Bolivia','Brazil','Chile','Colombia','Ecuador','Guyana','Paraguay','Peru','Suriname','Uruguay','Venezuela']
  const europe = ['Albania','Andorra','Austria','Belarus','Belgium','Bosnia and Herzegovina','Bulgaria','Croatia','Cyprus','Czech Republic', 'Czechia','Denmark','Estonia','Finland','France','Georgia','Germany','Greece','Holy See','Hungary','Iceland','Ireland','Italy','Kazakhstan','Kosovo','Latvia','Liechtenstein','Lithuania','Luxembourg','Macedonia','Malta', 'MS Zaandam','Moldova','Monaco','Montenegro','Netherlands','North Macedonia','Norway','Poland','Portugal','Romania','Russia','San Marino','Serbia','Slovakia','Slovenia','Spain','Sweden','Switzerland','Ukraine','United Kingdom','Vatican City']
  const asia = ['Bahrain','Cyprus','Egypt','Iran','Iraq','Israel','Jordan','Kuwait','Lebanon','Oman','Palestine','Qatar','Saudi Arabia','Syria','Turkey','United Arab Emirates','Yemen','Afghanistan', 'Armenia','Azerbaijan','Bangladesh','Bhutan','Brunei','Burma', 'Cambodia','China','India','Indonesia', 'Japan','Kazakhstan','Kyrgyzstan','Laos','Malaysia','Maldives','Mongolia','Myanmar','Nepal','North Korea','Pakistan','Philippines','Singapore','South Korea','Sri Lanka','Taiwan*','Tajikistan','Thailand','Timor-Leste','Turkmenistan','Uzbekistan','Vietnam', 'West Bank and Gaza']
  const oceanPacific = ['Australia','Federated Islands of Micronesia','Fiji','French Polynesia','Guam','Kiribati','Marshall Islands','Nauru','New Zealand','Paulau','Papua New Guinea','Samoa','Solomon Islands','Tonga','Tuvala','Vanuata']

//unimos toda la información en un solo array de objetos
  let informacionConjunta = []
  for(var i = 0; i<codigosPaises.length; i++){
    informacionConjunta.push(
      {pais: codigosPaises[i], muertes: muertesState[codigosPaises[i]], confirmados: confirmadosState[codigosPaises[i]], recuperados: recuperadosState[codigosPaises[i]]}
    )
  }

  let componente;
  if(coronaDetalles && positivo){
    componente =    <CoronaDetalles
                      muertesState={muertesState}
                      confirmadosState={confirmadosState}
                      recuperadosState={recuperadosState}
                      codigosPaises={codigosPaises}
                      lastUpdate={lastUpdate}
                      cargado={cargado}
                      africa={africa}
                      northAmerica={northAmerica}
                      centroAmerica={centroAmerica}
                      southAmerica={southAmerica}
                      europe={europe}
                      asia={asia}
                      oceanPacific={oceanPacific}
                      informacionConjunta={informacionConjunta}
                      setPositivo={setPositivo}
                    />
  } else if (continentes && positivo){
    componente = <InfoContinentes
                    muertesState={muertesState}
                    confirmadosState={confirmadosState}
                    recuperadosState={recuperadosState}
                    codigosPaises={codigosPaises}
                    lastUpdate={lastUpdate}
                    cargado={cargado}
                    africa={africa}
                    northAmerica={northAmerica}
                    centroAmerica={centroAmerica}
                    southAmerica={southAmerica}
                    europe={europe}
                    asia={asia}
                    oceanPacific={oceanPacific}
                    setPositivo={setPositivo}
                  />
  } else {
    componente =  <div>
                    <Boton className="colorBotonVolver" onClick={mostrarDetalles}>{t('corona.botonPaises')}</Boton>
                    <Boton className="colorBotonVolver" onClick={mostrarContinentes}>{t('corona.botonContinentes')}</Boton>
                    <InfoGeneral
                      informacionConjunta={informacionConjunta}
                    />
                  </div>
  }

  return(

    <div>
      <p className="referencias">{t('corona.referencias')}<a href="https://www.jhu.edu/">Johnson's Hopkins University</a> </p>
      <p className="referencias">{t('corona.fechaDatos')}{lastUpdate}</p>
      {componente}
    </div>
  )
}

export default Corona;
