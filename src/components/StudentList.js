function StudentList({ students, deleteStudent, searchTerm }) {
  const filteredStudents = students
    .filter((stu) => stu.age >= 18)
    .filter((stu) =>
      stu.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <h2>📋 Student List</h2>

      {filteredStudents.length === 0 ? (
        <p>No students found</p>
      ) : (
        filteredStudents.map((stu, index) => (
          <div key={index} style={styles.card}>
            <h3>{stu.name}</h3>
            <p>Age: {stu.age}</p>
            <p>Course: {stu.course}</p>

            <button
              style={styles.deleteBtn}
              onClick={() => deleteStudent(index)}
            >
              ❌ Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    margin: "10px auto",
    padding: "15px",
    width: "260px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  deleteBtn: {
    marginTop: "10px",
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#dc3545",
    color: "#fff",
    cursor: "pointer",
  },
};

export default StudentList;