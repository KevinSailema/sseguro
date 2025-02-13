import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
//import HomePage from "../pages/HomePage";
import ConsentForm from "../pages/ConsentForm";
import ConfigPage from "../pages/ConfigPage";
import ProfileCard from "../pages/ProfileCard";
import UpdateProfile from "../pages/UpdateProfile";
import LopdpPermissions from "../pages/LopdpPermissions";
import NotesGrid from "../pages/NotesGrid";
import NoteEditor from "../pages/NoteEditor";
import ConsentContracts from "../pages/ConsentContracts";
import NoteViewerAdmin from "../pages/NoteViewerAdmin";
import NoteGridViewerAdmin from "../pages/NoteGridViewerAdmin";
import UserNotesList from "../pages/UserNotesList";
import PrivateRoute from "../components/auth/privateRoute";
import { AuthProvider } from "../context/AuthContext";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        {/* Rutas para Sesión y configuraciones*/}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path="/config" element={<ConfigPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path="/consent-form-register" element={<ConsentForm />} />
        {/* <Route path='/home' element={<HomePage />} /> */}
        
        <Route element={<PrivateRoute />}>
            {/* Rutas para perfil */}
            <Route path="/profile" element={<ProfileCard />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            
            {/* Rutas para notas */}
            <Route path="/notes" element={<NotesGrid />} />
            <Route path="/notes/new" element={<NoteEditor />} />
            <Route path="/notes/edit/:id" element={<NoteEditor />} />
            
            {/* Rutas para consentimientos y LOPD */}
            <Route path="/lopd-permissions" element={<LopdpPermissions />} />
            
            <Route path="/consents" element={<ConsentContracts />} />
            
            {/* Rutas para páginas de admin */}
            <Route path="/notes/view/:id" element={<NoteViewerAdmin />} />
            <Route path="/shared-notes" element={<NoteGridViewerAdmin />} />
            <Route path="/users-notes" element={<UserNotesList />} />
          </Route>
        
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;