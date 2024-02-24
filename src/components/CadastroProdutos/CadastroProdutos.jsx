import "./CadastroProdutos.css"

import { FaCamera } from "react-icons/fa";

import { useState } from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import fetchapi from "../../api/fetchapi"

function CadastroProdutos() {
    const [images, setImages] = useState([]);
    const [openImagens , setOpenImagens] = useState(false)

    const [produto , setProduto] = useState()
    const [marca , setMarca] = useState()
    const [descrição , setDescrição] = useState()

    const escrever = (p , e) => {
        if(p == "produto") {
            setProduto(e.target.value)
        }

        if(p == "marca") {
            setMarca(e.target.value)
        }

        if(p == "descrição") {
            setDescrição(e.target.value)
        }
    }

  const HandleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const imagesArray = files.map((file) => {
      return URL.createObjectURL(file);
    });

    setImages((prevImages) => [...prevImages, ...imagesArray]);
    setOpenImagens(true)

    console.log(images)
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
                    <input type="text" className="nomeNovoProduto" onChange={(e) => escrever("produto", e)}/>
                </la>
                    <la>
                        <p>Marca: </p>
                        <input type="text" onChange={(e) => escrever("marca" , e)}/>
                    </la>

                    <la>
                        <p>Descrição: </p>
                        <textarea id="texto" rows="4" cols="50" onChange={(e) => escrever("descrição" , e)}></textarea>
                    </la>

                    <la>
                        <p>Imagens: </p>
                        <input type="file" multiple className="imageProduto" id="inputImageProduto" onChange={HandleImageChange}/>
                    </la>

                <div className="LinhaDivisão"/>
                <button className="bttCadastrarNovoProduto" onClick={() => {
                    const dados = {
                        "produto" : produto,
                        "preçocompra" : "00",
                        "margem" : "00",
                        "preçovenda": "00",
                        "emestoque" : "0",
                        "descrição" : descrição,
                        "imagem" : images,
                        "marca" : marca,
                        "comição" : "0",
                        "defal" : "0",
                        "ipi" : "0"
                    }
                    fetchapi.NovoProduto(dados)

                    setProduto('')
                    setDescrição('')
                    setMarca('')
                    setImages([])
                }}>Cadastrar</button>
            </form>

                {openImagens && (
                    <div className="imageProdutoOpen">
                        <div>
                            <Slider {...settings}>
                                    {images.map((image) => (
                                        <div>
                                    <img src={image} style={{ width: '100%', maxHeight: '300px', margin: 'auto' }} className="zindex" />
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