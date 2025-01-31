import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import ConsentForm from "../pages/ConsentForm";
import ConfigPage from "../pages/ConfigPage";
import ProfileCard from "../pages/ProfileCard";
import UpdateProfile from "../pages/UpdateProfile";
import LopdpPermissions from "../pages/LopdpPermissions";
import { AuthProvider } from "../context/AuthContext";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path="/home" element={<ConsentForm />} />
        <Route path='/' element={<LoginPage />} />
        {/* <Route path='/home' element={<HomePage />} /> */}
        
        

        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/config" element={<ConfigPage />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/lopdp-permissions" element={<LopdpPermissions />} />
        
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;