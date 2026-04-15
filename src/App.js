import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import logo from "./mylogo.png";
function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const registerLearner = async (newStudent) => {
    const fakeApi = new Promise((resolve) => {
      setTimeout(() => resolve(newStudent), 500);
    });

    const data = await fakeApi;
    setStudents((prev) => [...prev, data]);
  };

  const deleteStudent = (indexToDelete) => {
    setStudents((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="logo" style={styles.logo} />
      <h1 style={styles.heading}>Student Manager</h1>

      <input
        style={styles.search}
        placeholder="🔍 Search student..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <StudentForm registerLearner={registerLearner} />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        searchTerm={searchTerm}
      />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial",
    background: "#eef2f7",
    minHeight: "100vh",
  },
   logo: {
    width: "80px",
    marginBottom: "10px",
   },
  heading: {
    marginBottom: "10px",
  },
  search: {
    padding: "10px",
    width: "250px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  },
};

export default App;
