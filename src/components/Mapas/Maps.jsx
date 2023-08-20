import React from 'react';
import Image from 'react-bootstrap/Image';
import './Conocenos.css'
import Ware from '../../assets/images/warehouse.webp'
import Mont from '../../assets/images/Montreal_Geography.webp'
import MontMetro from '../../assets/images/Montreal_Metro.webp'
import Downtown from '../../assets/images/Montreal_Downtown.webp'
import DowntownCore from '../../assets/images/Montreal_Downtown_Core.webp'
import Port from '../../assets/images/Montreal_Old_-_Old_Port.webp'




const Conocenos = () => {
   

    return (
        <>
        <div className="bgC">
        <div className="sec3">
                <div className="mapC">
                    <h2 className="titulo">Ciudad</h2>
                    <Image src={Mont} alt="" className="map" />
                </div>

            </div>
            <div className="sec3">
                <div className="mapC">
                    <h2 className="titulo">Metro</h2>
                    <Image src={MontMetro} alt="" className="map" />
                </div>

            </div>
            <div className="sec3">
                <div className="mapC">
                    <h2 className="titulo">Downtown</h2>
                    <Image src={Downtown} alt="" className="map" />
                </div>

            </div>
            <div className="sec3">
                <div className="mapC">
                    <h2 className="titulo">Downtown Core</h2>
                    <Image src={DowntownCore} alt="" className="map" />
                </div>

            </div>
            <div className="sec3">
                <div className="mapC">
                    <h2 className="titulo">Old Port</h2>
                    <Image src={Port} alt="" className="map" />
                </div>

            </div>
            <div className="sec3">
                <div className="mapC">
                    <h2 className="titulo">Warehouse</h2>
                    <Image src={Ware} alt="" className="map" />
                </div>

            </div>
        </div>
       
        </>
    )
}

export default Conocenos