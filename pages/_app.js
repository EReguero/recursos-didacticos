import { useState, useRef } from "react";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Navbar, Dropdown, Link, Text, Card, Radio } from "@nextui-org/react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function MyApp({ Component, pageProps }) {
  const [variant, setVariant] = useState("static");
  const myRefname = useRef(null);

  const variants = ["static", "floating", "sticky"];
  return (
    <NextUIProvider>
      <main>
        <Navbar isBordered variant={variant}>
          <Navbar.Brand>
            <Link href="/">
              <Text b color="inherit" hideIn="xs">
                Recursos Armonia
                <MusicNoteIcon />
              </Text>
            </Link>
          </Navbar.Brand>
          <Navbar.Content hideIn="xs">
            <Navbar.Link href="/">Inicio</Navbar.Link>
            <Dropdown isBordered>
              <Navbar.Item>
                <Dropdown.Button
                  ref={myRefname}
                  onMouseEnter={() => {
                    console.log("enter");
                    myRefname.current?.click();
                  }}
                  auto
                  light
                  css={{
                    px: 0,
                    dflex: "center",
                    svg: { pe: "none" },
                  }}
                  ripple={false}
                >
                  Videos
                </Dropdown.Button>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="ACME features"
                css={{
                  $$dropdownMenuWidth: "340px",
                  $$dropdownItemHeight: "70px",
                  "& .nextui-dropdown-item": {
                    py: "$4",
                    // dropdown item left icon
                    svg: {
                      color: "$secondary",
                      mr: "$4",
                    },
                    // dropdown item title
                    "& .nextui-dropdown-item-content": {
                      w: "100%",
                      fontWeight: "$semibold",
                    },
                  },
                }}
              >
                <Dropdown.Item key="usage_metrics">
                  <Navbar.Link href="/tutoriales"> Tutoriales</Navbar.Link>
                </Dropdown.Item>
                <Dropdown.Item key="production_ready">
                  <Navbar.Link href="/videos"> Videos y audiciones</Navbar.Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown isBordered>
              <Navbar.Item>
                <Dropdown.Button
                  auto
                  light
                  css={{
                    px: 0,
                    dflex: "center",
                    svg: { pe: "none" },
                  }}
                  ripple={false}
                >
                  Ejemplos
                </Dropdown.Button>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="ACME features"
                css={{
                  $$dropdownMenuWidth: "340px",
                  $$dropdownItemHeight: "70px",
                  "& .nextui-dropdown-item": {
                    py: "$4",
                    // dropdown item left icon
                    svg: {
                      color: "$secondary",
                      mr: "$4",
                    },
                    // dropdown item title
                    "& .nextui-dropdown-item-content": {
                      w: "100%",
                      fontWeight: "$semibold",
                    },
                  },
                }}
              >
                <Dropdown.Item key="usage_metrics">
                  Armonizaciones de canciones populares
                </Dropdown.Item>
                <Dropdown.Item key="production_ready">
                  Bases electronicas de canciones populares
                </Dropdown.Item>

                <Dropdown.Item key="supreme_support">
                  Ejercicios de la asignatura
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Link href="#">Juegos</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content></Navbar.Content>
        </Navbar>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}

export default MyApp;
