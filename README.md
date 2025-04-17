# static-kaia-nft-assets

```
magick mogrify -path thumbnails/bmcs -filter point -resize 256x256 -format png images/bmcs/*.png
magick mogrify -path thumbnails/deepsea -filter point -resize 256x256 -format png images/deepsea/*.png
magick mogrify -path thumbnails/poison -filter point -resize 256x256 -format png images/poison/*.png
magick mogrify -path thumbnails/ruby -filter point -resize 256x256 -format png images/ruby/*.png
magick mogrify -path thumbnails/sapphire -filter point -resize 256x256 -format png images/sapphire/*.png

magick mogrify -path thumbnails -resize 256x256 -format png images/*.png
magick mogrify -path thumbnails -filter point -resize 256x256 -format png images/*.png
```
