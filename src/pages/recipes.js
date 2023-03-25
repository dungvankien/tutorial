import React from 'react'
import AllRecipes from '../components/AllRecipes';
import SEO from '../components/SEO';
import Layout from './../components/Layout';

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes"/>
        <main className='page'>
          <AllRecipes/>
        </main>
    </Layout>
  )
}

export default Recipes
