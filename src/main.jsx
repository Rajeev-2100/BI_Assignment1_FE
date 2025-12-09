import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ListingPage from './components/ListingPage.jsx'
import DetailPage from './components/DetailPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/meetup',
    element: <ListingPage/>
  },
  {
    path: '/meetup/Id/:meetupId',
    element: <DetailPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
