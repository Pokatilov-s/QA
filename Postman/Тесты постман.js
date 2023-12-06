//Тест для Reuse_params.postman_collection.json
var id_task = pm.response.json().tasks[0].id;

pm.collectionVariables.set("task_id", id_task);

//Описание 
var jsonData = pm.response.json()
malahov = jsonData.suggestions[2].data.surname

console.log(malahov) 

pm.test("Ищем Малахова", function () {
    pm.expect(malahov).to.eql('Малахов');
});
