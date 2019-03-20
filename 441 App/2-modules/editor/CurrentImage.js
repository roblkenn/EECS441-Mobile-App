import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";

const select = ({ editor }) => ({
  src: editor.currentImage
});

// function CurrentImage({ src }) {
//   return (
//     <ProcessImage
//       image="http://365.unsplash.com/assets/paul-jarvis-9530891001e7f4ccfcef9f3d7a2afecd.jpg"
//       resize={{ width: 500, height: 500 }}
//       colors={{
//         mix: {
//           color: "mistyrose",
//           amount: 20
//         }
//       }}
//       processedImage={(src, err) => null}
//     />
//   );
// }

function CurrentImage({ src }) {
  return <Image style={styles.image} source={src} />;
}

export default connect(
  select,
  null
)(CurrentImage);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined,
    resizeMode: "contain"
  }
});
