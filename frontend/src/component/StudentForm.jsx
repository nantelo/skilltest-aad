import { useState, useEffect } from "react";
import { createStudent, updateStudent } from "../api/studentApi";

function StudentForm({ onStudentAdded, editingStudent, clearEdit }) {
  const [formData, setFormData] = useState({
    booktitle: "",
    author: "",
    category: "",
    year: "",
    isbn: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        booktitle: editingStudent.booktitle || "",
        author: editingStudent.author || "",
        category: editingStudent.category || "",
        year: editingStudent.year || "",
        isbn: editingStudent.isbn || "",
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingStudent) {
        await updateStudent(editingStudent._id, formData);
        clearEdit();
      } else {
        await createStudent(formData);
      }

      setFormData({
        booktitle: "",
        author: "",
        category: "",
        year: "",
        isbn: "",
      });

      onStudentAdded();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>{editingStudent ? "Edit Book" : "Add Book"}</h2>

      <input
        name="booktitle"
        placeholder="Book Title"
        value={formData.booktitle}
        onChange={handleChange}
        required
      />

      <input
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <input
        name="year"
        type="number"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
        required
      />

      <input
        name="isbn"
        type="text"
        placeholder="ISBN"
        value={formData.isbn}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingStudent ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}

export default StudentForm;