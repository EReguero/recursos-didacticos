import { useRouter } from "next/router";
import BasicYTList from "../../components/BasicYTList";

const data = {
  "unidad-2": {
    title: "Unidad didáctica 2",
    videos: [
      {
        title: "La mosca",
        url: "https://www.youtube.com/embed/yITXtYIICBU",
      },
      {
        title: "Flamenco, möte med spanska zigenare",
        url: "https://www.youtube.com/embed/lOE14rUfmhU?start=550",
      },
    ],
  },
  "unidad-3": {
    title: "Unidad didáctica 3",
    videos: [
      {
        title: "Coral J. S. Bach Cantata BWV 4",
        url: "https://www.youtube.com/embed/NtA6lKGb-FA",
      },
    ],
  },
  "unidad-4": {
    title: "Unidad didáctica 4",
    videos: [
      {
        title: "Rito y Geografía del Cante RTVE",
        url: "https://www.youtube.com/embed/N9RkFccchB4",
      },
      {
        title: "Documental sobre Jota aragonesa",
        url: "https://www.youtube.com/embed/5q0AVSxVrdU",
      },
    ],
  },
  "unidad-7": {
    title: "Unidad didáctica 7",
    videos: [
      {
        title: "Los Reyes de la Baraja",
        url: "https://www.youtube.com/embed/6LSDmChnsfc",
      },
    ],
  },
  "unidad-8": {
    title: "Unidad didáctica 8",
    videos: [
      {
        title: "Soleá",
        url: "https://www.youtube.com/embed/EqepAtZlRa4",
      },
      {
        title: "Fandango",
        url: "https://www.youtube.com/embed/VAMyMf-HpMc",
      },
      {
        title: "Alegrías",
        url: "https://www.youtube.com/embed/hGiW7uD55zs",
      },
      {
        title: "Bulería",
        url: "https://www.youtube.com/embed/birBPWd0LN8",
      },
      {
        title: "Tangos",
        url: "https://www.youtube.com/embed/tXVFP9T_W1s",
      },
    ],
  },
  "unidad-9": {
    title: "Unidad didáctica 9",
    videos: [
      {
        title: "Anda Jaleo",
        url: "https://www.youtube.com/embed/U7HR83QlzYk",
      },
      {
        title: "Documental sobre Paco de Lucía",
        url: "https://www.youtube.com/embed/HuigQEXzDlM",
      },
    ],
  },
  "unidad-10": {
    title: "Unidad didáctica 10",
    videos: [
      {
        title: "Los Pelegrinitos",
        url: "https://www.youtube.com/embed/j87aWohpV68",
      },
      {
        title: "Los Pelegrinitos Carmen Linares",
        url: "https://www.youtube.com/embed/VbaIS2lj5KA",
      },
    ],
  },
  "unidad-11": {
    title: "Unidad didáctica 11",
    videos: [
      {
        title: "Zorongo Gitano",
        url: "https://www.youtube.com/embed/6BpavGRj_P4",
      },
      {
        title: "Zorongo Gitano Estrella Morente",
        url: "https://www.youtube.com/embed/_7jToonGXoQ",
      },
    ],
  },
  "unidad-12": {
    title: "Unidad didáctica 12",
    videos: [
      {
        title: "La Reja",
        url: "https://www.youtube.com/embed/E1NkG7nteR0",
      },
    ],
  },
};
const Video = () => {
  const router = useRouter();
  const id = router.query.id;
  const name = id && id.length > 0 ? id[0].split(" - ") : "";
  const unidadData = data[id] ?? {};

  if (id && !data[id]) {
    window.location = "/404";
  }

  return (
    <BasicYTList unidadData={unidadData} name={name} sectionName={"Videos"} />
  );
};

export default Video;
