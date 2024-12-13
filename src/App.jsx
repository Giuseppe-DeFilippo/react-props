
// Partendo dall'esercizio di ieri e dall'array di posts allegato, l'obiettivo è creare dinamicamente gli articoli all'interno della pagina.
//  I dati relativi a ciascun post dovranno essere passati come props ai componenti.
// Ogni post ha una proprietà published, e gli articoli devono essere mostrati solo se questa proprietà è impostata su`true`.
// Assegnate colori diversi ai tag dei posts, ad esempio: verde per html, rosa per css,


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
        {posts.map(element =>
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