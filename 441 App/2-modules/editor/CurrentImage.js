import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { connect } from "react-redux";
import { Surface } from "gl-react-expo";
import { Shaders, Node, GLSL } from "gl-react";
import { HueRotate } from "gl-react-hue-rotate";
import { Tint } from "react-native-color-matrix-image-filters";

const select = ({ editor }) => ({
  src: editor.currentImage,
  temperature: editor.temperature,
  contrast: editor.contrast,
  brightness: editor.brightness,
  saturation: editor.saturation
});

const shaders = Shaders.create({
  Saturate: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D t;
    uniform float contrast, saturation, brightness;
    const vec3 L = vec3(0.2125, 0.7154, 0.0721);
    void main() {
      vec4 c = texture2D(t, uv);
      vec3 brt = c.rgb * brightness;
      gl_FragColor = vec4(mix(
        vec3(0.5),
        mix(vec3(dot(brt, L)), brt, saturation),
        contrast), c.a);
    }
`
  }
});

const Saturate = ({ contrast, saturation, brightness, children }) => (
  <Node
    shader={shaders.Saturate}
    uniforms={{ contrast, saturation, brightness, t: children }}
  />
);

function CurrentImage({ src, ...settings }) {
  return (
    <Tint amount={1.25}>
      <Image style={styles.image} source={src} />
    </Tint>
  );
}

export default connect(
  select,
  null
)(CurrentImage);

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300
  },
  image: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined,
    resizeMode: "contain"
  }
});
