import { useBooks } from "../context/BooksContext";
import { MenuItem, Select, Typography, Box } from "@mui/material";
import { useState } from "react";

export default function CourseFilter() {
  const { books } = useBooks();
  const [selected, setSelected] = useState("");

  const courses = [...new Set(books.map(books => books.course))];

  const filteredBooks = selected === ""
    ? books
    : books.filter((book) => book.course === selected);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Filtrar por Disciplina</Typography>

      <Select
        fullWidth
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        sx={{ mb: 3 }}
      >
        <MenuItem value="">Todas as Disciplinas</MenuItem>
        {courses.map((course) => (
          <MenuItem key={course} value={course}>
            {course}
          </MenuItem>
        ))}
      </Select>

      {filteredBooks.length > 0 ? (
        filteredBooks.map((book, index) => (
          <Typography key={index}>
            {book.title} — {book.course}
          </Typography>
        ))
      ) : (
        <Typography color="text.secondary">
          Nenhum livro encontrado para esta disciplina.
        </Typography>
      )}
    </Box>
  );
}
