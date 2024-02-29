import "./InfoGerenciarEstoque.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import fetchapi from "../../api/fetchapi";
import Deletando from "../Deletando/Deletando"
import Concluindo from "../Concluindo/Concluindo"
import Loading from "../AçãoRealizada/AçãoRealizada"

function InfoGerenciarEstoque({id}) {
    const [deleted , setDeleted] = useState(false)
    const [updateProduct , setUpdateProduct] = useState(false)
    const [loading , setloading] = useState(true)
    const [resultProdutos , setResultProdutos] = useState([])
    
    const [description , setDescription] = useState()
    const [categ , setCateg] = useState()


    const [imagensSalvas, setImagensSalvas] = useState([]);
    const [conclied , setConcluied] = useState(false)
    
    useEffect(() => {
        fetchapi.ProcurarProdutosId(id).then((response) => {
            setResultProdutos(response[0])
            
            const imagens = response[0].imagem.slice(1, -1).split(",").map((imagem) => {
                return imagem.trim().replace(/"/g, ""); // Remove as aspas duplas
            });
            setImagensSalvas(imagens)
            setCateg(response[0].marca)
            setDescription(response[0].descrição)
            setloading(false)
        })
    }, [])

    const {
        produto,
        preçovenda,
        preçocompra,
        ipi,
        defal,
        comição,
        emestoque,
        margem,
        imagem,
    } = resultProdutos

    const concluir = async () => {
        setConcluied(true)
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
        await fetchapi.AtualizarProduto(array)
        await fetchapi.ProcurarProdutosId(id).then((response) => {
            const {
                descrição,
                marca
            } = response[0]
            setDescription(descrição)
            setCateg(marca)
        })
        setTimeout(() => {
            setConcluied(false)
            setUpdateProduct(false)
        },1500)
    }

    const deletarProduto = async () => {
        fetchapi.DeletarProduto(id)
        setDeleted(true)

        setTimeout(() => {
            window.location.href = "/estoque"
        },2000)
    }

    return (
        <div>
            {loading && <Loading/> ||
            <div id="InfoGerenciarEstoque">
                {conclied && <Concluindo/>}
                <div>
                    <div className="ImageGerenciarEstoque" style={{backgroundImage: `url("http://localhost:3322/imagens/${imagensSalvas[0]}")`}}/>
                </div>
    
                <div className="areaInfoGerenciarEstoque">
                    {deleted && <Deletando/>}
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
                            <p><strong>Descrição: </strong>{description}</p>
                            <p><strong>Categoria: </strong>{categ}</p>
                            <button className="EditarGerenciarEstoque" onClick={() => setUpdateProduct(true)}><FaEdit /> Editar</button>
                            <button className="ExcluirGerenciarEstoque" onClick={() => deletarProduto()}><MdDeleteOutline/> Excluir produto</button>
                        </div>
                    }

            </div>
            </div>
    }
        </div>
    );
}

export default InfoGerenciarEstoque;
