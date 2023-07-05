import Head from "next/head";
import BasicGridList from "../../components/BasicGridList";

const data = [
  {
    title: "Unidad Didáctica 2",
    id: "unidad-2",
  },
  {
    title: "Unidad Didáctica 3",
    id: "unidad-3",
  },
  {
    title: "Unidad Didáctica 4",
    id: "unidad-4",
  },
  {
    title: "Unidad Didáctica 6",
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
