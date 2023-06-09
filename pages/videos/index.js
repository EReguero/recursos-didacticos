import Head from "next/head";
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
    title: "Unidad didáctica 7",
    id: "unidad-7",
  },
  {
    title: "Unidad didáctica 8",
    id: "unidad-8",
  },
  {
    title: "Unidad didáctica 9",
    id: "unidad-9",
  },
  {
    title: "Unidad didáctica 10",
    id: "unidad-10",
  },
  {
    title: "Unidad didáctica 11",
    id: "unidad-11",
  },
  {
    title: "Unidad didáctica 12",
    id: "unidad-12",
  },
];
const Video = () => {
  return (
    <>
      <Head>
        <title> Recursos Armonia - Videos </title>
      </Head>
      <BasicGridList sectionName="Videos" data={data} redirectBase="videos" />
    </>
  );
};

export default Video;
