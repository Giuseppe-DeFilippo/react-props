


//importiamo i componenti
import CardComponent from "./components/CardComponent.jsx";
import posts from "./data/post.js";
//funzione
function App() {
  //parte logica
  function restituire() {
    let liDaRestituire = null;
    posts.forEach(element => {
      liDaRestituire += (<li><CardComponent /></li>)
    });
    return liDaRestituire;
  }
  //parte html
  return (
    <>
      <header><h1 className="text-center">il mio blog</h1></header>
      <main>
        {posts.filter((pub) => pub.published).map(element =>
          (<CardComponent title={element.title} image={element.image} content={element.content} tags={element.tags} />)
        )}
      </main>
      <footer className=" p-3 text-center custom-footer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure aut dicta dolores exercitationem mollitia corporis odio nemo itaque sequi numquam, consectetur, aliquid natus eum commodi magnam quasi necessitatibus officia.</p>
      </footer >
    </>
  )



}

export default App;