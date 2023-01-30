import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {routes} from "./routes/routes";
import {HomePage} from "./pages/HomePage/HomePage";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";
import {CommentsPage} from "./pages/Comments/CommentsPage";
import {PostByComment} from "./pages/CommentDetailsPage/PostByComment";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.index} element={<MainLayout/>}>
                <Route path={routes.index} index element={<HomePage/>}/>
            <Route path={routes.todos}  element={<TodosPage/>}/>
            <Route path={routes.albums}  element={<AlbumsPage/>}/>
            <Route path={routes.comments}  element={<CommentsPage/>}/>
              <Route path={routes.postById} index element={<PostByComment/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export {App};
