import _Grid from "./Grid.svelte";
import Col from "./Col/Col.svelte";

// Combine Grid and Col
_Grid.Col = Col;
const Grid = _Grid as typeof _Grid & { Col: typeof Col };

export { Grid };
