import { useState, useRef } from "react";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Navbar, Dropdown, Link, Text, Spacer, Radio } from "@nextui-org/react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function MyApp({ Component, pageProps }) {
  const [variant, setVariant] = useState("sticky");
  const myRefname = useRef(null);

  const variants = ["static", "floating", "sticky"];
  return (
    <NextUIProvider>
      <main>
        <Navbar isBordered variant={variant}>
          <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />

          <Navbar.Brand>
            <Link href="/">
              <Text b color="inherit">
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
                  <Navbar.Link href="/ejemplos/armonizaciones">
                    Armonizaciones de canciones populares
                  </Navbar.Link>
                </Dropdown.Item>
                <Dropdown.Item key="production_ready">
                  <Navbar.Link href="/ejemplos/bases-electronicas">
                    Bases electronicas de canciones populares
                  </Navbar.Link>
                </Dropdown.Item>

                <Dropdown.Item key="supreme_support">
                  <Navbar.Link href="/ejemplos/ejercicios">
                    Ejercicios de la asignatura
                  </Navbar.Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Link href="https://create.kahoot.it/share/repaso-de-conceptos-armonicos/c8bde697-d5c7-48aa-8b2b-978baf7f3dba">
              Juegos
            </Navbar.Link>
          </Navbar.Content>
          <Navbar.Content></Navbar.Content>
          <Navbar.Collapse showIn="xs" css={{ color: "black" }}>
            <Navbar.CollapseItem>
              <Link href="/">Inicio</Link>
            </Navbar.CollapseItem>
            <Spacer y={1} />
            <Navbar.CollapseItem>
              <Link href="/tutoriales"> Tutoriales</Link>
            </Navbar.CollapseItem>
            <Spacer y={1} />
            <Navbar.CollapseItem>
              <Link href="/videos"> Videos y audiciones </Link>
            </Navbar.CollapseItem>
            <Spacer y={1} />
            <Navbar.CollapseItem>
              <Link href="/ejemplos/armonizaciones">
                Ejemplos de armonizaciones de canciones populares
              </Link>
            </Navbar.CollapseItem>
            <Spacer y={1} />
            <Navbar.CollapseItem>
              <Link href="/ejemplos/bases-electronicas">
                Ejemplos de bases electronicas de canciones populares
              </Link>
            </Navbar.CollapseItem>
            <Spacer y={1} />
            <Navbar.CollapseItem>
              <Link href="/ejemplos/ejercicios">
                Ejemplos de ejercicios de la asignatura
              </Link>
            </Navbar.CollapseItem>
            <Spacer y={1} />
            <Navbar.CollapseItem>
              <Link href="https://create.kahoot.it/share/repaso-de-conceptos-armonicos/c8bde697-d5c7-48aa-8b2b-978baf7f3dba">
                Juegos
              </Link>
            </Navbar.CollapseItem>
          </Navbar.Collapse>
        </Navbar>

        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}

export default MyApp;
