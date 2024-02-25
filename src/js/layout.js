import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/favoritos";
import { Characters } from "./views/characters";

import injectContext from "./store/appContext";
import { Character } from "./views/character";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planet } from "./views/planet";
import { Planets } from "./views/planets";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Demo />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planet/:id" element={<Planet />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/character/:id" element={<Character />} />


            {/* <Route path="/single/:theid" element={<Single />} /> */}
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
