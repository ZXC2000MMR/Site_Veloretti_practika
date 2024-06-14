import Shapka from './components/Shapka';
import './App.css';
import Cite1page from './components/cite1page.jsx';
import "../src/components/css/html.css"
import Cite2page from "./components/cite2page.jsx"
import Cite3page from './components/cite3page.jsx';
import Cite4page from './components/cite4page.jsx';
import Cite5page from './components/cite5page.jsx';
import Cite6page from './components/cite6page.jsx';
import Cite7page from './components/cite7page.jsx';
import Cite8page from './components/cite8page.jsx';
import Podval from './components/podval.jsx';
import Accordion from './components/Accordion.jsx';
import AccordionContainer from './components/AccordionContainer.jsx';
import ProductList from './components/ProductList.jsx';

function App() {
  return (
    <div className="App">
        <Shapka/>
        <Cite1page/>
        <Cite2page/>
        <Cite3page/>
        <Cite4page/>
        <Cite5page/>
        <ProductList/>
        {/* <FaqComponent/> */}
        <AccordionContainer/>
        <Accordion/>
        <Cite8page/>
        <Podval/>
    </div>
  );
}

export default App;
