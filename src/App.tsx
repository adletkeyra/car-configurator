import { Router, Route } from "wouter";
import './App.css'
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import Catalog from "@/pages/Catalog";
import Configure from "@/pages/Configure";
import ProductDetail from "@/pages/ProductDetail";
import Home from "@/pages/Home";

function App() {
  return (
    <>
        <AppHeader/>
        <Router>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/catalog">
                <Catalog/>
            </Route>
            <Route path="/catalog/:slug">
                {params => <ProductDetail slug={params.slug} />}
            </Route>
            <Route path="/configure/:slug">
                {params => <Configure slug={params.slug} />}
            </Route>
        </Router>
        <AppFooter/>
    </>
  )
}

export default App
