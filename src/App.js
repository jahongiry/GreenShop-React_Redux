import './App.css';
import Navigation from './components/Navigation';
import SliderBox from './components/SliderBox';
import Categories from './components/Categories';
import Pagination from './components/Pagination';
import Card from './components/Card';
import Blog from './components/Blog';
import Footer from './components/Footer';
import FooterCopyRight from './components/FooterCopyRight';
import { useSelector } from 'react-redux';
import BlogPop from './components/BlogPop';

function App() {
  const pop = useSelector((state) => state.category.readMore);
  return (
    <div className='App'>
      <Navigation />
      {pop && <BlogPop />}
      <SliderBox />
      <Categories />
      <Pagination />
      <Card />
      <Blog />
      <Footer />
      <FooterCopyRight />
    </div>
  );
}

export default App;
