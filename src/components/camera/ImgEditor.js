import React from "react";
import AvatarEditor from "react-avatar-editor";

class ImgEditor extends React.Component {
  render() {
    return (
      <AvatarEditor
        image="https://vignette.wikia.nocookie.net/lotr/images/5/54/Untitledjk.png/revision/latest?cb=20130313174543"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
    );
  }
}

export default ImgEditor;
