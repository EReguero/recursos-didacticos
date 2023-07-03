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
              <MusicNoteIcon style={{ marginRight: "10px" }} />
              <Text b color="inherit">
                Recursos Armonía <br />
                José Ubago
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
                  Vídeos
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
                    "& .nextui-navbar-item": {
                      justifyContent: "center",
                    },
                  },
                }}
              >
                <Dropdown.Item key="videos">
                  <Navbar.Link href="/videos"> Vídeos y audiciones</Navbar.Link>
                </Dropdown.Item>
                <Dropdown.Item key="tutoriales">
                  <Navbar.Link href="/tutoriales"> Tutoriales</Navbar.Link>
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
                    "& .nextui-navbar-item": {
                      justifyContent: "center",
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
                    Bases electrónicas de canciones populares
                  </Navbar.Link>
                </Dropdown.Item>

                <Dropdown.Item key="supreme_support">
                  <Navbar.Link href="/ejemplos/ejercicios">
                    Ejercicios de la asignatura
                  </Navbar.Link>
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
                  Juegos
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
                    "& .nextui-navbar-item": {
                      justifyContent: "center",
                    },
                  },
                }}
              >
                <Dropdown.Item key="usage_metrics">
                  <Navbar.Link href="https://create.kahoot.it/share/repaso-de-armonia/2aa97ac1-7e82-402f-8024-c01c9b498bd0">
                    Juegos unidad didáctica 1
                  </Navbar.Link>
                </Dropdown.Item>
                <Dropdown.Item key="production_ready">
                  <Navbar.Link href="https://es.educaplay.com/recursos-educativos/15454336-repaso_final_jose_ubago.html">
                    Juegos unidad didáctica 12
                  </Navbar.Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Content>
          <Navbar.Content></Navbar.Content>
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
              <Link href="/videos"> Vídeos y audiciones </Link>
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
                Ejemplos de bases electrónicas de canciones populares
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
              <Link href="https://create.kahoot.it/share/repaso-de-armonia/2aa97ac1-7e82-402f-8024-c01c9b498bd0">
                Juegos unidad didáctica 1
              </Link>
            </Navbar.CollapseItem>
            <Spacer y={1} />
            <Navbar.CollapseItem>
              <Link href="https://es.educaplay.com/recursos-educativos/15454336-repaso_final_jose_ubago.html">
                Juegos unidad didáctica 12
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
