import Head from "next/head";
import { Card } from "@nextui-org/react";
import styles from "../styles/Home.module.css";
import CardCustom from "../components/card";
import { Grid, Text, Input, Container, Row } from "@nextui-org/react";
import { Link } from "@mui/material";

export default function Home() {
  const hover = {
    "&:hover": {
      "> p": { color: "rgb(95, 81, 168) !important" },
      ".title": {
        textDecoration: "underline",
      },
    },
  };
  const data = [
    {
      title: "Videos",
      isPressable: false,
      img: "/video.jpg",
      children: (
        <Card.Footer css={{ justifyItems: "flex-start", paddingTop: 0 }}>
          <Container>
            <Link href="/videos">
              <Row
                css={{ marginTop: "15px", ...hover }}
                justify="space-between"
                align="center"
              >
                <Text className="title">Tutoriales</Text>
                <Text>→</Text>
              </Row>
            </Link>
            <Link href="/videos">
              <Row
                css={{ marginTop: "15px", ...hover }}
                justify="space-between"
                align="center"
              >
                <Text className="title">Videos y audiciones</Text>
                <Text
                  css={{
                    textDecoration: "none !important",
                  }}
                >
                  →
                </Text>{" "}
              </Row>
            </Link>
          </Container>
        </Card.Footer>
      ),
    },
    {
      title: "Ejemplos de ...",
      isPressable: false,
      img: "/ejemplos.jpg",
      children: (
        <Card.Footer css={{ justifyItems: "flex-start", paddingTop: 0 }}>
          <Container>
            <Link href="/ejemplos/armonizaciones">
              <Row
                css={{ marginTop: "15px", ...hover }}
                justify="space-between"
                align="center"
              >
                <Text className="title">
                  Armonizaciones de canciones populares
                </Text>
                <Text>→</Text>
              </Row>
            </Link>
            <Link href="/ejemplos/bases-electronicas">
              <Row
                css={{ marginTop: "15px", ...hover }}
                justify="space-between"
                align="center"
              >
                <Text className="title">
                  Bases electronicas de canciones populares
                </Text>

                <Text
                  css={{
                    textDecoration: "none !important",
                  }}
                >
                  →
                </Text>
              </Row>{" "}
            </Link>
            <Link href="/ejemplos/ejercicios">
              <Row
                css={{ marginTop: "15px", ...hover }}
                justify="space-between"
                align="center"
              >
                <Text className="title">Ejercicios de la asignatura</Text>
                <Text>→</Text>
              </Row>
            </Link>
          </Container>
        </Card.Footer>
      ),
    },
    {
      title: "Juegos",
      isPressable: false,
      img: "/juegos.jpg",
      children: (
        <Card.Footer css={{ justifyItems: "flex-start", paddingTop: 0 }}>
          <Container>
            <Link href="https://create.kahoot.it/share/repaso-de-armonia/2aa97ac1-7e82-402f-8024-c01c9b498bd0">
              <Row
                css={{ marginTop: "15px", ...hover }}
                justify="space-between"
                align="center"
              >
                <Text className="title">Juegos unidad didáctica 1</Text>

                <Text
                  css={{
                    textDecoration: "none !important",
                  }}
                >
                  →
                </Text>
              </Row>
            </Link>
            <Link href="https://es.educaplay.com/recursos-educativos/15454336-repaso_final_jose_ubago.html">
              <Row
                css={{ marginTop: "15px", ...hover }}
                justify="space-between"
                align="center"
              >
                <Text className="title">Juegos unidad didáctica 12</Text>
                <Text>→</Text>
              </Row>
            </Link>
          </Container>
        </Card.Footer>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Inicio - Recursos armonia</title>
      </Head>
      <Grid.Container gap={2} justify="center">
        {data.map((cardData) => (
          <Grid
            key={cardData.title}
            xs={12}
            md={3}
            css={{ height: "fit-content" }}
          >
            <CardCustom key={cardData.title} {...cardData} />{" "}
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
