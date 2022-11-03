import React from 'react'
import Layout from '../../layout/Layout'
import Content from './Content'
import Details from './Details'
import Soldier from './Soldier'
import Carusel from './carusel/Carusel'

const Home = () => {
  return (
	<Layout>
		<div>
			<Content />
			<Carusel />
			<Soldier />
			<Details />
		</div>
	</Layout>
  )
}

export default Home