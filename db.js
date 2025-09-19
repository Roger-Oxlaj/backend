const sql = require("mssql");

const config = {
  user: "rogelio3d_SQLLogin_1",
  password: "rarh5c283b",
  server: "MapeoEmbarazadas.mssql.somee.com",
  database: "MapeoEmbarazadas",
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

let pool;

async function connectDB() {
  try {
    if (!pool) {
      pool = await sql.connect(config);
      console.log("✅ Conectado a la base de datos en Somee.com");
    }
    return pool;
  } catch (err) {
    console.error("❌ Error de conexión:", err.message);
    throw err;
  }
}

function getConnection() {
  return pool;
}

module.exports = { connectDB, getConnection };
