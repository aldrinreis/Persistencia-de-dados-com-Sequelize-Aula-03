const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("empresa.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  }
  //console.log("Conectado ao banco de dados Empresa com sucesso!");
  // db.run("CREATE TABLE setor(idsetor int, nome varchar(40), ramal varchar(4), e_mai varchar(30))")

  /*db.run(
    "CREATE TABLE funcionario(matricula int primary key, id_setor int not null, nome varchar(40), nascimento date, telefone varchar(15))");*/
});

/*db.run("INSERT into setor(idsetor, nome, ramal, e_mai) values(1, 'FINANCEIRO', '4254', 'financeiro@example.com')");
db.run("INSERT into setor(idsetor, nome, ramal, e_mai) values(2, 'POTARIA', '4253', 'postaria@example.com')");
db.run("INSERT into setor(idsetor, nome, ramal, e_mai) values(3, 'SECRETARIA', '4237', 'secretaria@example.com')");*/
/*
db.run(
  "INSERT into funcionario(matricula, id_setor, nome, nascimento, telefone) values(1234, 1, 'ANA', '12-04-1978', '01219219' )",
);
db.run(
  "INSERT into funcionario(matricula, id_setor, nome, nascimento, telefone) values(1235, 3, 'IVO', '12-12-2000', '01219220' )",
);
db.run(
  "INSERT into funcionario(matricula, id_setor, nome, nascimento, telefone) values(1236, 2, 'OTO', '07-02-1987', '01219221' )",
);

db.run(
  "INSERT into funcionario(matricula, id_setor, nome, nascimento, telefone) values(1237, 1, 'KARINA', '09-0-1990', '01219222' )",
);
*/

db.each("select matricula, nome from funcionario", (err, row) => {
  if (err) {
    console.error(err.message);
  }
  console.log(row.matricula + "\t" + row.nome);
});
