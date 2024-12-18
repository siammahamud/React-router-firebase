import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Loader from "../../components/Loader";


const Layout = () => {
 
  const navigation = useNavigation();

  return (
    <div>
     
      <NavBar />
      <div className="min-h-[80vh]">
        
        {navigation.state === "loading"?<Loader/>:<Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
