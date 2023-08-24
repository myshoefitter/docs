import "../styles.scss";
import Script from "next/script";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script defer src="https://api.pirsch.io/pirsch-extended.js" id="pirschextendedjs" data-code="7pFbidsnF9q54fWWS9MoOitwQvddJxwm" />
      <Component {...pageProps} />
    </>
  );
}
