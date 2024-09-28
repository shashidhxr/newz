import Tile, { TileProps } from "./Tile";

export default function News({
    articles
}: TileProps) {
  return (
    <div>
      <Tile articles={articles} />
    </div>
  );
}
