import Root from '@/components/layouts/Root';
import Coins from '@/routes/Coins';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global.module.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ErrorBoundary from '@/routes/ErrorBoundary';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Coins />,
            },
        ],
    },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>
);
