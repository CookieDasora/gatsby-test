import * as React from "react"
import { Helmet } from 'react-helmet';
import logo from '../images/icon.png';

const IndexPage = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Home - Simple App</title>
        <meta charSet="utf-8"/>
        <meta name="author" content="Cookie" />
        <meta name="description" content="Esse e um simples site feito apenas para testar o Gatsby"/>
        <meta content="Simple App" property="og:title" />
        <meta content="Esse e um simples site feito apenas para testar o Gatsby" property="og:description" />
        <meta content="https://gatsbytestmaster72217.gatsbyjs.io/" property="og:url" />
        <meta content={logo} property="og:image" />
        <meta content="#4F46E5" data-react-helmet="true" name="theme-color" />
      </Helmet>
      <div className="bg-indigo-600 rounded-xl">
        <h1 className="font-bold text-left font-medium text-white m-8 text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Hello world from Gatsby!
        </h1>
        <p className="font-bold text-left font-medium text-white text-xl mb-4 ml-8 md:mb-4 md:mr-12 lg:mb-10 lg:mr-32 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
          This is my first Gatsby app, Gatsby & Tailwind is a great stack! Please try it!
        </p>
      </div>
    </main>
  )
}

export default IndexPage
