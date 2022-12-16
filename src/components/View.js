import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export const View = ({ books, deleteBook }) => {
  return books.map((book) => (
    <tr key={book.phone}>
      <td>{book.firstName}</td>
      <td>{book.lastName}</td>
      <td>{book.phone}</td>
      <td className="delete-btn" onClick={() => deleteBook(book.phone)}>
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};

export default View;
