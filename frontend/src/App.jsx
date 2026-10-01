import { useState, useEffect } from "react";
import StudentForm from "./component/StudentForm";
import StudentList from "./component/StudentList";
import { getAllStudents } from "./api/studentApi";
import "./App.css";

function App() {
const [students, setStudents] = useState([]);
const fetchStudents = async () => {
const res = await getAllStudents();
setStudents(res.data);
};
useEffect(() => {
fetchStudents();
}, []);

const [editingStudent, setEditingStudent] = useState(null);

return (
<div className="container">
<h1>Library Management System</h1>
<StudentForm onStudentAdded={fetchStudents}
editingStudent={editingStudent}
clearEdit={() => setEditingStudent(null)}
/>
<StudentList students={students}
onEdit={setEditingStudent} />
</div>
);
}

export default App;