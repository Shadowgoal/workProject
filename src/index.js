import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from 'routing/';
import './i18n';

ReactDOM.render(<Suspense fallback="Loading..."><AppRouter /></Suspense>, document.getElementById('root'));
