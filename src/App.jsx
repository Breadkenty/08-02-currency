import React from 'react'
import { SelectBase } from './SelectBase'
import { Results } from './Results'
function App() {
  return (
    <main>
      <section className="currency-input">
        <form>
          <SelectBase />
          <div>
            <input name="amount" type="text" placeholder="Amount" />
          </div>
          <div>
            <input name="date" type="date" placeholder="huh" />
          </div>
        </form>
      </section>
      <Results />
    </main>
  )
}

export default App
