import {
  Container,
  Row,
  Input,
  Spacer,
  Text,
  Link,
  Card,
} from "@nextui-org/react";

const CardCustom = ({
  title,
  subtext,
  img,
  children,
  isPressable = true,
  onPress = () => {},
}) => {
  return (
    <Card onPress={onPress} isPressable={isPressable}>
      <Card.Body css={{ p: 0, borderBottom: "1px solid black" }}>
        <Card.Image
          src={img}
          objectFit="cover"
          width="100%"
          height={140}
          alt="test"
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Row wrap="wrap" justify="space-between" align="center">
          <Text b>{title}</Text>
          {subtext && (
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
              }}
            >
              {subtext}
            </Text>
          )}
        </Row>
      </Card.Footer>
      {children}
    </Card>
  );
};

export default CardCustom;
