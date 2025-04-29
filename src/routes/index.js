// Layout
import { HeaderOnly } from '~/components/Layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/following', Component: Following },
    { path: '/profile', Component: Profile },
    { path: '/upload', Component: Upload, layout: HeaderOnly },
    { path: '/search', Component: Search, layout: null },
];

// đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
