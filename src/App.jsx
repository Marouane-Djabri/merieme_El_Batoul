// import HomePage from './pages/HomePage.jsx'
// import Eleve_conver from './pages/Eleve_conver.jsx'
// export default function App() {
//   return (
//      // <HomePage/>
//      <Eleve_conver/>
//   )
// }


// import React from 'react';
// import Component from './components/Component';
// import './index.css';

// function App() {
//   return (
//     <Component />
//   );
// }

// export default App;
App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  const [students] = useState(['مروان جلابي', 'مروان جلابي', 'مروان جلابي', 'مروان جلابي', 'مروان جلابي']);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Main students={students} />
      </div>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
    </div>
  );
}
// App.jsx
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import MainChat from './components/MainChat';

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen">
//       <div className={`flex-1 bg-gray-100 ${isSidebarOpen ? 'mr-0' : 'mr-0'}`}>
//         <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//         <MainChat />
//       </div>
//       <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
//     </div>
//   );
// }
// // App.jsx
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import Sidebar from './components/Sidebar';
// // import Header from './components/Header';
// // import Main from './components/Main';
// // import MainChat from './components/MainChat';

// // export default function App() {
// //   return (
// //     <Router>
// //       <div className="flex min-h-screen">
// //         <Sidebar />
// //         <div className="flex-1 bg-gray-100">
// //           <Header />
// //           <Switch>
// //             <Route path="/" exact component={Main} />
// //             <Route path="/chat" component={MainChat} />
// //           </Switch>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }
