export async function fetchImages() {
  const response = await fetch(
    `https://randomfox.ca/floof/`
  );
  const data = await response.json();
  return data.image;
}