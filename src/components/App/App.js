
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import images from '~/assets/images';
import './App.css';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';

function App() {
  return (
    <div className="App">
      <img src={images.logoReact} className="App-logo" alt="Logo-React" />

      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index} 
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
