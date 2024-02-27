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
                <h2>{produto}</h2>
                <p><strong>Key: </strong>{id}</p>
                <p><strong>Descrição: </strong>{descrição}</p>
                <p><strong>Categoria: </strong>{marca}</p>
                <button className="EditarGerenciarEstoque">Editar</button>
            </div>
        </div>
    );
}

export default InfoGerenciarEstoque;
