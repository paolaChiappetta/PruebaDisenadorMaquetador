import './App.css';
import NavBar from './components/NavBar/NavBar';
import CoverImage from './components/CoverImage/CoverImage';
import NewsContainer from './components/NewsContainer/NewsContainer';
import CommentsContainer from './components/CommentContainer/CommentsContainer';
import FaqContainer from './components/FaqContainer/FaqContainer';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Separator from './components/Separator/Separator';

function App() {
  return (
    <>
      <NavBar/>
      <CoverImage/>
      <NewsContainer/>
      <Separator/>
      <CommentsContainer/>
      <Separator/>
      <FaqContainer/>
      <Separator/>
      <ContactForm/>
      <Footer/>

    </>
  );
}

export default App;
