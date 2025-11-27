import { useState } from 'react'

import './App.css'
import Layout from './components/Layout'

function App() {
  const [] = useState(0)

  return (
    <Layout>
      


      <div className="grid grid-cols-4 gap-6">
        {/* 這裡面的子元素會自動變成 3 欄排列 */}
        
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>

        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </Layout>
  )
}

export default App
