import { Form } from "react-router-dom";
import "../Styles/DesktopView.css";

const DesktopView = () => {
  return (
    <main className="desktopMain">
      <figure className="logo-div">
        <img src="../Images/LOGO.png" alt="logo" />
      </figure>

      <section className="desktopSection">
        {/* Section Div */}
        <div>
          <div className="vector-btn-div">
            <h1>
              Explore our meals and get your favorite dishes brought to your
              doorstep fresh and hot.
            </h1>

            <Form action="/loginPage">
              <button className="vector-btn">
                Let's get started <img src="../Images/Vector.png " alt="" />
              </button>
            </Form>
          </div>
          <div className="we-provide">
            <p className="desktopP">We provide:</p>
            {/* Image Div */}
            <div className="img-div">
              <figure>
                <img src="../Images/FAST DELIVERY.png " alt="Fast delivery" />
              </figure>
              <figure>
                <img
                  src="../Images/DINE IN OPTIONS.png "
                  alt="Dine in options"
                />
              </figure>
              <figure>
                <img src="../Images/EASY PAYMENT.png " alt="Easy Payment" />
              </figure>
            </div>
          </div>
        </div>
        <figure className="img-fig">
          <img src="../Images/IMAGE FRAME.png " alt="" />
        </figure>
      </section>
    </main>
  );
};

export default DesktopView;
