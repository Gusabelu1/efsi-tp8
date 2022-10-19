import './App.css';
import CustomNavbar from './components/CustomNavbar';
import CustomCarousel from './components/CustomCarousel';

export const productsContext = React.createContext();

function App() {


  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
    .then(res => res.json())
    .then(res => {
        setProducts(res.products)
    })
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <header>
        <CustomNavbar />
      </header>
      <section>
        <CustomCarousel />
      </section>
    </div>
  );
}

export default App;
