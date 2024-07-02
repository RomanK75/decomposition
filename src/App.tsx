import './App.css'
import Footer from './components/Footer/Footer'
import NewsMain from './components/NewsMain/NewsMain'
import SearchBar from './components/SearchBar/SearchBar'

// data import
import {newsList,ads} from './data/data'


function App() {

  return (
    <div>
      {/* Компонент для отображения новостей */}
      <NewsMain data={newsList}/>
      <SearchBar ads={ads}></SearchBar>
      <Footer></Footer>
    </div>
  )
}

export default App
