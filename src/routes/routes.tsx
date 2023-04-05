import React from 'react';
import { Characters, Episodes, Locations, Main, NotFound } from '../pages';
import type { RouteObject } from 'react-router-dom';

const Routes: RouteObject[] = [
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/characters',
		element: <Characters />,
	},
	{
		path: '/locations',
		element: <Locations />,
	},
	{
		path: '/episodes',
		element: <Episodes />,
	},
];
export default Routes;
