import "./CadastroProdutos.css"

import { FaCamera } from "react-icons/fa";

import { useState } from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CadastroProdutos() {
    const [images, setImages] = useState([]);
    const [openImagens , setOpenImagens] = useState(false)

  const HandleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const imagesArray = files.map((file) => {
      return URL.createObjectURL(file);
    });

    setImages((prevImages) => [...prevImages, ...imagesArray]);
    setOpenImagens(true)
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


    return ( 
        <div id="CadastroProdutos">
            <form className="AreaInputsNovoProduto">
                <la>
                    <p>Nome: </p>
                    <input type="text" className="nomeNovoProduto"/>
                </la>
                    <la>
                        <p>Marca: </p>
                        <input type="text" />
                    </la>

                    <la>
                        <p>Descrição: </p>
                        <textarea id="texto" rows="4" cols="50"></textarea>
                    </la>

                    <la>
                        <p>Imagens: </p>
                        <input type="file" multiple className="imageProduto" id="inputImageProduto" onChange={HandleImageChange}/>
                    </la>

                <div className="LinhaDivisão"/>
                <button className="bttCadastrarNovoProduto">Cadastrar</button>
            </form>

                {openImagens && (
                    <div className="imageProdutoOpen">
                        <div>
                            <Slider {...settings}>
                                    {images.map((image, index) => (
                                        <div key={index}>
                                    <img src={image} alt={`Image ${index}`} style={{ width: '100%', maxHeight: '300px', margin: 'auto' }} className="zindex" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                        
                ) || (
                <div className="imageProduto">
                    <div><FaCamera /></div>
                </div>
                )}
        </div>
     );
}

export default CadastroProdutos;