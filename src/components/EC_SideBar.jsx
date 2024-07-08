// eslint-disable-next-line react/prop-types
    function Sidebar({ isOpen, toggleSidebar, selectClass }) {
        return (
          <div className={`transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 fixed left-0 top-0 h-full bg-gray-800 text-white w-64`}>
            <button onClick={toggleSidebar} className="m-4 p-2 bg-red-500">Close</button>
            <ul>
              <li onClick={() => selectClass('Class 1')} className="p-4 cursor-pointer hover:bg-gray-700">Class 1</li>
              <li onClick={() => selectClass('Class 2')} className="p-4 cursor-pointer hover:bg-gray-700">Class 2</li>
              <li onClick={() => selectClass('Class 3')} className="p-4 cursor-pointer hover:bg-gray-700">Class 3</li>
            </ul>
          </div>
        );
      }
      
      export default Sidebar;
      