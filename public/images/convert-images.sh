find . -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -exec sh -c '
  for img; do
    out="${img%.*}.webp"
    cwebp -q 80 "$img" -o "$out"
  done
' sh {} +
