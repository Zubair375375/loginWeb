import image0 from "./peshawar.jpg";
import image1 from "./islamabad.avif";
import image2 from "./lahore.jpg";
import image3 from "./karachi.jpg";
import image4 from "./quetta.jpg";
import "./App.css";
import { useState } from "react";
// import 'images';

function App() {
  const images = [image0, image1, image2, image3, image4];
  const [indicate, setIndicate] = useState(0);
  const cities = [
    "Peshawar, the capital of Khyber Pakhtunkhwa province in Pakistan, is one of the country's oldest cities, boasting a rich history that spans thousands of years. Situated near the Khyber Pass, a strategic trade route linking Central Asia and the Indian subcontinent, Peshawar has long been a melting pot of cultures, religions, and ethnicities. The city has witnessed the rise and fall of various empires, including the Persians, Greeks, Mauryans, Kushans, and Mughals, each leaving their indelible mark on its cultural and architectural landscape. The Old City of Peshawar is renowned for its vibrant bazaars, historic mosques, and ancient monuments. The Qissa Khwani Bazaar, also known as the Bazaar of Storytellers, is a bustling market where merchants and travelers have exchanged tales for centuries. Nearby, the Mahabat Khan Mosque, built in the 17th century during the Mughal era, stands as a testament to the city's architectural grandeur. The mosque's intricate design and serene courtyards reflect the artistic achievements of that period.",
    "Islamabad, the capital city of Pakistan, is known for its high standards of living, safety, and abundant greenery. It was built during the 1960s to replace Karachi as the capital and is home to several parks and forests, including the Margalla Hills National Park and Shakarparian. The city is well-planned and boasts wide avenues, modern architecture, and numerous green spaces. Key attractions include the Faisal Mosque, one of the largest mosques in the world, and the Pakistan Monument, which represents the four provinces and three territories of Pakistan. The city's museums, cultural centers, and vibrant markets add to its charm, making it a unique blend of tradition and modernity.",
    "Lahore, the capital of Punjab province, is a cultural and historical hub of Pakistan. Known for its vibrant arts scene, Mughal architecture, and lively festivals, Lahore is home to landmarks like the Lahore Fort, Badshahi Mosque, and Shalimar Gardens. The city's rich history is reflected in its numerous historical sites, museums, and cultural institutions. Lahore's food scene is legendary, with an array of traditional Punjabi dishes that attract food lovers from around the world. The city's bustling markets, such as Anarkali Bazaar and Liberty Market, offer a unique shopping experience. Lahore is also known for its educational institutions and lively intellectual environment.",
    "Karachi, the capital of Sindh province, is Pakistan's largest city and economic hub. It is known for its bustling port, diverse culture, and vibrant nightlife. The city's history dates back to ancient times, and it has evolved into a major commercial and industrial center. Key attractions include Clifton Beach, the Quaid-e-Azam's Mausoleum, and the National Museum of Pakistan. Karachi's cosmopolitan nature is reflected in its diverse population, with residents from all over Pakistan and beyond. The city's culinary scene is rich and varied, offering a mix of traditional Pakistani, Middle Eastern, and international cuisines. Karachi's dynamic atmosphere and numerous cultural, educational, and recreational facilities make it a lively and important metropolis.",
    "Quetta, the capital of Balochistan province, is known as the 'Fruit Garden of Pakistan' due to its numerous fruit orchards. The city is surrounded by mountains and has a rich history with notable landmarks like the Quetta Fort and Hanna Lake. Quetta's unique location at the junction of several major roads and railways makes it an important trade and communication center. The city's cultural heritage is influenced by its diverse population, including Pashtuns, Baloch, and Hazaras. Quetta's bazaars are famous for their traditional crafts, including embroidered garments and jewelry. The city's natural beauty, combined with its historical and cultural significance, makes it a fascinating place to explore.",
  ];
  const cityNames = ["Peshawar", "Islamabad", "Lahore", "Karachi", "Quetta"];
  const [status, setStatus] = useState(false);
  const myEmail = "muhammadzubair375375@gmail.com";
  const myPass = "thisismypass";
  return (
    <>
      {status ? (
        <Navbar
          status={status}
          setStatus={setStatus}
          setIndicate={setIndicate}
          indicate={indicate}
          cityNames={cityNames}
          cities={cities}
          images={images}
        />
      ) : (
        <LogInForm email={myEmail} password={myPass} setStatus={setStatus} />
      )}
    </>
  );
}
function LogInForm({ email, password, setStatus }) {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const checkHanlde = function () {
    if (mail === email && pass === password) {
      setStatus(true);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        style={{
          boxShadow: "6px 6px 6px gray",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <input
          style={{
            margin: "1rem 0",
            width: "20rem",
            height: "2rem",
            paddingLeft: "0.5rem",
            borderRadius: "0.3rem",
            border: "1px solid gray",
          }}
          type="text"
          name="username"
          placeholder="Username"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <br />
        <input
          style={{
            margin: "1rem 0",
            width: "20rem",
            height: "2rem",
            paddingLeft: "0.5rem",
            borderRadius: "0.3rem",
            border: "1px solid gray",
          }}
          type="password"
          name="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <br />
        <button
          type="submit"
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "0.3rem",
          }}
          onClick={checkHanlde}
        >
          Log In
        </button>
      </form>
    </div>
  );
}
function Navbar({
  setIndicate,
  indicate,
  status,
  setStatus,
  cities,
  cityNames,
  images,
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "blue",
          justifyContent: "space-between",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            color: "rgb(215, 215, 215)",
            padding: "1.2rem",
          }}
        >
          <li
            style={{
              margin: "0rem 1rem",
              cursor: "pointer",
              borderBottom: indicate === 0 ? "2px solid white" : "none",
              color: indicate === 0 ? "white" : "",
              fontSize: indicate === 0 ? "1.2rem" : "",
              fontWeight: indicate === 0 ? "500" : "",
              paddingBottom: "0.8rem",
            }}
            onClick={() => {
              setIndicate(0);
              console.log("peshawar");
            }}
          >
            Peshawar
          </li>
          <li
            style={{
              margin: "0rem 1rem",
              cursor: "pointer",
              borderBottom: indicate === 1 ? "2px solid white" : "none",
              paddingBottom: "0.8rem",
              color: indicate === 1 ? "white" : "",
              fontSize: indicate === 1 ? "1.2rem" : "",
              fontWeight: indicate === 1 ? "500" : "",
            }}
            onClick={() => {
              setIndicate(1);
              console.log("Islamabad");
            }}
          >
            Islamabad
          </li>
          <li
            style={{
              margin: "0rem 1rem",
              cursor: "pointer",
              borderBottom: indicate === 2 ? "2px solid white" : "none",
              paddingBottom: "0.8rem",
              color: indicate === 2 ? "white" : "",
              fontSize: indicate === 2 ? "1.2rem" : "",
              fontWeight: indicate === 2 ? "500" : "",
            }}
            onClick={() => {
              setIndicate(2);
              console.log("Lahore");
            }}
          >
            Lahore
          </li>
          <li
            style={{
              margin: "0rem 1rem",
              cursor: "pointer",
              borderBottom: indicate === 3 ? "2px solid white" : "none",
              paddingBottom: "0.8rem",
              color: indicate === 3 ? "white" : "",
              fontSize: indicate === 3 ? "1.2rem" : "",
              fontWeight: indicate === 3 ? "500" : "",
            }}
            onClick={() => {
              setIndicate(3);
              console.log("Karachi");
            }}
          >
            Karachi
          </li>
          <li
            style={{
              margin: "0rem 1rem",
              cursor: "pointer",
              borderBottom: indicate === 4 ? "2px solid white" : "none",
              paddingBottom: "0.8rem",
              color: indicate === 4 ? "white" : "",
              fontSize: indicate === 4 ? "1.2rem" : "",
              fontWeight: indicate === 4 ? "500" : "",
            }}
            onClick={() => {
              setIndicate(4);
              console.log("Quetta");
            }}
          >
            Quetta
          </li>
        </ul>
        <span
          style={{
            padding: "1.2rem",
            marginRight: "1rem",
            marginTop: "1rem",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setStatus(status === true ? false : true)}
        >
          {status === false ? "Login" : "logout"}
        </span>
      </div>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <div style={{ margin: "0rem 2rem" }}>
          <img
            src={images[indicate]}
            alt="Description of image"
            style={{ width: "30rem", height: "30rem" }}
          />
        </div>
        <div style={{ marginRight: "2rem", width: "50rem" }}>
          <h1>{cityNames[indicate]}</h1>
          <p>{status === true ? cities[indicate] : "Login to read"}</p>
        </div>
      </div>
    </>
  );
}

export default App;
