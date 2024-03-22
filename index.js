const { app, BrowserWindow, Menu, screen } = require("electron");

function createWindow() {
  // Obtém informações sobre a tela principal
  const mainScreen = screen.getPrimaryDisplay();
  const { width, height } = mainScreen.workAreaSize;

  // Define o menu personalizado para a janela
  const mainMenu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(mainMenu);

  // Calcula as dimensões da janela para ocupar 100% da tela
  const win = new BrowserWindow({
    title: 'CashInBox',
    webPreferences: false,
    width: width,
    height: height,
    resizable: false, // torna a janela não redimensionável
    minimizable: true, // permite minimizar a janela
    closable: true, // permite fechar a janela
  });

  win.loadURL("http://localhost:4000/");

  // Minimiza a janela ao clicar no botão de fechar
  win.on('close', (event) => {
    event.preventDefault();
    win.minimize();
  });
}

app.on("ready", createWindow);
