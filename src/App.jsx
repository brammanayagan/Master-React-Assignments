import Navbar from "./components/Navbar";
import AppRoute from "./routes/AppRouter";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      <Navbar />
      <div className="w-full">
        <AppRoute />
      </div>
    </div>
  );
};

export default App;
