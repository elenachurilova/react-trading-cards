"use strict";

function Homepage() {
  return (
    <div>
      <h3>It's a pleasure to see you here!</h3>
      <p><a href="/cards">Trading cards are here!</a></p>
      <img id="front-image" src="/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
