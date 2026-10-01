function StudentList({ students, onEdit }) {
return (
<div className="student-list">
<h2>Student Records</h2>
<table>
<thead>
<tr>
<th>Book Title</th>
<th>Author</th>
<th>Category</th>
<th>Year</th>
<th>ISBN</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{students.map((s) => (
<tr key={s._id}>
<td>{s.booktitle}</td>
<td>{s.author}</td>
<td>{s.category}</td>
<td>{s.year}</td>
<td>{s.isbn}</td>
<td>
<button onClick={() => onEdit(s)}>Edit</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
export default StudentList;