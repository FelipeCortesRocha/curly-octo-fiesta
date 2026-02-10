import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <form name='transaction-form' onSubmit={}>
        <input name='amount' type='number' />
        <input name='description' type='text' />
        <button type='submit'>Send new transaction</button>
      </form>
    </>
  </StrictMode>,
)
