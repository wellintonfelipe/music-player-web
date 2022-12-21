import "../public/css/style.css";

let url =
  'https://i.ytimg.com/vi/Ly6ZhQVnVow/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPuFqDECq2OOoRA9OfURz0s_aA7Q"';

export function Main() {
  return `
    <main class='main'>
      <div class='card'>
        <span class='album'>Album</span>

        <img src=${url}/>
        <h1 class='title'>Led Zeppelin - Whole Lotta Love</h1>
      </div>
    </main>
  
  `;
}
