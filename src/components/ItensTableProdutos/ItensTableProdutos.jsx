import "./ItensTableProdutos.css"

import { useState } from "react";
import services from "../../services/services";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ItensTableProdutos({data}) {
    const [openDetalhes , setOpenDetalhes] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const {
        id,
        produto,
        preçovenda,
        emestoque,
        descrição,
        imagem
    } = data

    console.log(imagem)
      
    return ( 
        <div id="ItensTableProdutos">
            {openDetalhes && (
                <div className="openDetalhes">
                    <button className="ExitDetalhesProduto" onClick={() => setOpenDetalhes(false)}>X</button>
                    <h4>Detalhes</h4>
                    <p>{descrição}</p>
                </div>
            )}
            <div className="ImageProduto">
                            <Slider {...settings}>
                                    {imagem.map((image, index) => (
                                        <div key={index}>
                                    <img src={image} alt={`Image ${index}`} style={{ width: '100%', maxHeight: '300px', margin: 'auto' }} className="zindex" />
                                    </div>
                                ))}
                            </Slider>
                        </div>

            <div 
                className="ImageProduto"
                style={{backgroundImage: `url(${imagem})`}}
            />

            <div>
                <h2>{produto}</h2>
                <p><strong>Codigo</strong></p>
                <p>{id}</p>
                <p><strong>Preço :</strong></p>
                <p>{services.formatarCurrency(preçovenda)}</p>
                <p><strong>Em Estoque :</strong></p>
                <p>{`${emestoque} unidades`}</p>
                <button className="DetalhesProdutos" onClick={() => setOpenDetalhes(true)}>Detalhes</button>
            </div>
        </div>
     );
}

export default ItensTableProdutos;