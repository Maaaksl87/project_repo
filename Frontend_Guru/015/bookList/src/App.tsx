import Header from "./components/Header";
import Content from "./components/Content";
import BookList from "./components/BookList";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const books = [
    { id: 1, title: "Дюна", author: "Френк Герберт" },
    { id: 2, title: "1984", author: "Джордж Орвелл" },
    {
      id: 3,
      title: "Подоляночка",
      author: "Оксана Забужко",
    },
    { id: 4, title: "alice in wonderland", author: "Lewis Carroll" },
    { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 6, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 7, title: "Pride and Prejudice", author: "Jane Austen" },
    
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Content>
        <BookList books={books} />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
