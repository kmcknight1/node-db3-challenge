const db = require("../dbConfig");

module.exports = {
  find,
  findById,
  add,
  findSteps,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first()
    .then(scheme => {
      if (scheme) {
        return scheme;
      } else {
        return null;
      }
    });
}

function add(schemeData) {
  return db("schemes")
    .insert(schemeData)
    .then(scheme => {
      const [id] = scheme;
      return { id: id, scheme_name: schemeData.scheme_name };
    });
}

function findSteps(id) {
  return db("schemes as sc")
    .innerJoin("steps as st", "sc.id", "st.scheme_id")
    .where({ scheme_id: id })
    .select("sc.scheme_name", "st.step_number", "st.instructions")
    .orderBy("st.step_number");
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(scheme => {
      return { id: id, scheme_name: changes.scheme_name };
    });
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del()
    .then(scheme => {
      if (scheme) {
        return scheme;
      } else {
        return null;
      }
    });
}
