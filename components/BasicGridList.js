import { Card, Text, Grid, Container } from "@nextui-org/react";

const BasicGridList = ({ data, redirectBase }) => {
  return (
    <Container>
      <Grid.Container gap={2} css={{ paddingTop: "50px" }} justify="center">
        {data.map((cardData) => (
          <Grid
            key={cardData.title}
            xs={12}
            md={3}
            css={{ height: "fit-content", color: "black" }}
          >
            <Card
              isPressable
              onPress={() =>
                (window.location = `/${redirectBase}/${cardData.id}`)
              }
            >
              <Card.Body>
                <Text css={{ fontWeight: "bold" }}>{cardData.title} </Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
        <Grid.Container xs={0} md={3} />
      </Grid.Container>
    </Container>
  );
};

export default BasicGridList;
