// Layouts
import { HeaderOnly } from '~/layouts';

// Configured Routes
// import routesConfig from '~/config/routes';
import config from '~/config'; // Thay vi import nhu o tren, ta nhet thang routes vaof trong 1 file ten config.js roi export no ra. Vi sau nay co the se co nhieu config va routes khac nhau... Nen la nhet het vao trong thang config.js cho no de lay!

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Feedback from '~/pages/Feedback';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.feedback, component: Feedback },
    { path: config.routes.profile, component: Profile }, // trong cái path thì thay vì viết '/@:nickname' thì bỏ cái '@' đi... Vì từ react-router-dom 6.6.0 pattern chứa @ sẽ không còn dùng được nữa.
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
