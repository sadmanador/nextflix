import { MediaItem } from "@/types";
import Swal from "sweetalert2";



export default function handleAddToLocalStorage(item: MediaItem) {
  const existingItems: MediaItem[] = JSON.parse(
    localStorage.getItem("favoriteItems") || "[]"
  );

  const exists = existingItems.some(
    (existingItem) =>
      existingItem.id === item.id && existingItem.type === item.type
  );

  if (!exists) {
    existingItems.push(item);
    localStorage.setItem("favoriteItems", JSON.stringify(existingItems));

    Swal.fire({
      icon: "success",
      title: `${item.title} is added to your my list`,
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'small-swal-popup', 
      },
    });
  }
}
