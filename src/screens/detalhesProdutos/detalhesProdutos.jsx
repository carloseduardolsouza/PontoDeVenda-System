import "./detalhesProdutos.css"
import fetchapi from "../../api/fetchapi";
import { useParams } from 'react-router-dom';

import Loading from "../../components/AçãoRealizada/AçãoRealizada"

import { useState , useEffect } from "react";

function DetalhesProdutos() {
    const { id } = useParams();

    const [resultProdutos , setResultProdutos] = useState([])
    const [resultImageProdutos , setResultImageProdutos] = useState()
    const [loadingProdutos , setloadingProdutos] = useState(true)

    const [indice , setIndice] = useState(0)

    useEffect(() => {
        fetchapi.ProcurarProdutosId(id).then((response) => {
            const imagensSalva = response[0].imagem.slice(1, -1).split(',').map(imagem => {
                return imagem.trim().replace(/"/g, ''); // Remove as aspas duplas
            });
            setResultProdutos(response[0])
            setResultImageProdutos(imagensSalva)
            setloadingProdutos(false)
        })
    }, [])

    return ( 
        loadingProdutos && <Loading/> ||
        <div id="detalhesProdutos">
            <h2 className="h2detalhesProdutos">Detalhes Produto</h2>
            <div className="alinhares">
                <div>
                    <div className="ImagemdoProdutoDetalhes" style={{backgroundImage: `url("http://localhost:3322/imagens/${resultImageProdutos[indice]}")`}}
                    onClick={() => window.open(`http://localhost:3322/imagens/${resultImageProdutos[indice]}`)}
                    />
                    <div className="areaSubImages">
                    {resultImageProdutos.map((imagem , index) => (
                        <div className="imageSub" style={{ backgroundImage: `url("http://localhost:3322/imagens/${imagem}")` }}
                        onClick={() => setIndice(index)}
                        />
                        ))}
                    </div>
                </div>

                <div>
                    <h1>{resultProdutos.produto}</h1>
                    <p><strong>Descrição:</strong></p>
                    <p className="descriçãoDetalhesProdutos">{resultProdutos.descrição}</p>
                    <p><strong>Categoria: </strong>{resultProdutos.marca}</p>
                    <p><strong>Preço: </strong>{resultProdutos.preço}</p>
                </div>
            </div>
        </div>
     );
}

export default DetalhesProdutos;