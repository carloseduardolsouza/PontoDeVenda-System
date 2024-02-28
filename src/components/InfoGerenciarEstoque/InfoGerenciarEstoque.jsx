import "./InfoGerenciarEstoque.css";
import { useState, useEffect } from "react";
import fetchapi from "../../api/fetchapi";

function InfoGerenciarEstoque({ data }) {
    const {
        id,
        produto,
        descrição,
        preçovenda,
        preçocompra,
        ipi,
        defal,
        comição,
        emestoque,
        margem,
        imagem,
        marca,
    } = data;

    const [description , setDescription] = useState(descrição)
    const [categ , setCateg] = useState(marca)


    const [updateProduct , setUpdateProduct] = useState(false)

    const [imagensSalvas, setImagensSalvas] = useState([]);

    useEffect(() => {
        const imagens = imagem.slice(1, -1).split(",").map((imagem) => {
            return imagem.trim().replace(/"/g, ""); // Remove as aspas duplas
        });
        setImagensSalvas(imagens);
    }, [imagem]);

    const concluir = () => {
        const array = {
            "id": id,
            "produto" : produto,
            "preçocompra" : preçocompra,
            "margem" : margem,
            "preçovenda": preçovenda,
            "emestoque" : emestoque,
            "descrição" : description,
            "imagem" : imagem,
            "marca" : categ,
            "comição" : comição,
            "defal" : defal,
            "ipi" : ipi,
            "type" : "basico"
        }
        fetchapi.AtualizarProduto(array)
        setUpdateProduct(false)
    }

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
                        <textarea id="texto" rows="6" cols="60" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <p><strong>Categoria: </strong></p>
                        <input type="text" value={categ} className="inputMarcaInfoEstoque" onChange={(e) => setCateg(e.target.value)}/> <br />
                        <button className="EditarGerenciarEstoque" onClick={() => concluir()}>Concluir</button>
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
