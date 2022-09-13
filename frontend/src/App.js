import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsProvider from "./contexts/PostsProvider";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import HomePage from "./pages/HomePage";
import ViewPostPage from "./pages/ViewPostPage";

function App() {
  return (
    <PostsProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/posts/new" element={<CreatePostPage />} />
          <Route path="/posts/edit/:id" element={<EditPostPage />} />
          <Route path="/posts/:id" element={<ViewPostPage />} />
        </Routes>
      </Router>
    </PostsProvider>
  );
}

export default App;
