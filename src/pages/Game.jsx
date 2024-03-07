import React, { useState, useEffect } from "react";
import "../../public/css/Game.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
// import imageData from "../data/puzzle.json";
import Expanse from "../images/mainevents/expanceposter.webp";
import CodeChaos from "../images/mainevents/codechaosposter.webp";
import FrameByFrame from "../images/mainevents/framebyframeposter.webp";
import PicturePerfect from "../images/mainevents/pictureperfectposter.webp";
import BridgeMaking from "../images/mainevents/bridgemakingposter.webp";
import WebOFiesta from "../images/mainevents/web-o-fistaposter.webp";
import CodeCleanse from "../images/mainevents/codecleanseposter.webp";
import MakeItPrint from "../images/mainevents/makeitprintposter.webp";
import CodeRumble from "../images/mainevents/coderumbleposter.webp";
import CodeRelay from "../images/mainevents/coderelayposter.png";
import Valorant from "../images/mainevents/valorantposter.webp";
import InterfaceInvent from "../images/mainevents/interfaceinventposter.webp";
import StorageWars from "../images/mainevents/storagewarsposter.webp";
import Tekken from "../images/mainevents/tekkenposter.webp";
import Fifa from "../images/mainevents/fifaposter.webp";

const imageData = [
  {
    "id": "1",
    "imageUrl": Expanse
  },
  {
    "id": "2",
    "imageUrl": CodeChaos
  },
  {
    "id": "3",
    "imageUrl": FrameByFrame
  },
  {
    "id": "4",
    "imageUrl": PicturePerfect
  },
  {
    "id": "5",
    "imageUrl": BridgeMaking
  },,
  {
    "id": "6",
    "imageUrl": WebOFiesta
  },,
  {
    "id": "7",
    "imageUrl": CodeCleanse
  },,
  {
    "id": "8",
    "imageUrl": MakeItPrint
  },,
  {
    "id": "9",
    "imageUrl": CodeRumble
  },,
  {
    "id": "10",
    "imageUrl": CodeRelay
  },,
  {
    "id": "11",
    "imageUrl": Valorant
  },,
  {
    "id": "12",
    "imageUrl": InterfaceInvent
  },,
  {
    "id": "13",
    "imageUrl": StorageWars
  },,
  {
    "id": "14",
    "imageUrl": Tekken
  },,
  {
    "id": "15",
    "imageUrl": Fifa
  },
  
];


const Game = () => {
  const { width, height } = useWindowSize();
  const [isSolved, setIsSolved] = useState(false);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    // Extract image URLs from the array of imageData
    const imageUrls = imageData.map(item => item.imageUrl);
    // Shuffle the array of image URLs
    const shuffled = [...imageUrls].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  const handleSolved = () => {
    setIsSolved(true);
  };

  return (
    <div className="puzzle-page">
      <JigsawPuzzle
        imageSrc={shuffledImages[0]} // Use the first shuffled image
        rows={3}
        columns={3}
        onSolved={handleSolved}
      />
      <img src={shuffledImages[0]} alt="puzzle" className="puzzle-image" />

      {isSolved && <Confetti width={width} height={height} />}
    </div>
  );
};

export default Game;
