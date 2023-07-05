import { Collapse, Text, Grid, Container } from "@nextui-org/react";
import CardCustom from "./card";
import Head from "next/head";

const BasicYTList = ({ name, unidadData, sectionName }) => {
  return (
    <Container Container css={{ paddingTop: "5px" }}>
      <Head>
        <title>
          {sectionName} - Unidad Didáctica {name}
        </title>
      </Head>
      <Grid.Container gap={2} css={{ paddingTop: "50px" }} justify="center">
        <Grid
          xs={12}
          justify="center"
          md={12}
          css={{ height: "fit-content", color: "black" }}
        >
          <Text h2>{unidadData && unidadData.title}</Text>
        </Grid>
        <Collapse.Group splitted>
          {unidadData &&
            unidadData.videos &&
            unidadData.videos.map((video) => (
              <Grid
                key={video.title}
                xs={12}
                md={12}
                css={{ height: "fit-content", color: "black" }}
              >
                <Collapse
                  title={video.title}
                  shadow
                  css={{ border: "1px solid black !important" }}
                >
                  <iframe
                    height="315"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Collapse>
              </Grid>
            ))}
        </Collapse.Group>
      </Grid.Container>
    </Container>
  );
};

export default BasicYTList;
