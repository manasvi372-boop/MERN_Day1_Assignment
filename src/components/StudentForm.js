import { useState } from "react";

function StudentForm({ registerLearner }) {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [courseName, setCourseName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentName || !studentAge || !courseName) {
      alert("⚠ Please fill all fields!");
      return;
    }
    if (Number(studentAge) < 18) {
    alert("❌ Student must be at least 18 years old!");
    return;
  }

    registerLearner({
      name: studentName,
      age: Number(studentAge),
      course: courseName,
    });

    setStudentName("");
    setStudentAge("");
    setCourseName("");
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2>➕ Add New Student</h2>

      <input
        style={styles.input}
        placeholder="Full Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <input
        style={styles.input}
        type="number"
        placeholder="Age"
        value={studentAge}
        onChange={(e) => setStudentAge(e.target.value)}
      />

      <input
        style={styles.input}
        placeholder="Course"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />

      <button style={styles.button}>Add Student</button>
    </form>
  );
}

const styles = {
  form: {
    background: "#fff",
    padding: "20px",
    margin: "20px auto",
    width: "300px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  input: {
    display: "block",
    width: "90%",
    margin: "10px auto",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default StudentForm;