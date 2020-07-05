import React from 'react'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
export function SelectBase() {
  return (
    <div className="base-select-menu">
      <select name="base" placeholder="base">
        <option default>Base Currency</option>
        <option value="GBP">GBP</option>
        <option value="HKD">HKD</option>
        <option value="IDR">IDR</option>
        <option value="ILS">ILS</option>
        <option value="DKK">DKK</option>
        <option value="INR">INR</option>
        <option value="CHF">CHF</option>
        <option value="MXN">MXN</option>
        <option value="CZK">CZK</option>
        <option value="SGD">SGD</option>
        <option value="THB">THB</option>
        <option value="HRK">HRK</option>
        <option value="EUR">EUR</option>
        <option value="MYR">MYR</option>
        <option value="NOK">NOK</option>
        <option value="CNY">CNY</option>
        <option value="BGN">BGN</option>
        <option value="PHP">PHP</option>
        <option value="PLN">PLN</option>
        <option value="ZAR">ZAR</option>
        <option value="CAD">CAD</option>
        <option value="ISK">ISK</option>
        <option value="BRL">BRL</option>
        <option value="RON">RON</option>
        <option value="NZD">NZD</option>
        <option value="TRY">TRY</option>
        <option value="JPY">JPY</option>
        <option value="RUB">RUB</option>
        <option value="KRW">KRW</option>
        <option value="USD">USD</option>
        <option value="AUD">AUD</option>
        <option value="HUF">HUF</option>
        <option value="SEK">SEK</option>
      </select>
    </div>
  )
}