const conf = {
    "endpoint": "https://test-xapi-tqt.lrs.io/xapi/",
    "auth": "Basic " + toBase64("test:12345678")
};
ADL.XAPIWrapper.changeConfig(conf);
const parameters = ADL.XAPIWrapper.searchParams();
const collectSinceDate = new Date("Jun 20, 2022 00:00:00");
const collectBeforeDate = new Date(" Jun 21, 2022 00:00:00");
parameters["since"] = collectSinceDate.toISOString(); /* Returns statements since Jan 1, 2020 */
parameters["until"] = collectBeforeDate.toISOString(); /* Returns statements from before Feb 1, 2020 */
const queryData = ADL.XAPIWrapper.getStatements(parameters)
console.log(queryData.length);
queryData.statements.forEach(populateStatements)

function populateStatements(statement) {
    const newItem = document.createElement("li")
    const newStatement = document.createTextNode(statement.actor.name + " " + statement.verb.display["en-US"] + " " + statement.object.definition.name["en-US"])
    newItem.appendChild(newStatement)
    document.getElementById("statement-list").appendChild(newItem)
}