const {app, BrowserWindow , Menu} = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        title: "Ponto De Venda",
        webPreferences: false,
        width: 800,
        height: 600,

    })
    win.loadURL("http://localhost:3000/")

    // Define o menu personalizado para a janela
        const mainMenu = Menu.buildFromTemplate([]);
        Menu.setApplicationMenu(mainMenu);
}

app.on("ready", createWindow)