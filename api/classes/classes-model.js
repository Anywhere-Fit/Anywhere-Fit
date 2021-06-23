const db = require("../data/db-config");


function getAllClasses(){
    return db("Classes")
}

function getByClassId(ClassId){
    return db("Classes")
            .where("ClassId", ClassId)
}

async function updateClassByClassId(UpdatedClass){
    await db("Classes")
            .where("ClassId", UpdatedClass.ClassId)
            .update(UpdatedClass)

    return getByClassId(UpdatedClass.ClassId)
}

 async function addClass(classToAdd){
    const classToAddId = await db("Classes")
            .insert(classToAdd)
    return getByClassId(classToAddId);
}

async function deleteClassByClassId(ClassId){
    await db("Classes")
            .where("ClassId", ClassId)
            .del()
    return getAllClasses()
}

module.exports = {
    getAllClasses, getByClassId, updateClassByClassId, addClass, deleteClassByClassId
}