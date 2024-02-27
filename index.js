const {app, BrowserWindow , Menu} = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        title: "Ponto De Venda",
        webPreferences: false,
        fullscreen: true,

    })
    win.loadURL("http://localhost:3001/")

    // Define o menu personalizado para a janela
        const mainMenu = Menu.buildFromTemplate([]);
        Menu.setApplicationMenu(mainMenu);
}

app.on("ready", createWindow)