// *******************************************************
// API Generator Functions
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
    plop.setGenerator('api', {
        description: 'Generate a new api endpoint.',
        prompts: [{
            type: 'input',
            name: 'route',
            message: 'Please enter your api route name:'
        }],
        actions: [
            function customAction(data) {
                let routes = [];
                let actions = [];
                const dirs = fs.readdirSync('./server/api');
                dirs.forEach((dir) => {if (dir !== 'index.js') { routes.push(dir);}});
                routes.push(data.route);
                routes.sort(function(a, b){ if(a < b) { return -1; } if(a > b) { return 1; } return 0; });
                const indexTemplateRaw = fs.readFileSync('./templates/api/root.js', 'utf8');
                const routeTemplateRaw = fs.readFileSync('./templates/api/routes.js', 'utf8');
                const indexTemplate = plop.renderString(indexTemplateRaw, {routes});
                const routeTemplate = plop.renderString(routeTemplateRaw, {routes});
                fs.writeFileSync('./server/api/index.js', indexTemplate, {flag: 'w'});
                fs.writeFileSync('./server/config/routes.js', routeTemplate, {flag: 'w'});
            },
            {
                type: 'add',
                path: 'server/api/{{ route }}/index.js',
                templateFile: `templates/api/index.js`
            },
            {
                type: 'add',
                path: 'server/api/{{ route }}/public.js',
                templateFile: `templates/api/api.js`,
                data: {
                    route: '{{ route }}',
                    type: 'public'
                }
            },
            {
                type: 'add',
                path: 'server/api/{{ route }}/auth.js',
                templateFile: `templates/api/api.js`,
                data: {
                    route: '{{ route }}',
                    type: 'auth'
                }
            },
            {
                type: 'add',
                path: 'server/api/{{ route }}/admin.js',
                templateFile: `templates/api/api.js`,
                data: {
                    route: '{{ route }}',
                    type: 'admin'
                }
            },
        ]
    });
}

module.exports = {
    create
};
// --------------------------------
