const Library = require("../models/library");

// Add a new book
const addStudent = async (req, res) => {
  try {
   

    const book = new Library(req.body);

    const savedBook = await book.save();

    res.status(201).json(savedBook);
  } catch (err) {
    console.error("Add book error:", err);

    res.status(400).json({
      message: err.message,
    });
  }
};

// Get all books
const getStudents = async (req, res) => {
  try {
    const books = await Library.find().sort({ createdAt: -1 });

    res.status(200).json(books);
  } catch (err) {
    console.error("Get books error:", err);

    res.status(500).json({
      message: err.message,
    });
  }
};

// Update book
const updateStudent = async (req, res) => {
  try {
    const updated = await Library.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updated) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(updated);
  } catch (err) {
    console.error("Update book error:", err);

    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  addStudent,
  getStudents,
  updateStudent,
};