import biasedMatesMetadataLegacy from "../dogesoundclub-biased-mates/metadata-legacy.json" with {
  type: "json",
};
import eMatesMetadataLegacy from "../dogesoundclub-e-mates/metadata-legacy.json" with {
  type: "json",
};
import matesMetadataLegacy from "../dogesoundclub-mates/metadata-legacy.json" with {
  type: "json",
};
import pixelKongzMetadataLegacy from "../kingcrowndao-pixel-kongz/metadata-legacy.json" with {
  type: "json",
};
import fs from "fs";

const biasedMatesMetadata: any[] = [];
for (const metadata of biasedMatesMetadataLegacy as any) {
  const type = metadata.type ? metadata.type : "bmcs";

  biasedMatesMetadata.push({
    id: metadata.id,
    name: metadata.name,
    image:
      `https://matedevdao.github.io/static-kaia-nft-assets/dogesoundclub-biased-mates/images/${type}/${metadata.id}.png`,
    thumbnail:
      `https://matedevdao.github.io/static-kaia-nft-assets/dogesoundclub-biased-mates/thumbnails/${type}/${metadata.id}.png`,
    description: metadata.description,
    external_url: metadata.external_url,
    attributes: metadata.attributes,
  });
}

fs.writeFileSync(
  "../dogesoundclub-biased-mates/metadata.json",
  JSON.stringify(biasedMatesMetadata, null, 2),
);

const eMatesMetadata: any[] = [];
for (const metadata of eMatesMetadataLegacy as any) {
  eMatesMetadata.push({
    id: metadata.tokenId,
    name: metadata.name,
    image:
      `https://matedevdao.github.io/static-kaia-nft-assets/dogesoundclub-e-mates/images/${metadata.tokenId}.png`,
    thumbnail:
      `https://matedevdao.github.io/static-kaia-nft-assets/dogesoundclub-e-mates/thumbnails/${metadata.tokenId}.png`,
    description: metadata.description,
    external_url: "https://dogesound.club/",
    attributes: metadata.attributes,
  });
}

fs.writeFileSync(
  "../dogesoundclub-e-mates/metadata.json",
  JSON.stringify(eMatesMetadata, null, 2),
);

const matesMetadata: any[] = [];
for (const metadata of matesMetadataLegacy as any) {
  const id = parseInt(metadata.name.split("#")[1]);

  matesMetadata.push({
    id,
    name: metadata.name,
    image:
      `https://matedevdao.github.io/static-kaia-nft-assets/dogesoundclub-mates/images/${id}.png`,
    thumbnail:
      `https://matedevdao.github.io/static-kaia-nft-assets/dogesoundclub-mates/thumbnails/${id}.png`,
    description: metadata.description,
    external_url: "https://dogesound.club/",
    attributes: metadata.attributes,
  });
}

fs.writeFileSync(
  "../dogesoundclub-mates/metadata.json",
  JSON.stringify(matesMetadata, null, 2),
);

const pixelKongzMetadata: any[] = [];

for (const metadata of pixelKongzMetadataLegacy as any) {
  const id = parseInt(metadata.name.split("#")[1]);

  pixelKongzMetadata.push({
    id,
    name: metadata.name,
    image:
      `https://matedevdao.github.io/static-kaia-nft-assets/kingcrowndao-pixel-kongz/images/${id}.png`,
    thumbnail:
      `https://matedevdao.github.io/static-kaia-nft-assets/kingcrowndao-pixel-kongz/thumbnails/${id}.png`,
    description: metadata.description,
    external_url: "https://kingcrowndao.github.io/",
    attributes: metadata.attributes,
  });
}

fs.writeFileSync(
  "../kingcrowndao-pixel-kongz/metadata.json",
  JSON.stringify(pixelKongzMetadata, null, 2),
);

console.log("Metadata generated successfully");
