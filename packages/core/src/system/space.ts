import * as CSS from "csstype";
import {
  compose,
  space as systemSpace,
  system,
  SpaceProps as SystemSpaceProps
} from "styled-system";

export const space = compose(
  systemSpace,
  system({
    gap: {
      property: "gap",
      scale: "space"
    }
  })
);

export type SpaceProps = SystemSpaceProps & {
  gap?: CSS.Properties["gap"];
};
