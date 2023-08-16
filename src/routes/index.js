// Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Feedback from '~/pages/Feedback';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/feedback', component: Feedback },
    { path: '/:nickname', component: Profile }, // trong cái path thì thay vì viết '/@:nickname' thì bỏ cái '@' đi... Vì từ react-router-dom 6.6.0 pattern chứa @ sẽ không còn dùng được nữa.
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
