import { connect } from "../database";

export const getTasks = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * FROM tasks;");
  res.json(rows);
};

export const saveTask = async (req, res) => {
  const { title, description } = req.body;
  const db = await connect();
  const [results] = await db.query(
    `INSERT INTO tasks(title, description) VALUES ('${title}', '${description}');`
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const getTasksCount = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT COUNT(*) FROM tasks;");
  res.json(rows[0]["COUNT(*)"]);
};

export const getTask = async (req, res) => {
  const db = await connect();
  const { id } = req.params;
  const [rows] = await db.query(`SELECT * FROM tasks WHERE id = ${id};`);
  res.json(rows[0]);
};

export const deleteTask = async (req, res) => {
  const db = await connect();
  const { id } = req.params;
  await db.query(`DELETE FROM tasks WHERE id = ${id};`);
  res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const db = await connect();
  const { id } = req.params;
  await db.query(`UPDATE tasks SET ? WHERE id = ${id};`, [req.body]);
  res.sendStatus(204);
};
