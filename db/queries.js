
const pool = require("./pool");




async function getAllMessages(){
    const { rows } = await pool.query("SELECT text,username,to_char(added, 'Mon DD YYYY HH24:MI:SS') AS formatted_added FROM messages");
    return rows;
}

async function getMessage(id){
    const {rows} = await pool.query("SELECT text,username,to_char(added, 'Mon DD YYYY HH24:MI:SS') AS formatted_added FROM messages WHERE messages.id = $1",[id]);
    
    return rows[0];
}


async function createNewMessage(message,username){
    await pool.query("INSERT INTO messages (text, username)VALUES ($1,$2)",[message,username]);
}



module.exports = {
    getAllMessages,
    getMessage,
    createNewMessage
}