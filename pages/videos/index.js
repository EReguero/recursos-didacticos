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
    title: "Unidad Didáctica 7",
    id: "unidad-7",
  },
  {
    title: "Unidad Didáctica 8",
    id: "unidad-8",
  },
  {
    title: "Unidad Didáctica 9",
    id: "unidad-9",
  },
  {
    title: "Unidad Didáctica 10",
    id: "unidad-10",
  },
  {
    title: "Unidad Didáctica 11",
    id: "unidad-11",
  },
  {
    title: "Unidad Didáctica 12",
    id: "unidad-12",
  },
];
const Video = () => {
  return (
    <>
      <Head>
        <title> Recursos Armonia - Vídeos </title>
      </Head>
      <BasicGridList sectionName="Vídeos" data={data} redirectBase="videos" />
    </>
  );
};

export default Video;
