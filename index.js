const {app, BrowserWindow , Menu} = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        title: "CashInBox",
        webPreferences: false,
        fullscreen: false,
        width: 1200,
        height: 900,

    })
    win.loadURL("http://localhost:3000/")

    // Define o menu personalizado para a janela
        const mainMenu = Menu.buildFromTemplate([]);
        Menu.setApplicationMenu(mainMenu);
}

app.on("ready", createWindow)