import Head from "next/dist/next-server/lib/head";
import BasicGridList from "../../components/BasicGridList";

const data = [
  {
    title: "Unidad didáctica 2",
    id: "unidad-2",
  },
  {
    title: "Unidad didáctica 3",
    id: "unidad-3",
  },
  {
    title: "Unidad didáctica 4",
    id: "unidad-4",
  },
  {
    title: "Unidad didáctica 6",
    id: "unidad-6",
  },
];
const Tutoriales = () => {
  return (
    <>
      <Head>
        <title> Recursos Armonia - Tutoriales </title>
      </Head>
      <BasicGridList data={data} redirectBase="tutoriales" />;
    </>
  );
};

export default Tutoriales;
