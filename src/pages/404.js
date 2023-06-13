import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 34,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center align-center justify-center text-fold">
      <main style={pageStyles}>
        <h1 className="text-5xl" style={headingStyles}>
          Page not found
        </h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
