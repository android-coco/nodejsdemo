/**
 * Created by yhlyl on 2017/12/8.
 */
var UserSQL = {
    insert:'INSERT INTO apps(app_name,url,country) VALUES(?,?,?)',
    queryAll:'SELECT * FROM apps',
    getUserById:'SELECT * FROM apps WHERE id = ? ',
};
module.exports = UserSQL;
