import { Provider } from "react-redux"; // Importing Redux Provider
import { store } from "../app/store"; // Importing Redux store
import "../styles/globals.css"; // Importing global styles

//import { Provider as AuthProvider } from "next-auth/react"; // Importing NextAuth.js Provider

const MyApp = ({ Component, pageProps }) => {
  return (

      <Provider store={store}>
      <Component {...pageProps} /> {/* Rendering the component */}
      </Provider>
    //</AuthProvider>
  );
};

export default MyApp;
