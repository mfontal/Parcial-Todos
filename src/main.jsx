import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodoApp } from './TodoApp'
import { TodoAppOriginal } from './TodoAppOriginal'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <TodoAppOriginal />
    <TodoApp />
  // </React.StrictMode>,
)
