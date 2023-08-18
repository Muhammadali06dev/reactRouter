import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Faq from './pages/Faq'
import Form from './pages/Form'
import PageNotFound from './pages/PageNotFound'
import Articles from './pages/Articles/Articles'
import ArticleDetail from './pages/Articles/ArticleDetail'


import ContactLayout from './layout/ContactLayout'
import RootLayout from './layout/RootLayout'
import ArticlesLayout from './layout/ArticlesLayout'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='articles' element={<ArticlesLayout />} >
          <Route index element={<Articles />} />
          <Route path=":id" element={<ArticleDetail />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactLayout />} >
          <Route path='faq' element={<Faq />}></Route>
          <Route path='form' element={<Form />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
