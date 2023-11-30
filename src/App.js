import './App.css';
import { Header } from './component/Header';
import { Article } from './component/Article';
import { Footer } from './component/Footer';
import { Sidebar } from './component/Sidebar';
import articlesData from './articles.json';

// functional based component : JSX
function App() {
  console.log('App.js');
  return (
    <div className="container">
      <aside className="sidebar">
        <Sidebar/>
      </aside>
     
      <div>
        <Header/>
      </div>
     
      <main className="main-content">
        <section className="articles">
          {articlesData.map((article, index) => (
            <Article key={index} title={article.title} url={article.url}  content={article.content} />
          ))}
        </section> 
      </main>

      <Footer className="footer"/>

    </div>
    
  );
}

export default App;


// import './App.css';
// import { Head } from './component/Head';
// // functional based component : JSX
// function App() {
// // LOGIC for this component 

// const myStyle = {
//   backgroundColor: 'red',
//   color: 'white',
//   fontSize: '40px',
//   padding: '20px',
//   margin: '20px'
// }
//   return (
//    <div style={myStyle}>
//     <Head />


   
//    </div>
//   );
// }

// export default App;

