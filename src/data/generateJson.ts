import * as poemsObj from "./poems";

export default function script() {
  const poems = Object.entries(poemsObj)
    .sort(([k1], [k2]) => {
      const i1 = parseInt(k1.replace("poem", ""));
      const i2 = parseInt(k2.replace("poem", ""));
      return i1 - i2;
    })
    .map(([k, v]) => {
      const i = parseInt(k.replace("poem", ""));
      return { index: i, poem: v };
    });

  console.log(JSON.stringify(poems));
}
