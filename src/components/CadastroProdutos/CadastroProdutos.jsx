import "./CadastroProdutos.css"

import { FaCamera } from "react-icons/fa";

import { useState } from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Concluindo from "../../components/Concluindo/Concluindo"

import fetchapi from "../../api/fetchapi"

function CadastroProdutos() {
    const [images, setImages] = useState([]);
    const [openImagens , setOpenImagens] = useState(false)

    const [imageReq , setImageReq] = useState()

    const [produto , setProduto] = useState()
    const [marca , setMarca] = useState()
    const [descrição , setDescrição] = useState()

    const [concluido , setConcluindo] = useState(false)

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
    setImageReq(files)

    const imagesArray = files.map((file) => {
      return URL.createObjectURL(file);
    });

    setImages((prevImages) => [...prevImages, ...imagesArray]);
    setOpenImagens(true)
  };

  const CadastrarProduto = async (e) => {
    e.preventDefault()
    console.log(imageReq)
    if(descrição == '' || descrição == undefined || descrição == null) {
        setDescrição("***")
    }

    if(marca == '' || marca == undefined || marca == null) {
        setMarca("***")
    }
    

        const dados = {
            "produto" : produto,
            "preçocompra" : "00",
            "margem" : "00",
            "preçovenda": "00",
            "emestoque" : "0",
            "descrição" : descrição,
            "imagem" : "",
            "marca" : marca,
            "comição" : "0",
            "defal" : "0",
            "ipi" : "0"
        }
        setConcluindo(true)
        fetchapi.NovoProduto(dados , imageReq)

        setProduto('')
        setDescrição('')
        setMarca('')
        setImages([])
        setOpenImagens(false)

        setTimeout(() => {
            setConcluindo(false);
        }, 1500)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


    return ( 
        <div id="CadastroProdutos">
            <form className="AreaInputsNovoProduto" onSubmit={(e) => CadastrarProduto(e)}>
                {concluido && <Concluindo/>}
                <la>
                    <p>Nome: </p>
                    <input type="text" className="nomeNovoProduto" onChange={(e) => escrever("produto", e)} value={produto} required/>
                </la>
                    <la>
                        <p>Marca: </p>
                        <input type="text" onChange={(e) => escrever("marca" , e)} value={marca}/>
                    </la>

                    <la>
                        <p>Descrição: </p>
                        <textarea id="texto" rows="4" cols="50" onChange={(e) => escrever("descrição" , e)} value={descrição}/>
                    </la>

                    <la>
                        <p>Imagens: </p>
                        <input type="file" multiple className="imageProduto" id="inputImageProduto" onChange={HandleImageChange}/>
                    </la>

                <div className="LinhaDivisão"/>
                <button className="bttCadastrarNovoProduto" type="submit">Cadastrar</button>
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