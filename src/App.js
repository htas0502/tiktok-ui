import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
// import Home from '~/pages/Home';
// import Following from '~/pages/Following';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout; // cái Fragment này là Component của React. Trong trường hợp như ở biến Layout thì khi nó là null, nó sẽ trả về Fragment - Cái Fragment này sẽ không render ra như thẻ tag trong HTML đâu! Nó chỉ là vậy chứa thôi vầ sẽ không xuất hiện trên giao diện người dùng.

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component; // Đặt biến Page để có thể nhét vào trong Prop element.
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        ); // Trong trường hợp này không thể để nguyên cái route.component vào trong cái Prop element được - Vì element sẽ trả về 1 cái Component. Vì vậy phải tạo 1 biến để lưu cái route.component này vào rồi mới nhét biến đó vào trong element. Ở đây ta đặt biến Page.
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
