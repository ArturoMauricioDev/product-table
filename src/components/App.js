import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable'
import '../styles/App.css';

function App() {
  return (
    <section className='filterable-product-table'>
      <SearchBar />
      <ProductTable />
    </section>

  );
}

export default App;
