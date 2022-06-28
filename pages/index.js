import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Text>hi</Text>
    </div>
  );
}

const Text = styled.h1`
  color: blue;
`;
