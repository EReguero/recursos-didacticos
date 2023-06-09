import { useRouter } from "next/router";
import BasicYTList from "../../components/BasicYTList";
import { Card, Text, Grid, Container } from "@nextui-org/react";
import CardCustom from "../../components/card";

const data = {
  ejercicios: {
    files: [
      {
        title: "Ejemplos de Ejercicios de la asignatura",
        img: "/pdf.jpg",
        link: "/archivos/ejemplos-ejercicios-asignatura.pdf",
      },
    ],
  },
  armonizaciones: {
    files: [
      {
        title: "Anda Jaleo",
        img: "/pdf.jpg",
        link: "/archivos/anda-jaleo.pdf",
      },
      {
        title: "Arroyo Claro",
        img: "/pdf.jpg",
        link: "/archivos/arroyo-claro.pdf",
      },
      {
        title: "El Conde Olinos",
        img: "/pdf.jpg",
        link: "/archivos/el-conde-olinos.pdf",
      },
      {
        title: "El Vito",
        img: "/pdf.jpg",
        link: "/archivos/el-vito.pdf",
      },
      {
        title: "Fandango de Alquife",
        img: "/pdf.jpg",
        link: "/archivos/fandango-de-alquife.pdf",
      },
      {
        title: "Jota de Huéneja",
        img: "/pdf.jpg",
        link: "/archivos/jota-de-hueneja.pdf",
      },
      {
        title: "La Mosca",
        img: "/pdf.jpg",
        link: "/archivos/la-mosca.pdf",
      },
      {
        title: "La Reja",
        img: "/pdf.jpg",
        link: "/archivos/la-reja.pdf",
      },
      {
        title: "Los Pelegrinitos",
        img: "/pdf.jpg",
        link: "/archivos/los-peligrinitos.pdf",
      },
      {
        title: "Los Reyes de la Baraja",
        img: "/pdf.jpg",
        link: "/archivos/los-reyes-de-la-baraja.pdf",
      },
      {
        title: "Que vengo del Moro",
        img: "/pdf.jpg",
        link: "/archivos/que-vengo-del-moro.pdf",
      },
      {
        title: "Tres Hojitas, Madre",
        img: "/pdf.jpg",
        link: "/archivos/tres-hojitas-madre.pdf",
      },
      {
        title: "Zorongo Gitano",
        img: "/pdf.jpg",
        link: "/archivos/zorongo-gitano.pdf",
      },
    ],
  },
  "bases-electronicas": {
    files: [
      {
        title: "Arroyo Claro",
        img: "/audio.jpg",
        link: "/archivos/arroyo-claro.wav",
        subtext: "Descargar →",
      },
      {
        title: "La Mosca",
        img: "/audio.jpg",
        link: "/archivos/la-mosca.wav",
        subtext: "Descargar →",
      },
    ],
  },
};
const Ejemplos = () => {
  const router = useRouter();
  const id = router.query.id;
  const unidadData = data[id] ?? {};

  if (id && !data[id]) {
    window.location = "/404";
  }

  return (
    <Container>
      <Grid.Container gap={2} css={{ paddingTop: "50px" }} justify="center">
        {unidadData &&
          unidadData.files &&
          unidadData.files.map((cardData) => (
            <Grid
              key={cardData.title}
              xs={12}
              justify="center"
              md={3}
              css={{ height: "fit-content", color: "black" }}
            >
              <CardCustom
                {...cardData}
                onPress={() => router.push(cardData.link)}
                subtext={cardData.subtext ?? "Ver →"}
              />
            </Grid>
          ))}
        <Grid.Container xs={0} md={3} />
      </Grid.Container>
    </Container>
  );
};

export default Ejemplos;
