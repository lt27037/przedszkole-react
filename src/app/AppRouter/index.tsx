import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../../style/reset.scss';

import Landing from '../../pages/Landing/containers';


const AppRouter = () => {
	return (
		<Switch>
			<Route exact path={'/'} component={Landing}/>
		</Switch>
	);
};

export default AppRouter;
