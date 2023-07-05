import { useRouter } from "next/router";
import BasicYTList from "../../components/BasicYTList";

const data = {
  "unidad-2": {
    title: "Unidad Didáctica 2",
    videos: [
      {
        title: "Daw gratuitos",
        url: "https://www.youtube.com/embed/MUWoNInVzxk",
      },
      {
        title: "Editor de partituras gratuito",
        url: "https://www.youtube.com/embed/hcU_EGx_Ib0",
      },
    ],
  },
  "unidad-3": {
    title: "Unidad Didáctica 3",
    videos: [
      {
        title: "Reaper",
        url: "https://www.youtube.com/embed/ce1Ydk2MGss",
      },
    ],
  },
  "unidad-4": {
    title: "Unidad Didáctica 4",
    videos: [
      {
        title: "Bandlab",
        url: "https://www.youtube.com/embed/ibwi27gRjtk",
      },
    ],
  },
  "unidad-6": {
    title: "Unidad Didáctica 6",
    videos: [
      {
        title: "Musescore",
        url: "https://www.youtube.com/embed/HjelGL9aweQ",
      },
      {
        title: "Midi Reaper",
        url: "https://www.youtube.com/embed/ang7ANAf5B8",
      },
    ],
  },
};
const Tutorial = () => {
  const router = useRouter();
  const id = router.query.id;
  const name = id && id.length > 0 ? id[0].split(" - ") : "";
  const unidadData = data[id] ?? {};

  if (id && !data[id]) {
    window.location = "/404";
  }

  return (
    <BasicYTList sectionName="Tutoriales" unidadData={unidadData} name={name} />
  );
};

export default Tutorial;
