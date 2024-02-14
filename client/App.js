import React, { useState } from 'react';
import ImageContainer from './Components/ImageContainer';
import TextContainer from './Components/TextContainer';
import ButtonContainer from './Components/ButtonContainer';

import images, { successImage } from './assets/images';
import texts, { successText } from './assets/texts';

import './styles.css';
function App() {
  const [image, setImage] = useState(0);
  const [text, setText] = useState(0);
  const [success, setSuccess] = useState(false);

  function yes() {
    setSuccess(true);
  }

  function no() {
    setText((prev) => (prev >= texts.length - 1 ? prev : prev + 1));
    setImage((prev) => (prev >= images.length - 1 ? 1 : prev + 1));
  }

  return (
    <React.Fragment>
      <ImageContainer src={success ? successImage : images[image]} />
      {/*  */}
      {success ? (
        <div id='Text'>
          {successText.map((t) => (
            <p>{t}</p>
          ))}
        </div>
      ) : (
        <TextContainer text={texts[text]} />
      )}
      {/*  */}
      {success ? '' : <ButtonContainer yes={yes} no={no} />}
    </React.Fragment>
  );
}

export default App;
