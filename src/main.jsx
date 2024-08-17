import Root from '@/components/layouts/Root';
import CoinDetailPage from '@/routes/CoinDetailPage';
import CoinsPage from '@/routes/CoinsPage';
import ErrorBoundary from '@/routes/ErrorBoundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global.module.css';
import 'react-loading-skeleton/dist/skeleton.css';
import CoinPrice from '@/components/CoinPrice';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <CoinsPage />,
            },
            {
                path: ':coinId',
                element: <CoinDetailPage />,
                children: [
                    {
                        index: true,
                        element: <CoinPrice />,
                    },
                    {
                        path: 'chart',
                        element: <div>Chart</div>,
                    },
                ],
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
