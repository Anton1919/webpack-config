import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {About} from "./pages/about";
import {Shop} from "./pages/shop";

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение');
}

const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/about',
                element: (
                    <Suspense fallback={'Loading...'}>
                        <About/>
                    </Suspense>
                )
            },
            {
                path: '/shop',
                element: (
                    <Suspense fallback={'Loading...'}>
                        <Shop/>
                    </Suspense>
                )
            }
        ]
    }
])

root.render(<RouterProvider router={router}/>)
