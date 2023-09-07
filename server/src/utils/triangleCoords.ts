export const getCoords = (height: number, radius: number, segments: number) => {
  const vertices: number[] = [];
  const indices: number[] = [];

  for (let i = 0; i < segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    const x = radius * Math.cos(theta);
    const z = radius * Math.sin(theta);
    vertices.push(x, 0, z);
  }

  vertices.push(0, height, 0);

  for (let i = 0; i < segments - 1; i++) {
    indices.push(i, i + 1, segments);
  }
  indices.push(segments - 1, 0, segments);

  return { vertices, indices };
};
