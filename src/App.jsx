import React, { useState, useEffect } from 'react'
import { SelectBase } from './SelectBase'
import { Results } from './Results'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function App() {
  const [currencyBase, setCurrencyBase] = useState('USD')
  const [currencyDate, setCurrencyDate] = useState('latest')
  const [amountInput, setAmountInput] = useState(21)
  const [currencyRates, setCurrencyRates] = useState({
    GBP: 0.8029223093,
    HKD: 7.7500890948,
    IDR: 14509.9964362081,
    ILS: 3.4361190306,
    DKK: 6.6389878831,
    INR: 74.6801496793,
    CHF: 0.9464540271,
    MXN: 22.5453492516,
    CZK: 23.7571275837,
    SGD: 1.3946899501,
    THB: 31.1101211689,
    HRK: 6.732893799,
    EUR: 0.8909479686,
    MYR: 4.2875089095,
    NOK: 9.5130969351,
    CNY: 7.0661083393,
    BGN: 1.7425160371,
    PHP: 49.4796863863,
    PLN: 3.9813791875,
    ZAR: 17.0849073414,
    CAD: 1.3571810406,
    ISK: 139.2551674982,
    BRL: 5.3561119031,
    RON: 4.3095153243,
    NZD: 1.5327868852,
    TRY: 6.8564682823,
    JPY: 107.5196008553,
    RUB: 71.4676585887,
    KRW: 1199.6970776907,
    USD: 1.0,
    AUD: 1.4411083393,
    HUF: 314.1037063435,
    SEK: 9.3295616536,
  })

  function handleBaseChange(event) {
    setCurrencyBase(event.target.value)
  }

  function handleAmountChange(event) {
    setAmountInput(event.target.value)
  }

  return (
    <main>
      <section className="currency-input">
        <form>
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
            <input name="date" type="date" />
          </div>
        </form>
      </section>
      <section className="currency-output">
        {Object.entries(currencyRates).map((rates, index) => {
          return (
            <>
              <span className="currency-label">{rates[0]}</span>
              <span className="currency-number">
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
