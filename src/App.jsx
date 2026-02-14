// import { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import Toastify from "toastify-js";
// import "toastify-js/src/toastify.css";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import HTML from "./pages/HTML";
// import CSS from "./pages/CSS";
// import Links from "./pages/Links";
// import Shorts from "./pages/Shorts";

// import "../src/App.css";

// const App = () => {
//   const [isLogged, setIsLogged] = useState(false);
//   const navigate = useNavigate();

//   function showToast(message, color = "black", duration = 2000) {
//     Toastify({
//       text: message,
//       duration: duration,
//       close: true,
//       gravity: "top",
//       position: "center",
//       stopOnFocus: true,
//       style: {
//         background: `linear-gradient(to right, ${color}, black)`,
//         color: "red",
//         border: "1px solid red",
//         boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)"
//       }
//     }).showToast();
//   }

//   function toastMessage(message, color = "black", duration = 2000) {
//     Toastify({
//       text: message,
//       duration: duration,
//       close: true,
//       gravity: "top",
//       position: "center",
//       stopOnFocus: true,
//       style: {
//         background: `linear-gradient(to right, ${color}, black)`,
//         color: "green",
//         border: "1px solid green",
//         boxShadow: "0 0 12px rgba(0, 255, 0, 0.6)"
//       }
//     }).showToast();
//   }

//   useEffect(() => {
//     Toastify({
//       text: "Dasturimizga xush kelibsiz !",
//       duration: 3500,
//       gravity: "top",
//       position: "center",
//       close: true,
//       style: {
//         background: "linear-gradient(to right, black, black)",
//         color: "red",
//         border: "1px solid red",
//         boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)"
//       }
//     }).showToast();

//     Toastify({
//       text: "Assalomu alaykum",
//       duration: 3500,
//       gravity: "top",
//       position: "center",
//       close: true,
//       style: {
//         background: "linear-gradient(to right, black, black)",
//         color: "green",
//         border: "1px solid green",
//         boxShadow: "0 0 12px rgba(0, 255, 0, 0.6)"
//       }
//     }).showToast();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const username = form.username.value.trim();
//     const password = form.password.value.trim();
//     const email = form.email.value.trim();

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=+{}\[\]:;"'<>.,?/~]).{8,}$/;
//     // const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}\[\]:;"'<>.,?/~]).{8,}$/;
//     const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;

//     if (username === "") {
//       return showToast("Bo'sh maydonni to'ldiring !");
//     }

//     if (!usernameRegex.test(username)) {
//       return showToast(
//         "Username 5–15 harf va raqamdan iborat bo'lishi kerak!"
//       );
//     }

//     if (!passwordRegex.test(password)) {
//       return showToast("Invalid password");
//     }

//     if (!emailRegex.test(email)) {
//       return showToast("Invalid email address");
//     }

//     toastMessage("Tizimga muvaffaqiyatli kirildi!", "black", 2500);

//     setTimeout(() => {
//       setIsLogged(true);
//       navigate("/home");
//     }, 3000);
//   };

//   return (
//     <>
//       {!isLogged ? (
//         <div className="index__body">
//           <form className="index__form" onSubmit={handleSubmit}>
//             <input className="index__input" name="username" placeholder="Username" />
//             <input className="index__input" name="password" type="password" placeholder="Password" />
//             <input className="index__input" name="email" type="email" placeholder="Email" />
//             <button className="index__btn" type="submit"> Login </button>
//           </form>
//         </div>) : (
//         <>
//           <Navbar />

//           <Routes>
//             <Route path="/home" element={<Home />} />
//             <Route path="/html" element={<HTML />} />
//             <Route path="/css" element={<CSS />} />
//             <Route path="/links" element={<Links />} />
//             <Route path="/shorts" element={<Shorts />} />
//             <Route path='*' element={<h1 className='error'> Page is not founded </h1>} />
//           </Routes>
//         </>
//       )}
//     </>
//   );
// };
// export default App;















import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import Links from "./pages/Links";
import Shorts from "./pages/Shorts";
import "../src/App.css";

const PrivateRoute = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to="/" />; // Login qilmagan foydalanuvchi "/" ga yo'naltiriladi
  }
  return children;
};

// Login formi alohida component sifatida
const LoginForm = ({ handleSubmit }) => {
  useEffect(() => {
    // Welcome Toastlar faqat login sahifasida ishlaydi
    Toastify({
      text: "Dasturimizga xush kelibsiz !",
      duration: 3500,
      gravity: "top",
      position: "center",
      close: true,
      style: { background: "black", color: "red" },
    }).showToast();

    Toastify({
      text: "Assalomu alaykum",
      duration: 3500,
      gravity: "top",
      position: "center",
      close: true,
      style: { background: "black", color: "green" },
    }).showToast();
  }, []);

  return (
    <div className="index__body">
      <form className="index__form" onSubmit={handleSubmit}>
        <input className="index__input" name="username" placeholder="Username" />
        <input className="index__input" name="password" type="password" placeholder="Password" />
        <input className="index__input" name="email" type="email" placeholder="Email" />
        <button className="index__btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  function showToast(message, color = "black", duration = 2000) {
    Toastify({
      text: message,
      duration: duration,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: `linear-gradient(to right, ${color}, black)`,
        color: "red",
        border: "1px solid red",
        boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)",
      },
    }).showToast();
  }

  function toastMessage(message, color = "black", duration = 2000) {
    Toastify({
      text: message,
      duration: duration,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: `linear-gradient(to right, ${color}, black)`,
        color: "green",
        border: "1px solid green",
        boxShadow: "0 0 12px rgba(0, 255, 0, 0.6)",
      },
    }).showToast();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const email = form.email.value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=+{}\[\]:;"'<>.,?/~]).{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;

    if (username === "") {
      return showToast("Bo'sh maydonni to'ldiring !");
    }

    if (!usernameRegex.test(username)) {
      return showToast(
        "Username 5–15 harf va raqamdan iborat bo'lishi kerak!"
      );
    }

    if (!passwordRegex.test(password)) {
      return showToast("Invalid password");
    }

    if (!emailRegex.test(email)) {
      return showToast("Invalid email address");
    }

    toastMessage("Tizimga muvaffaqiyatli kirildi!", "black", 2500);

    setTimeout(() => {
      setIsLogged(true);
      navigate("/home");
    }, 2500);
  };

  return (
    <Routes>
      <Route path="/" element={!isLogged ? <LoginForm handleSubmit={handleSubmit} /> : <Navigate to="/home" />} />
      <Route path="/home" element={ <PrivateRoute isLogged={isLogged}> <Navbar /> <Home /> </PrivateRoute> } />
      <Route path="/html" element={ <PrivateRoute isLogged={isLogged}> <Navbar /> <HTML /> </PrivateRoute> } />
      <Route path="/css" element={ <PrivateRoute isLogged={isLogged}> <Navbar /> <CSS /> </PrivateRoute> } />
      <Route path="/links" element={ <PrivateRoute isLogged={isLogged}> <Navbar /> <Links /> </PrivateRoute> } />
      <Route path="/shorts" element={ <PrivateRoute isLogged={isLogged}> <Navbar /> <Shorts /> </PrivateRoute> } />
      <Route path="*" element={<h1 className="error"> Page is not founded </h1>} />
    </Routes>
  );
};
export default App;