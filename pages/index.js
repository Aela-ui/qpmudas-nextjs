import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

export default function Home() {
  return (
    <div>
      <Text>hi</Text>
    </div>
  )
}

const Text = styled.h1`
  color: blue;
`;