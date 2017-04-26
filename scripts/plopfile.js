/**
 * Created by psenger on 26/04/2017.
 */
var path = require('path');

module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('basics', {
        description: 'this is a skeleton plopfile',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the component?',
                validate: function (value) {
                    if ((/.+/).test(value)) { return true; }
                    return 'name is required';
                }
            },
            {
                type: 'input',
                name: 'actionName',
                message: 'what action name is dedicated to this component? ( it will be ',

            },
            {
                type: 'input',
                name: 'reducer',
                message: 'what reducer  you want to bind to ',

            },
            {
                type: 'input',
                name: 'reducerProperty',
                message: 'what reducer property you want to bind to ',

            }
            // {
            //     type: 'checkbox',
            //     name: 'name',
            //     message: 'What pizza toppings do you like?',
            //     choices: [
            //         {name: 'Cheese', value: 'cheese', checked: true},
            //         {name: 'Pepperoni', value: 'pepperoni'},
            //         {name: 'Pineapple', value: 'pineapple'},
            //         {name: 'Mushroom', value: 'mushroom'},
            //         {name: 'Bacon', value: 'bacon', checked: true}
            //     ]
            // }
        ],
        actions: [{
            type: 'add',
            path: './{{dashCase name}}.txt',
            templateFile: 'templates/doo.hbs',
            abortOnFail: true
        }]
    });
};