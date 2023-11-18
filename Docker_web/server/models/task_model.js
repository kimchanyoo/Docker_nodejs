const db = require('./database');

module.exports = {
    FindAllTask: async function() {
        try {
            const result = await db.query('SELECT * from task');
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
    FindOneTask: async function(id) {
        try {
            const result = await db.query('SELECT * from task where id=?', [id]);
            return {data: result[0][0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
    AddTask: async function(task) {
        try {
            const result = await db.query('INSERT INTO task SET ?', task);
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
    UpdateTask: async function(id, completed) {
        try {
            const result = await db.query('UPDATE task SET completed=? where id=?', [completed, id]);
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
    DeleteTask: async function(id) {
        try {
            const result = await db.query('DELETE FROM task where id=?', [id]);
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
}

/*
const db = require('./database') : database.js 파일을 참조하여 db 객체 생성
module.exports : 아래 선언되는 함수들을 모듈로 export
db.query : db 쿼리문을 생성하여 실행
return {data: result[0], error: null} :  query 결과를 객체로 반환
* query의 결과 중 [0] 배열에 결과값이 저장되어 있음
*/