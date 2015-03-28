/**
 * Created by joel_rodriguez
 * This file contain the base method for ToDo.ly Webpage
 */

var frisby = require('frisby');

module.exports.createProject = function(user){
    var now = new Date();
    var project =
    {
        "Content": "Project " + now.getTime(),
        "Icon": "4"
    };
    return frisby.create('Create project')
        .post('https://todo.ly/api/projects.json', project, {json: true})
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getAllProjects = function(user){
    return frisby.create('Get All projects')
        .get('https://todo.ly/api/projects.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getProjectByID = function(user, Pid){
    return frisby.create('Get Projects By ID')
        .get('https://todo.ly/api/projects/'+ Pid +'.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.updateProjectByID = function(user, Pid){
    var now = new Date();
    var updateData =
    {
        "Content": "Project " + now.getTime(),
        "Icon": "4"
    };
    return frisby.create('Update Projects By ID')
        .put('https://todo.ly/api/projects/'+ Pid +'.json', updateData, {json: true})
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.deleteProjectByID = function(user, Pid){
    return frisby.create('Delete Projects By ID')
        .delete('https://todo.ly/api/projects/'+ Pid +'.json', {json: true})
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getItemsOfProjectByID = function(user, Pid){
    return frisby.create('Get Items Of Projects By ID')
        .get('https://todo.ly/api/projects/'+ Pid +'/items.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getDoneItemsOfProjectByID = function(user, Pid){
    return frisby.create('Get Done Items Of Projects By ID')
        .get('https://todo.ly/api/projects/'+ Pid +'/doneitems.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.createUser = function(user, uname, password, email){
    var now = new Date();
    var userData =
    {
        "Email": email,
        "FullName": uname,
        "Password": password
    };
    return frisby.create('Create User')
        .post('https://todo.ly/api/user.json', userData, {json: true})
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getUser = function(user){
    return frisby.create('Get User')
        .get('https://todo.ly/api/user.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.updateUser = function(user){
    var userData =
    {
        //"Email": email,
        //"FullName": uname,
        //"Password": password
    };
    return frisby.create('Update User')
        .put('https://todo.ly/api/user/0.json', userData, {json: true})
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.deleteUser = function(user){
    return frisby.create('Delete User')
        .delete('https://todo.ly/api/user/0.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.isAuthenticated = function(user){
    return frisby.create('Is Authenticated')
        .get('https://todo.ly/api/authentication/isauthenticated.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getToken = function(user){
    return frisby.create('Get Token')
        .get('https://todo.ly/api/authentication/token.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.deleteToken = function(token){
    return frisby.create('Delete Token')
        .delete('https://todo.ly/api/authentication/token.json')
        .addHeaders({'Token': token});
};

module.exports.getFilters = function(user){
    return frisby.create('Get Filters')
        .get('https://todo.ly/api/filters.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getFiltersByID = function(user, Fid){
    return frisby.create('Get Filters By ID')
        .get('https://todo.ly/api/filters/' + Fid + '.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getItemsOfaFilter = function(user, Fid){
    return frisby.create('Get Items of a Filter')
        .get('https://todo.ly/api/filters/' + Fid + '/items.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getDoneItemsOfaFilter = function(user, Fid){
    return frisby.create('Get Done Items of a Filter')
        .get('https://todo.ly/api/filters/' + Fid + '/doneitems.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getAllItems = function(user){
    return frisby.create('Get All Items')
        .get('https://todo.ly/api/items.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.createNewItem = function(user){
    var now = new Date();
    var project =
    {
        "Content": "Item" + now.getTime()
    };
    return frisby.create('Create new Item')
        .post('https://todo.ly/api/items.json', project, {json: true})
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getItemByID = function(user, Iid){
    return frisby.create('Get Item By Id')
        .get('https://todo.ly/api/items/' + Iid + '.json')
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.updateItemByID = function(user, Iid){
    return frisby.create('Update Item By Id')
        .put('https://todo.ly/api/items/' + Iid + '.json', {json: true})
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.deleteItemById = function(user, Iid){
    return frisby.create('Delete Item By Id')
        .delete('https://todo.ly/api/items/' + Iid + '.json', {json: true})
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getRootItemByChildID = function(user, Iid){
    return frisby.create('Get Root Item By child Id')
        .delete('https://Todo.ly/API/Items/' + Iid + '/RootItem.json', {json: true})
        .addHeaders({'Authorization':'Basic '+ user});
};

module.exports.getDoneRootItemBychildID = function(user, Iid){
    return frisby.create('Get Done Root Item By child Id')
        .delete('https://Todo.ly/API/Items/' + Iid + '/DoneRootItem.json', {json: true})
        .addHeaders({'Authorization':'Basic '+ user});
};