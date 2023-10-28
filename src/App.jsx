import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import PricingBar from './PricingBar';
import Prices from './Prices';
import Footer from './Footer';
import Features from './Features';
import Support from './Support';
import Pricing from './Pricing';
import Counter from './Counter';
import List from './List';
import Paragraph from './Paragraph';
import CheckBox from './CheckBox';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<FeaturesWithComp />} />
        <Route path="/support" element={<SupportWithComp />} />
        <Route path="/pricing" element={<PricingWithComp />} />
        <Route path="/counter" element={<CounterWithExtras />} />
        <Route path="/listH.W" element={<ListWithExtras />} />
        <Route path="/paragraphH.W" element={<ParagraphWithExtras />} />
        <Route path="/checkBoxH.W" element={<CheckBoxWithExtra />} />
      </Routes>
    </Router>
  );
}

function SupportWithComp() {
  return (
    <>
      <Support />
      <PricingBar />
      <Prices />
      <Footer />
    </>
  );
}

function FeaturesWithComp() {
  return (
    <>
      <Features />
      <PricingBar />
      <Prices />
      <Footer />
    </>
  );
}

function PricingWithComp() {
  return (
    <>
      <Pricing />
      <PricingBar />
      <Prices />
      <Footer />
    </>
  );
}

function CounterWithExtras() {
  return (
    <Counter />
  );
}

function ListWithExtras() {
  return (
    <List />
  );
}

function ParagraphWithExtras() {
  return (
    <Paragraph />
  );
}

function CheckBoxWithExtra() {
  return (
    <CheckBox />
  );
}

export default App;
