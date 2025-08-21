import "./NotFound.css";
import { Link } from "react-router-dom";
import Footer from "../footer";
import { HOME } from "../../routes/paths.routes";











type IProps = {
  error: string;
};

export default function NotFound({ error }: IProps) {
  return (
    <>
      <section className="page_404 mt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="four_zero_four_bg" style={{}}>
                <h1 className="text-center">404</h1>
              </div>

              <div className="content_box_404">
                <h3 className="h2">Looks like you're lost</h3>

                <p className="errorMsg">
                  {error ? (
                    error + " Please check the URL"
                  ) : (
                    <p>
                      The page you are looking for is not available! Please
                      check the URL
                    </p>
                  )}{" "}
                </p>

                <Link to={HOME} className="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
