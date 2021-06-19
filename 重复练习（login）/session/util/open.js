const {
    exec
} = require("child_process");

function open(port, host) {
    const type = process.platform;
    let open = "";

    switch (type) {
        case "win32":
            open = "start";
            break;
        case "darwin":
            open = "open";
            break;
        case "linux":
            open = "xdg-open";
            break;
        
    }

    exec(`${open} ${host}:${port}`);
}
module.exports = open;