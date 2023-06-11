import 'bootstrap/dist/css/bootstrap.css';
import "./style/styles.css";
import '@fontsource/roboto/300.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import {useContext} from 'react';
import { AuthContext } from './services/AuthContext';
// import PrivateRoutes from './routes/private.routes';
// import PublicRoutes from './routes/public.routes';
import AllRoutes from './routes/all.routes';




export default function App() {
  const { auth } = useContext(AuthContext)
  console.log("auth", auth)
  // return auth ? <PrivateRoutes /> : <PublicRoutes />
  return auth ? <AllRoutes /> : <AllRoutes />
}
