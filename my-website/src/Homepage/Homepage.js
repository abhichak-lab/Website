import "./Homepage.css";

function Homepage() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/pictures/Homepage/background_img.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <span className="title">
        <span className="title-name">Into the wild</span>
        <span className="title-person-name">Abhirukth Chakravarthy</span>
      </span>
    </div>
  );
}

export default Homepage;
