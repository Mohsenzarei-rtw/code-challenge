import React, { Suspense } from 'react';
import Layout from './components/layout';
import Loading from './components/loading';
import { useRoutes } from 'react-router-dom';
import Routes from './routes/routes';

function App() {
	const renderRoutes = useRoutes(Routes);

	return (
		<Layout>
			<Suspense fallback={<Loading />}>{renderRoutes}</Suspense>
		</Layout>
	);
}

export default App;
