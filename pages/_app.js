import { Provider } from "react-redux";
import { useStore } from "../redux/store";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body {
            height: 100%;
            width: 100%;
            margin: 0;
          }
          *,
          *:after,
          *:before {
            box-sizing: border-box;
          }
          body {
            font-family: sans-serif;
            font-size: 1rem;
            margin: 0;
          }
        `}
      </style>
    </Provider>
  );
}
