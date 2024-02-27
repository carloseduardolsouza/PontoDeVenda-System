import "./InfoGerenciarEstoque.css";
import { useState, useEffect } from "react";

function InfoGerenciarEstoque({ data }) {
    const {
        id,
        produto,
        descrição,
        imagem,
        marca,
    } = data;

    const [updateProduct , setUpdateProduct] = useState(false)

    const [imagensSalvas, setImagensSalvas] = useState([]);

    useEffect(() => {
        const imagens = imagem.slice(1, -1).split(",").map((imagem) => {
            return imagem.trim().replace(/"/g, ""); // Remove as aspas duplas
        });
        setImagensSalvas(imagens);
    }, [imagem]);

    return (
        <div id="InfoGerenciarEstoque">
            <div>
                <div className="ImageGerenciarEstoque" style={{backgroundImage: `url("http://localhost:3322/imagens/${imagensSalvas[0]}")`}}/>
            </div>

            <div className="areaInfoGerenciarEstoque">
                {updateProduct && 
                    <div>
                        <h2>{produto}</h2>
                        <p><strong>Key: </strong>{id}</p>
                        <p><strong>Descrição: </strong></p>
                        <textarea id="texto" rows="6" cols="60" value={descrição} />
                        <p><strong>Categoria: </strong></p>
                        <input type="text" value={marca} className="inputMarcaInfoEstoque" /> <br />
                        <button className="EditarGerenciarEstoque" onClick={() => setUpdateProduct(false)}>Concluir</button>
                    </div> ||

                    <div>
                        <h2>{produto}</h2>
                        <p><strong>Key: </strong>{id}</p>
                        <p><strong>Descrição: </strong>{descrição}</p>
                        <p><strong>Categoria: </strong>{marca}</p>
                        <button className="EditarGerenciarEstoque" onClick={() => setUpdateProduct(true)}>Editar</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default InfoGerenciarEstoque;
