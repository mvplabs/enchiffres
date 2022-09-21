import Header from './components/Header';
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <div className="py-10">
          <Outlet />
        </div>
      </div>
    </>
  )
}
