// *******************************************************
// Test Generator Functions
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
    plop.setGenerator('test', {
        description: 'Debugging purposes',
        prompts: [{
            type: 'input',
            name: 'route',
            message: 'Please enter your api route name:'
        }],
        actions: [
            function customAction(data) {
                console.log("What is data?");
                console.log(data);
            },
        ]
    });
}

module.exports = {
    create
};
// --------------------------------
