function Footer () {
  const year = new Date().getFullYear();
  
  return (
    // <div className="App">
    <div>
      <footer>
        {`Copyright © Less Waste More Taste ${year}`}
        <p>Presented with <img src="https://i.ibb.co/pw94Tqz/heart-lgtb.png" alt="heart"></img> by 
        <a href="https://github.com/jeanbu"> Jean</a>, 
        <a href="https://github.com/MarinaIvanova-1"> Marina</a>, 
        <a href="https://github.com/Sadat15"> Sadat</a>, 
        <a href="https://github.com/TomMannion"> Thomas</a>, and 
        <a href="https://github.com/oahciy"> Yichao</a> @
        <a href="https://makers.tech/">Makers</a>.</p>
        
      </footer>
    </div>
  )
}

export default Footer;
