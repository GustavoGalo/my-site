import type { NextPage } from "next";
import { Container, Loader } from "../styles";

const Home: NextPage = () => {
  return (
    <Container>
      <Loader />
      <div>In progress...</div>
    </Container>
  );
};

export default Home;
