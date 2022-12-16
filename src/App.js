import React, { useState, useEffect } from "react";
import { View } from "./components/View";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  const [books, setbooks] = useState(getDatafromLS());

  // input field states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let book = {
      firstName,
      lastName,
      phone,
    };
    setbooks([...books, book]);
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  // delete book from LS
  const deleteBook = (phone) => {
    const filteredBooks = books.filter((element, index) => {
      return element.phone !== phone;
    });
    setbooks(filteredBooks);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="wrapper">
      <h1>Phone Book</h1>
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddBookSubmit}
          >
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            ></input>
            <br></br>
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            ></input>
            <br></br>
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {books.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Phone</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View books={books} deleteBook={deleteBook} />
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => setbooks([])}
              >
                Remove All
              </button>
            </>
          )}
          {books.length < 1 && <div>No books are added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
