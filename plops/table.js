// *******************************************************
// Table Generator Functions
// -------------------------------------------------------

// *******************************************
// Imports
// -------------------------------------------
var fs = require('fs');
// --------------------------------

// *******************************************
// Implementations
// -------------------------------------------
const create = (plop) => {
    plop.setGenerator('table', {
        description: 'Generate a new database table.',
        prompts: [{
            type: 'input',
            name: 'table',
            message: 'Please enter your table name:',
            validate: (table) => { return (table.length > 0 ? true : "You must enter a table name.")}
        }, {
            type: 'list',
            name: 'db',
            message: 'Please select your database:',
            choices: ['MongoDB', 'SQL', 'GoogleSheets', 'default']
        }],
        actions: [
            function customAction(data) {
                let tables = [];
                let actions = [];
                const dirs = fs.readdirSync('./server/database/tables');
                dirs.forEach((dir) => {if (dir !== 'index.js') { tables.push(dir);}});
                tables.push(data.table);
                tables.sort(function(a, b){ if(a < b) { return -1; } if(a > b) { return 1; } return 0; });
                const indexTemplateRaw = fs.readFileSync('./templates/table/root.js', 'utf8');
                // console.log("PRINT RAW TEMPLATE");
                // console.log(indexTemplateRaw);
                indexTemplate = plop.renderString(indexTemplateRaw, {tables});
                const result = fs.writeFileSync('./server/database/tables/index.js', indexTemplate, {flag: 'w'});
            },
            {
                type: 'add',
                path: 'server/database/tables/{{ table }}/controller.js',
                templateFile: `templates/table/controllers/{{ db }}/controller.js`
            },
            {
                type: 'add',
                path: 'server/database/tables/{{ table }}/index.js',
                templateFile: `templates/table/index.js`
            },
            {
                type: 'add',
                path: 'server/database/tables/{{ table }}/model.js',
                templateFile: `templates/table/model.js`
            },
        ]
    });
}

module.exports = {
    create
};
// --------------------------------
