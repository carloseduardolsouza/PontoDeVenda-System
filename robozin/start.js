const ExcelJS = require('exceljs');
const path = require('path');
const axios = require('axios');

// Caminho para o arquivo Excel
const filePath = path.join(__dirname, 'MARÇO.xlsx'); // Substitua 'MARÇO.xlsx' pelo nome do seu arquivo

async function lerArquivoExcel() {
  const workbook = new ExcelJS.Workbook();

  try {
    await workbook.xlsx.readFile(filePath);

    // Obtenha a primeira planilha do arquivo Excel
    const worksheet = workbook.worksheets[0];

    // Array para armazenar os dados da tabela a partir da linha 3
    const dadosArray = [];

    // Iterar sobre as linhas da planilha a partir da linha 4
    for (let rowNumber = 4; rowNumber <= worksheet.rowCount; rowNumber++) {
      const row = worksheet.getRow(rowNumber);

      const coluna1 = row.getCell(1).value;
      const coluna2 = row.getCell(2).value;
      const coluna3 = row.getCell(3).value;
      const coluna4 = row.getCell(4).value;

      // Verificar se os valores são do tipo richText e extrair o texto para colunas 1 e 2
      const isRichText1 = coluna1 && coluna1.richText && coluna1.richText.length > 0;
      const isRichText2 = coluna2 && coluna2.richText && coluna2.richText.length > 0;

      let valorColuna1 = coluna1;
      let valorColuna2 = coluna2;

      if (isRichText1) {
        valorColuna1 = coluna1.richText[0].text;
      }
      if (isRichText2) {
        valorColuna2 = coluna2.richText[0].text;
      }

      if (valorColuna1 == undefined || valorColuna1 == '' || valorColuna1 == null) {
        valorColuna1 = 'indefinido'
      }

      if (valorColuna2 !== null && typeof valorColuna2 === 'string') {
        valorColuna2 = valorColuna2.replace(/\./g, '');
      } if (valorColuna2 == null) {
        valorColuna2 = 0;
      }

      //calculo
      var calculoPreçoVenda1 = (0.65 * valorColuna2) + valorColuna2

      // Adiciona dados das colunas 1 e 2 ao array
      if (
        valorColuna1 !== undefined &&
        valorColuna2 !== undefined
      ) {
        const linhaColuna12 = {
          produto: valorColuna1,
          preçocompra: valorColuna2,
          preçovenda: calculoPreçoVenda1,
          margem: 65,
          emestoque: 0
        };

        dadosArray.push(linhaColuna12);
      }

      // Verificar se os valores são do tipo richText e extrair o texto para colunas 3 e 4
      const isRichText3 = coluna3 && coluna3.richText && coluna3.richText.length > 0;
      const isRichText4 = coluna4 && coluna4.richText && coluna4.richText.length > 0;

      let valorColuna3 = coluna3;
      let valorColuna4 = coluna4;

      if (isRichText3) {
        valorColuna3 = coluna3.richText[0].text;
      }
      if (isRichText4) {
        valorColuna4 = coluna4.richText[0].text;
      }

      if (valorColuna3 == undefined || valorColuna3 == '' || valorColuna3 == null) {
        valorColuna3 = 'indefinido'
      }

      if (valorColuna4 !== null && typeof valorColuna4 === 'string') {
        valorColuna4 = valorColuna4.replace(/\./g, '');
      } if (valorColuna4 == null) {
        valorColuna4 = 0;
      }

      // Adiciona dados das colunas 3 e 4 ao array
      if (
        valorColuna3 !== undefined &&
        valorColuna4 !== undefined
      ) {
        const linhaColuna34 = {
          produto: valorColuna3,
          preçocompra: valorColuna4,
          preçovenda: calculoPreçoVenda1,
          margem: 65,
          emestoque: 0
        };
        
        dadosArray.push(linhaColuna34);
      }
    }

    // Exibir os dados do array de objetos
    console.log('Array de objetos com os dados:');
    console.log(dadosArray);

    // Itera sobre os seletores e insere os dados correspondentes do array
    dadosArray.map((produto , index) => {
      axios.put(`http://localhost:3322/editarProdutoAutomatico`, produto)
        .then(response => {
          console.log(`Produto ${index} atualizado com sucesso`);
        })
        .catch(error => {
          console.error(`Erro ao atualizar produto ${index}: ${error}`);
        });
    });

  } catch (error) {
    console.error('Erro ao ler o arquivo Excel:', error);
  }
}

lerArquivoExcel();
