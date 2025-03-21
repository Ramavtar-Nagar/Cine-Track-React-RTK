import { useDispatch, useSelector } from "react-redux";
import { addTab, removeTab, setActiveTab } from "../features/cinetrack/cineTrackSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const { tabs, activeTabIndex } = useSelector((state) => state.cinetrack);

  return (
    <div className="flex items-center gap-2 border-b p-2 bg-gray-900 text-white">
      {tabs.map((tab, index) => {
        const title = tab.movie ? tab.movie.Title : "New Tab";
        const trimmedTitle = title.length > 12 ? title.substring(0, 10) + "..." : title;

        return (
          <div 
            key={index} 
            className={`flex items-center justify-between p-2 px-4 w-40 rounded-lg cursor-pointer transition-all 
            text-white font-medium ${index === activeTabIndex ? "bg-blue-600 scale-105 shadow-md" : "bg-gray-700 hover:bg-gray-600"}`}
            onClick={() => dispatch(setActiveTab(index))}
          >
            <span className="truncate">{trimmedTitle}</span>
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                dispatch(removeTab(index)); 
              }} 
              className="ml-2 text-gray-300 hover:text-red-500 transition-colors"
            >
              ✕
            </button>
          </div>
        );
      })}


      <button 
        className="p-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-all"
        onClick={() => dispatch(addTab())}
      >
        ➕ New Tab
      </button>
    </div>
  );
};

export default Tabs;