import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/layout/Layout.jsx';
import JoinPage from '../pages/Join/JoinPage.jsx';
import SetUserData from '../pages/Join/SetUserData.jsx';
import LoginMainPage from '../pages/Login/LoginMainPage.jsx';
import LoginPage from '../pages/Login/LoginPage.jsx';
import PostDetail from '../pages/PostDetail.jsx';
import Posts from '../pages/Posts.jsx';
import SupabaseExample from '../pages/SupabaseExample.jsx';
import { AuthDefaultLayout } from '../styles/StyleComponents.jsx';
import Follow from '../pages/follow/Follow.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthDefaultLayout />}>
          <Route path="/login" element={<LoginMainPage />} />
          <Route path="/login/email" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/join/info" element={<SetUserData />} />
          <Route />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route path="/supabase" element={<SupabaseExample />} />
          <Route path=":userId/posts" element={<Posts />} />
          <Route path=":userId/posts/:postId" element={<PostDetail />} />
          <Route path=":userId/following" element={<Follow />} />
          {/*   레이아웃이 필요한 페이지는 supabase와 같이 이 안에 Route 를 넣어주세요 로그인 관련 Route는 밖에 빼주세요.*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
