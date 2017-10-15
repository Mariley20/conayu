import React, { Component } from 'react';
import './Feed.css';
import { NavLink} from 'react-router-dom'

class MomFeed extends Component {
		constructor (props) {
			super (props);
			this.state = {
			}
		}
		render () {
      const {model} = this.props;
    
    return (
        <div className="container text-center momFeed">
          <h1>Alimentación Materna</h1>
          <hr className="linea" />
          <h3 className="subtitulo">Con estos alimentos tú y tu bebé estarán sanos y fuertes</h3>
          <div><img className="img-fluid imgNutrifami" src="https://s3.amazonaws.com/nutrifami/training/images/201733113055758.png" /></div>
          <div className="Hierro proporciones">
                <h3>Prepara comidas Nutritivas</h3>
                <p>Arroz con Frejolitos y Pescado, Arroz con Higado y puré de Zapallo, Sangrecita con Quinua</p>
                <p className="cursiva">Acompañado con verduras</p>
              </div>
              <div className="Hierro">
                <h3>Incluye en tus comidas alimentos de origen animal ricos en hierro</h3>
                <p><label>Higado</label><label>Pescado</label><label>Sangrecita</label><label>Riñon</label><label>Bazo</label></p>
                <p><label>Lentejas</label><label>Habas</label><label>Frejol</label></p>
                <p className="p2"><strong>5 cucharadas por c/u</strong></p>
              </div>
              <div className="Verduras verduras-mama">
                <h3>Come verduras y frutas de colores cada día</h3>
                <p><label>Zapallo</label><label>Espinaca</label><label>Zanahoria</label><label>Tomate</label><label>Acelga</label></p>
                <p><label>Naranja</label><label>Mango</label><label>Limon</label></p>
              </div>
                    <div><img className="imgNutrifami" src="https://s3.amazonaws.com/nutrifami/training/images/201733113113673.png" /></div>
                    <div><img className="imgNutrifami mama" src="https://s3.amazonaws.com/nutrifami/training/images/201733113129701.png" /></div>

                {/* <div className="row platos">
                  <div className="col col-sm-4  "><img className="img-fluid" src={"/images/" + "1m" + ".PNG"} /></div>
                  <div className="col col-sm-4"><img className="img-fluid" src={"/images/" + "2m" + ".PNG"} /></div>
                  <div className="col col-sm-4"><img className="img-fluid" src={"/images/" + "3m" + ".PNG"} /></div>
              </div> */}
      </div>
    )
    }
}
export default MomFeed;
