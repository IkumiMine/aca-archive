import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Archive from "./routes/archive/archive.component";
import Shop from './routes/shop/shop.component';
import MenuBar from "./routes/menu-bar/menu-bar.component";

import ScrollTriggerPractice from './routes/scrollTrigger/scrollTrigger.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MenuBar />}>
        <Route index element={<Home />} />
        <Route path='archive' element={<Archive />} />
        <Route path='shop' element={<Shop />} />
        <Route path='scrollTriggerPractice' element={<ScrollTriggerPractice />} />
      </Route>  
    </Routes>
  );
};

export default App;
