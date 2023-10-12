
const fs = require("fs");
const yaml = require('js-yaml');

try {
    const yamlFile = fs.readFileSync('./openapi.yaml', 'utf8');

    const parsedYaml = yaml.load(yamlFile);

    const jsonString = JSON.stringify(parsedYaml, null, 2);

    console.log(jsonString);
}catch (error) {
    console.error(error);
}