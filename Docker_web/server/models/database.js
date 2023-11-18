const mysql =  require('mysql2/promise');

require("dotenv").config();

const db = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = db

/*
require("dotenv").config() : .env 파일에 설정된 값을 환경 변수로 등록
createPool : 환경 변수에 설정된 값을 참조하여 데이터베이스 연결 Pool 생성. 
동시에 여러 데이터베이스 연결을 관리하고, 재사용성을 높이기 위해 pool을 사용
100으로 잡아두었으면, 접근하는 사람이 남아있는 것을 쓰고 다시 반환해주는 방식
*/