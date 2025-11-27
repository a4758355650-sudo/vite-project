import { useState } from 'react'

import './App.css'
import Layout from './components/Layout'

function App() {
  
  const signlist = [
    '%',"CE","C","⌫",
    '1/x',"x²","√x"," ÷",
    '7',"8","9","×",
    '4',"5","6","-",
    '1',"2","3","+",
    '±',"0",".","=",
  ];
 
 
  const [count,setCount] = useState(0)
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-6 bg-gray-100 p-4 rounded-x1 shadow-2x1 max-w-sm ma-auto">
        {signList.map((sing, index) => (
          
         return( 
          <div key={index} className={baseClasses}>
            {sing}
            </div>       
         )
      )
        )
        }

      </div>
    </Layout>
  )
}

export default App
