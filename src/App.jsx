import "./App.css";

function App() {
  return (
    <div className="bg-green-100 min-h-screen relative flex items-center justify-center">
      <div className="bg-white  max-w-md w-full mx-auto absolute  p-4 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-gray-600 mb-6">Contact Us</h2>
        <form action="">
          <div className="grid grid-cols-1 items-center  md:grid-cols-2 gap-3">
              <div>
                <label className="text-gray-500 mb-2 font-semibold text-sm block " htmlFor="name">First Name *</label>
                <input className="w-full px-3 py-2 border border-gray-400  rounded-lg bg-white focus:outline-none " required type="text" />
              </div>
              <div>
                <label className="text-gray-500 mb-2 font-semibold text-sm block " htmlFor="name">Last Name *</label>
                <input className="w-full px-3 py-2 border  border-gray-400 rounded-lg bg-white focus:outline-none " required type="text" />
          </div>
          </div>
          <div>
            <label className="text-gray-500 mb-2 mt-3 font-semibold text-sm block " htmlFor="name">Email *</label>
            <input className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none " required type="email" />
          </div>

          <label className="text-gray-500 mb-2 font-semibold text-sm block  mt-5" htmlFor="name">Query Type *</label>

          <div className="grid grid-cols-1 items-center mt-5 md:grid-cols-2 gap-2">
              
              <div >
                <div className="w-full px-3 border border-gray-400 text-gray-500 font-semibold text-sm rounded-lg bg-white focus:outline-none ">
                  <input  className="text-gray-500 font-semibold text-sm block" required type="radio" />General Enquiry</div>
              </div>

              <div >
                <div className="w-full px-3 border border-gray-400 text-gray-500 font-semibold text-sm rounded-lg bg-white focus:outline-none ">
                  <input className="text-gray-500 font-semibold text-sm block" required type="radio" />Support Request</div>
              </div>

          </div>


          <div>
            <label className="text-gray-500 mb-2 mt-3 font-semibold text-sm block " htmlFor="Message">Message *</label>
            <textarea rows='4' className="text-gray-500 my-3 font-medium text-sm block focus:outline-none w-full
             px-3 py-2 border border-gray-400 rounded-lg bg-white focus:outline-none shadow-lg" htmlFor="name"></textarea>
            
          </div>

          <div className="  mb-4 ">
            <input  type="checkbox" />
            <label className="px-5 font-medium text-gray-500" htmlFor="" >I consent to being contacted by the team *</label>
          </div>

          <div>
            <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2  border border-gray-400 rounded-lg hover:bg-white hover:bg-blue-100 hover:text-gray-800 hover:outline-2">Submit</button>
          </div>
        </form>
      </div>
    </div> 
  );
}

export default App;
