import React, { useState, useEffect } from 'react'

function App() {
  function today() {
    const isoDate = new Date().toISOString()

    return isoDate.slice(0, 10)
  }

  const [currencyBase, setCurrencyBase] = useState('USD')
  const [currencyDate, setCurrencyDate] = useState(today())
  const [amountInput, setAmountInput] = useState(1)
  const [currencyRates, setCurrencyRates] = useState({})

  function handleBaseChange(event) {
    setCurrencyBase(event.target.value)
  }

  function handleAmountChange(event) {
    setAmountInput(event.target.value)
  }

  function handleDateChange(event) {
    setCurrencyDate(event.target.value)
  }

  const loadPhotoFromApi = () => {
    const url = `https://api.ratesapi.io/api/${currencyDate}?base=${currencyBase}`

    // Fetch the URL (get)
    fetch(url)
      // Then we turn the response into JSON
      .then(response => response.json())
      // Then we have the API data as an object
      .then(apiData => {
        setCurrencyRates(apiData.rates)
      })
  }

  useEffect(loadPhotoFromApi, [])
  useEffect(loadPhotoFromApi, [currencyBase, currencyDate])

  return (
    <main>
      <section className="currency-input">
        <div className="base-select-menu">
          <select
            name="base"
            placeholder="base"
            onChange={event => {
              handleBaseChange(event)
            }}
          >
            <option value="USD" default>
              USD
            </option>
            {Object.keys(currencyRates).map(rate => {
              return (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            onChange={event => {
              handleAmountChange(event)
            }}
          />
        </div>
        <div>
          <input
            name="date"
            type="date"
            value={currencyDate}
            max={today()}
            onChange={event => handleDateChange(event)}
          />
        </div>
        <button
          onClick={() => {
            setCurrencyDate(today())
          }}
        >
          Today
        </button>
      </section>
      <section className="currency-output">
        {Object.entries(currencyRates).map(rates => {
          return (
            <>
              <span key={rates[0]} className="currency-label">
                {rates[0]}
              </span>
              <span key={rates[1]} className="currency-number">
                {(rates[1] * amountInput).toFixed(2)}
              </span>
            </>
          )
        })}
      </section>
    </main>
  )
}

export default App
