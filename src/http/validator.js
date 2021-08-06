
module.exports = function paramValidator(param, name){
    let field = String(param);
    if(!param || field.length == 0){
        let error = new Error(name+" parameter is empty");
        error.name = 'EmptyField';
        throw error;
    }
}