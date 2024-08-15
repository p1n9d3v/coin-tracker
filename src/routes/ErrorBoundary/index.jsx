import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
    const error = useRouteError();

    return <div>Error</div>;
}

export default ErrorBoundary;
