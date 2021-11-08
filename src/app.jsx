import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'
import Home from './View/Home/Home'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default function app() {
  return (
    <div className="App">
      <ErrorBoundary  FallbackComponent={ErrorFallback}>
        <Home />
        {/* <ErrorFallback/> */}
      </ErrorBoundary>
    </div>
  )
}
