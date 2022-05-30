const fs = require("fs")
const path = require ("path");

const controller = {
    main: (req, res) => {
        const mainPath = path.resolve(__dirname, '../views/index')
        return res.render(mainPath)
    }
}

module.exports = controller