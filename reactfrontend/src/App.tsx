import { Home } from "./pages/www/home/Home";
import { Articles, Article } from "./pages/www/articles/Article";
import { About } from "./pages/www/about/About";
import { MissingPage } from "./pages/www/404/MissingPage";
import { MetaHome } from "./pages/meta/home/MetaHome";
import { MetaMissingPage } from "./pages/meta/404/MetaMissingPage"
import { MetaArticles } from "./pages/meta/articles/MetaArticles";
import { MetaArticlesCreate } from "./pages/meta/articles/MetaArticlesCreate";
import { MetaLogin } from "./pages/meta/login/MetaLogin";


import {
    Route,
    Routes
	} from "react-router-dom";
import { MetaArticlesEdit } from "./pages/meta/articles/MetaArticlesEdit";
import { HomeTest } from "./pages/www/test/HomeTest";

function App() {

	/*
	React.useEffect(() => {
		fetchCSRFToken()
			.then(csrfToken => {
				Cookies.set("csrftoken", csrfToken, { 
					sameSite: 'Lax',
					secure: true,
					path: "/" });
			})
			.catch(error => {
				console.log(error);
			});
	}, []);
	*/


	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/test" element={<HomeTest />}/>
			<Route path="/articles" element={<Articles />} />
			<Route path="/article/:id" element={<Article />} />
			<Route path="/about" element={<About />} />
			<Route path="/meta" element={<MetaHome />} />
			<Route path="/meta/login" element={<MetaLogin />} />
			<Route path="/meta/articles" element={<MetaArticles />} />
			<Route path="/meta/articles/create" element={<MetaArticlesCreate />} />
			<Route path="/meta/articles/edit/:id" element={<MetaArticlesEdit />} />
			<Route path="/meta/*" element={<MetaMissingPage />} />
			<Route path="/*" element={<MissingPage />} />
		</Routes>
	);
}

export default App;
