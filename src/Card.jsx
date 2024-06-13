import "./App.css";

const Card = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        width: "500px",
        boxShadow:
          "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
      }}
    >
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg"
          alt=""
          style={{
            height: "100%",
            width: "200px",
          }}
        />
      </div>

      <div>
        <h4>F15 | 16GB RAM | 512GB SSD</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          dicta tenetur impedit, magni fuga quis!
        </p>
      </div>
    </main>
  );
};

export default Card;
